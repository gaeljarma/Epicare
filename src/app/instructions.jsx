import React, { useState } from "react";
import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { router } from "expo-router";
function instructions() {
  const [instructionIndex, setInstructionIndex] = useState(0);
  const instructionTexts = [
    `Mantenga la calma\n\n De ser posible, tome el tiempo de la convulsión`,
    `No trate de contener a la persona o sus movimientos.\nNo abrir la boca, ni introducir ningún objeto dentro de esta`,
    `No intente dar respiración artificial, excepto que la persona dejara de respirar al términar la crisis`,
    `Desaloje el área de objetos duros o peligrosos para evitar que la persona se golpee o dañe`,
    `Aflóje la ropa que lleve alrededor del cuello y la cabeza, Retire accesorios para evitar lesiones`,
    `Coloque a la persona de costado para facilitar la respiración.\n\nColoque algo plano y suave bajo su cabeza`,
    `Permanezca con la persona hasta que la crisis haya terminado naturalmente, Asegurándose de que este recupere la conciencia.`,
    `Una vez pasada la crisis, ayude a la persona  a encontrar un lugar seguro para descansar y recuperar la orientación`,
  ];

  return (
    <View className="h-full w-full bg-[#E7C1E88A] ">
      <View className="flex bg-[#F2F2F2] min-h-[50%] w-64 m-auto border border-[#7950B2] rounded-lg px-4 py-6">
        <Pressable
          className="absolute right-2 top-2"
          onPress={() => router.push("/app")}
        >
          <Image source={require("../assets/close.png")}></Image>
        </Pressable>
        <ScrollView className="flex-1 py-2" contentContainerStyle={{ flexGrow: 1 }}>
          <Text className="mb-4 text-2xl text-[#7F4CA5] font-bold text-center">
            {instructionTexts[instructionIndex]}
          </Text>
        </ScrollView>

        <View className="h-12 mb-4 bg-red-500 w-full">
          <Text className="mb-6 text-2xl text-[#7F4CA5] font-bold text-center">
            Audio
          </Text>
        </View>

        <View className="flex w-full flex-row justify-between ">
          {
            <Pressable
              disabled={instructionIndex === 0}
              onPress={() => setInstructionIndex(instructionIndex - 1)}
              className={`px-2 rounded-lg py-1 ${
                instructionIndex === 0 ? "bg-[#7F4CA5]/20" : "bg-[#7F4CA5]"
              }`}
            >
              <Text className="text-lg text-white text-center leading-6">
                anterior
              </Text>
            </Pressable>
          }
          <Pressable
            onPress={() => {
              setInstructionIndex(instructionIndex + 1);
              if (instructionIndex === 7) {
                router.push("/app");
              }
            }}
            className="bg-[#7F4CA5] px-2 rounded-lg py-1"
          >
            <Text className="text-lg text-white text-center leading-6">
              siguiente
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default instructions;
