import React, { useState } from "react";
import Sad from "./icons/Sad";
import Happy from "./icons/Happy";
import Empty from "./icons/Empty";
import { View, Text, Pressable, TextInput } from "react-native";

function EveryDayEvents() {
  const [medice, setMedice] = useState(false);
  const [state, setState] = useState(1);
  return (
    <View className="w-full border-b border-gray-300 pb-2">
      <Text className="text-2xl font-bold my-4">Eventos diarios:</Text>
      <View className="flex flex-row gap-2 items-center mb-4">
        <Pressable
          onPress={() => setMedice(!medice)}
          className={`h-6 w-6 rounded-full border-2 border-gray-700 ${
            medice ? "bg-slate-500" : ""
          }`}
        />
        <Text className="text-lg font-semibold">Tomar medicina.</Text>
      </View>
      <View>
        <Text className="text-lg font-semibold mb-2">
          ¿Cual es tu estado de animo?
        </Text>
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
        <Text className="text-lg font-semibold mb-2">
          Cuantas horas dormiste:
        </Text>
        <TextInput
          placeholder="1"
          keyboardType="numeric"
          className="border border-gray-300 rounded-lg px-2 py-1 w-[10%] text-center"
        />
      </View>
      <View className="flex flex-row gap-2 items-center my-2">
        <Text className="text-lg font-semibold mb-2">
          Cuantas veces convulsionaste:
        </Text>
        <TextInput
          placeholder="0"
          keyboardType="numeric"
          className="border border-gray-300 rounded-lg px-2 py-1 w-[10%] text-center"
        />
      </View>
    </View>
  );
}

export default EveryDayEvents;