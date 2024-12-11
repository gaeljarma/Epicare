import { router } from "expo-router";
import { supabase } from '../components/supabaseClient';
import { Alert } from "react-native"; // Importar Alert correctamente
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  TextInput,
} from "react-native";

function EmergencyContact({
  name,
  phone,
  email,
  note,
  profile,
  contactId,
  hasNote = true,
}) {
  // Crear estados para los valores iniciales y editables
  const [editableName, setEditableName] = useState(name);
  const [editablePhone, setEditablePhone] = useState(phone);
  const [editableEmail, setEditableEmail] = useState(email);
  const [editableNote, setEditableNote] = useState(note);

  const handleSave = async () => {
    try {
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError) throw userError;
      if (!user) {
        Alert.alert("Error", "No estás autenticado.");
        return;
      }
  
      const profiles_id = user.id;
  
      // Crear objeto de datos a guardar
      const updatedContact = {
        name: editableName,
        phone: editablePhone,
        email: editableEmail,
        note: editableNote,  // Solo si hasNote es verdadero
        profiles_id: profiles_id,
      };
  
      // Verificar si ya existe un contacto con el mismo nombre
      const { data, error: fetchError } = await supabase
        .from("contacts")
        .select("*")
        .eq("name", editableName)
        .single(); // Recuperamos solo un registro
  
      if (fetchError && fetchError.code !== 'PGRST116') {
        // 'PGRST116' significa que no se encontró el contacto con ese nombre
        console.error("Error al verificar el contacto:", fetchError.message);
        Alert.alert("Error", "Hubo un problema al verificar el contacto.");
        return;
      }
  
      if (data) {
        // Si ya existe un contacto con ese nombre, lo actualizamos
        console.log("Contacto encontrado, actualizando con ID:", data.id);
        const response = await supabase
          .from("contacts")
          .upsert([{ ...updatedContact, id: data.id }]);
  
        if (response.error) {
          console.error("Error al guardar el contacto:", response.error.message);
          Alert.alert("Error", `Hubo un problema al guardar el contacto: ${response.error.message}`);
        } else {
          console.log("Contacto guardado:", response.data);
          Alert.alert("Éxito", "Contacto guardado con éxito.");
        }
      } else {
        // Si no existe, creamos un nuevo contacto
        console.log("Insertando nuevo contacto");
        const response = await supabase
          .from("contacts")
          .upsert([updatedContact]);
  
        if (response.error) {
          console.error("Error al guardar el contacto:", response.error.message);
          Alert.alert("Error", `Hubo un problema al guardar el contacto: ${response.error.message}`);
        } else {
          console.log("Contacto guardado:", response.data);
          Alert.alert("Éxito", "Contacto guardado con éxito.");
        }
      }
    } catch (error) {
      console.error("Error al guardar:", error.message);
      Alert.alert("Error", "Hubo un error al guardar los cambios.");
    }
  };
  
  
  return (
    <View className="h-[480px] w-72 flex flex-col items-center bg-white px-4 py-6 rounded-lg border border-[#7950B2]">
      <Pressable
        className="absolute left-4 top-6"
        onPress={() => router.push("/app")}
      >
        <Image source={require("../assets/close.png")} />
      </Pressable>
      <View className="mb-6">
        <Text className="text-3xl text-[#4B1C71] font-bold">
          {"Perfil " + profile}
        </Text>
      </View>
      <View className="w-full flex flex-col items-center pb-4 mb-2 border-b-2 border-[#7950B2]">
        <View className="h-24 aspect-square rounded-full bg-[#AD8EC4]"></View>
        <TextInput
          className="text-2xl text-[#6F26AB] font-bold text-center"
          value={editableName}
          onChangeText={setEditableName}
          placeholder="Nombre"
        />
      </View>
      <ScrollView className="w-full h-full">
        <View className="h-16 bg-[#AD8EC4] w-full p-2 rounded-xl mb-2">
          <Text className="text-base text-[#6F26AB] font-bold">Celular:</Text>
          <TextInput
            className="text-base text-white font-bold"
            value={editablePhone}
            onChangeText={setEditablePhone}
            placeholder="Número de celular"
            keyboardType="phone-pad"
          />
        </View>
        <View className="h-16 bg-[#AD8EC4] w-full p-2 rounded-xl mb-2">
          <Text className="text-base text-[#6F26AB] font-bold">
            Correo Electrónico:
          </Text>
          <TextInput
            className="text-base text-white font-bold"
            value={editableEmail}
            onChangeText={setEditableEmail}
            placeholder="Correo electrónico"
            keyboardType="email-address"
          />
        </View>
        {hasNote && (
          <View className="h-24 bg-[#AD8EC4] w-full p-2 rounded-xl">
            <Text className="text-base text-[#6F26AB] font-bold">Notas:</Text>
            <TextInput
              className="text-base text-white font-bold"
              value={editableNote}
              onChangeText={setEditableNote}
              placeholder="Notas"
              multiline
            />
          </View>
        )}
      </ScrollView>
      <Pressable
        className="w-36 mx-auto bg-[#6F26AB] px-2 rounded-lg py-1 mt-2"
        onPress={handleSave}
      >
        <Text className="text-lg text-white text-center font-bold">
          Guardar
        </Text>
      </Pressable>
    </View>
  );
}

export default EmergencyContact;