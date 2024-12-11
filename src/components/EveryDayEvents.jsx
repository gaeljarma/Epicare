import React, { useState } from "react";
import Sad from "./icons/Sad";
import Happy from "./icons/Happy";
import Empty from "./icons/Empty";
import { View, Text, Pressable, TextInput, Alert } from "react-native";
import { supabase } from '../components/supabaseClient'; // Ajusta el path según tu estructura
import { useLocalSearchParams } from "expo-router";

function EveryDayEvents() {
    const { date } = useLocalSearchParams(); // Obtenemos la fecha desde los parámetros locales
    const [medice, setMedice] = useState(false);
    const [state, setState] = useState(1); // 0 - Sad, 1 - Empty, 2 - Happy
    const [sleepHours, setSleepHours] = useState("");
    const [seizureCount, setSeizureCount] = useState("");
  
    const handleSubmit = async () => {
      if (!sleepHours || seizureCount === "") {
          Alert.alert("Error", "Por favor completa todos los campos.");
          return;
      }
  
      try {
          const { data: { user }, error: userError } = await supabase.auth.getUser();
          if (userError) throw userError;
          if (!user) {
              console.error("No user logged in");
              return;
          }
  
          const profiles_id = user.id;
  
          // Verificar si ya existe un registro para la fecha
          const { data: existingData, error: fetchError } = await supabase
              .from("dates")
              .select("id")
              .eq("date", date)
              .single();
  
          if (fetchError && fetchError.code !== "PGRST116") { // Ignorar el error si no se encuentra un registro
              console.error("Error al verificar datos existentes:", fetchError.message);
              return;
          }
  
          if (existingData) {
              // Si ya existen datos para esa fecha, no insertar nada nuevo y mostrar un mensaje
              Alert.alert("Aviso", "Ya existen datos para esta fecha.");
              return;
          }
  
          let dates_id;
  
          // Si no existen datos, insertar los nuevos
          const { data: dateData, error: insertError } = await supabase
              .from("dates")
              .insert([{ date: date, profiles_id }])
              .select()
              .single();
  
          if (insertError) throw insertError;
          dates_id = dateData.id;
  
          // Insertar los datos relacionados
          await supabase.from("sueño").insert([{ dates_id, cantHoras: parseFloat(sleepHours) }]);
          await supabase.from("convulsion").insert([{ dates_id, cantidad: parseInt(seizureCount) }]);
          await supabase.from("animo").insert([{ dates_id, mood_state: state }]);
          await supabase.from("medication").insert([{ dates_id, consumido: medice }]);
  
          // Solo mostrar el mensaje de éxito si no hay datos existentes
          Alert.alert("Éxito", "Datos guardados exitosamente.");
      } catch (err) {
          console.error("Error inesperado:", err.message);
          Alert.alert("Error", "No se pudieron guardar los datos.");
      }
  };

  return (
    <View className="w-full border-b border-gray-300 pb-2">
        <Text className="text-2xl font-bold my-4">Eventos diarios - {date}:</Text>
        <View className="flex flex-row gap-2 items-center mb-4">
            <Pressable
                onPress={() => setMedice(!medice)}
                className={`h-6 w-6 rounded-full border-2 border-gray-700 ${medice ? "bg-slate-500" : ""}`}
            />
            <Text className="text-lg font-semibold">Tomar medicina.</Text>
        </View>
        <View>
            <Text className="text-lg font-semibold mb-2">¿Cuál es tu estado de ánimo?</Text>
            <View className="w-full flex flex-row justify-evenly">
                <Pressable
                    onPress={() => setState(0)}
                    className={state === 0 && "bg-gray-300 rounded-full"}
                >
                    <Sad currentColor={"#7F4CA5"} />
                </Pressable>
                <Pressable
                    onPress={() => setState(1)}
                    className={state === 1 && "bg-gray-300 rounded-full"}
                >
                    <Empty currentColor={"#7F4CA5"} />
                </Pressable>
                <Pressable
                    onPress={() => setState(2)}
                    className={state === 2 && "bg-gray-300 rounded-full"}
                >
                    <Happy currentColor={"#7F4CA5"} />
                </Pressable>
            </View>
        </View>
        <View className="flex flex-row gap-2 items-center my-2 border-b border-gray-200 py-1">
            <Text className="text-lg font-semibold mb-2">¿Cuántas horas dormiste?</Text>
            <TextInput
                value={sleepHours}
                onChangeText={setSleepHours}
                placeholder="1"
                keyboardType="numeric"
                className="border border-gray-300 rounded-lg px-2 py-1 w-[10%] text-center"
            />
        </View>
        <View className="flex flex-row gap-2 items-center my-2">
            <Text className="text-lg font-semibold mb-2">¿Cuántas veces convulsionaste?</Text>
            <TextInput
                value={seizureCount}
                onChangeText={setSeizureCount}
                placeholder="0"
                keyboardType="numeric"
                className="border border-gray-300 rounded-lg px-2 py-1 w-[10%] text-center"
            />
        </View>
        <Pressable
            onPress={handleSubmit}
            className="bg-[#4B1C71] px-4 py-2 rounded-md mt-4"
        >
            <Text className="text-white text-center">Guardar</Text>
        </Pressable>
    </View>
);
}

export default EveryDayEvents;