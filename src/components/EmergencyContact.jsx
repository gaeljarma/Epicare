import { router } from "expo-router";
import React, { useState } from "react";
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
  hasNote = true,
}) {
  // Crear estados para los valores iniciales y editables
  const [editableName, setEditableName] = useState(name);
  const [editablePhone, setEditablePhone] = useState(phone);
  const [editableEmail, setEditableEmail] = useState(email);
  const [editableNote, setEditableNote] = useState(note);

  const handleSave = () => {
    const contactProfile = profile;
    const data = {
      name: editableName,
      phone: editablePhone,
      email: editableEmail,
      note: editableNote, //Solo si hasNote es verdadero, osea si es el perfil del usuario no iria esto.
    };
    if (contactProfile === "0") {
      // Es la informacion del usuario.
      // Aquí puedes realizar la acción de guardar los cambios en la base de datos
    } else {
      // Es la informacion del contacto de emergencia.
      // Aquí puedes realizar la acción de guardar los cambios en la base de datos
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
        onPress={() => saveInfo()}
      >
        <Text className="text-lg text-white text-center font-bold">
          Guardar
        </Text>
      </Pressable>
    </View>
  );
}

export default EmergencyContact;
