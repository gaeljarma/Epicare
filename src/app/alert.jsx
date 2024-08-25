import React from "react";
import { Pressable, Text, View, Image } from "react-native";
import { router } from "expo-router";
function alert() {
  return (
    <View className="h-full w-full bg-[#E7C1E88A] ">
      <View className="flex  bg-[#F2F2F2] h-[50%] w-64 m-auto border border-[#7950B2] rounded-lg px-2 py-6">
        <Pressable
          className="absolute right-2 top-2"
          onPress={() => router.push("/app")}
        >
          <Image source={require("../assets/close.png")}></Image>
        </Pressable>
        <View className="flex-1">
          <Text className="my-6 text-4xl font-bold text-[#FF2E56] text-center">
            Atencion
          </Text>
          <Text className="mb-6 text-2xl text-[#7F4CA5] font-bold text-center">
            Usted esta sufriendo un ataque
          </Text>
          <Text className="mb-6 text-2xl text-[#7F4CA5] font-bold text-center">
            Presione el botón y siga las instrucciones
          </Text>
        </View>

        <Pressable onPress={() => router.push("/instructions")} className="w-36 mx-auto bg-[#7F4CA5] px-2 rounded-lg py-1">
          <Text className="text-lg text-white text-center leading-6">
            Comenzar simulacion
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default alert;
