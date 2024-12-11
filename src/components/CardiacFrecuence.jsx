import React from "react";
import { Text, View, Image } from "react-native";

function CardiacFrecuence() {
  return (
    <View className=" w-11/12 mx-auto aspect-[5/2] p-2 rounded-lg bg-[#c09ccc]">
      <View>
        <Text className="text-[#FF2E56] text-xl font-bold">
          Frecuencia Cardiaca
        </Text>
      </View>
      <View className="flex-1 flex flex-row items-center">
        <Text className="text-[#4B1C71] text-lg font-bold">
          Ultima medicion:
        </Text>
        <Image source={require("../assets/frecuenciaCardiaca.png")} className="mt-6 ml-4"></Image>
      </View>
      <Text className="text-3xl">
        67
        <Text className="text-lg">lpm</Text>
      </Text>
    </View>
  );
}

export default CardiacFrecuence;
