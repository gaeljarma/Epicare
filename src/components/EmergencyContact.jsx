import { router } from "expo-router";
import React from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
function EmergencyContact({ name, phone, email, note, profile }) {
  return (
    <View className="h-[480px] w-72 flex flex-col items-center bg-white px-4 py-6 rounded-lg border border-[#7950B2]">
      <Pressable
        className="absolute left-4 top-6"
        onPress={() => router.push("/app")}
      >
        <Image source={require("../assets/close.png")}></Image>
      </Pressable>
      <View className="mb-6">
        <Text className="text-3xl text-[#4B1C71] font-bold">{"Perfil " + profile}</Text>
      </View>
      <View className="w-full flex flex-col items-center pb-4 mb-2 border-b-2 border-[#7950B2]">
        <View className="h-24 aspect-square rounded-full bg-[#AD8EC4]"></View>
        <Text className="text-2xl text-[#6F26AB] font-bold ">{name}</Text>
      </View>
      <ScrollView className="w-full h-full">
        <View className="h-16 bg-[#AD8EC4] w-full p-2 rounded-xl mb-2">
          <Text className="text-base text-[#6F26AB] font-bold">Celular:</Text>
          <Text className="text-base text-white font-bold">{phone}</Text>
        </View>
        <View className="h-16 bg-[#AD8EC4] w-full p-2 rounded-xl mb-2">
          <Text className="text-base text-[#6F26AB] font-bold">
            Correo Electronico:
          </Text>
          <Text className="text-base text-white font-bold">{email} </Text>
        </View>
        <View className="h-24 bg-[#AD8EC4] w-full p-2 rounded-xl">
          <Text className="text-base text-[#6F26AB] font-bold">Notas:</Text>
          <Text className="text-base text-white font-bold">
            {note}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default EmergencyContact;
