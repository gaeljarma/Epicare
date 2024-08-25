import React from "react";
import { Text, View } from "react-native";

function HomePageBox({ title, imageURL }) {
  return (
    <View className="w-5/12  mx-auto aspect-square p-4 rounded-lg bg-[#7f4ca573]">
      <Text className="text-lg text-[#4B1C71] font-bold text-center"> {title} </Text>
      {/* <Image source={require(imageURL)}></Image> */}
    </View>
  );
}

export default HomePageBox;
