import React from "react";
import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";
function HomePageBox({ title, children, href = "" }) {
  return (
    <Pressable
      className="w-5/12 mx-auto aspect-square p-4 px-1 rounded-lg bg-[#c09ccc]"
      onPress={() => router.push(href)}
    >
      <Text className="text-lg text-[#4B1C71] font-bold text-center">
        
        {title}
      </Text>
      <View className="mt-1 flex-1 h-full flex flex-col items-center">{children}</View>
    </Pressable>
  );
}

export default HomePageBox;
