import React from "react";
import { View, Image } from "react-native";
import NavbarImage from "./NavbarImage";
import { router } from "expo-router";
function Navbar({ setVisible }) {
  return (
    <View className="bg-[#4B1C71] py-2">
      <View className="flex-row justify-between px-4 py-2">
        <NavbarImage>
          <Image source={require("../assets/profile.png")}></Image>
        </NavbarImage>

        <NavbarImage
          handlePress={() => {
            setVisible(true);
          }}
        >
          <Image source={require("../assets/calendar.png")}></Image>
        </NavbarImage>
        <NavbarImage handlePress={() => router.push("/alert")}>
          <Image source={require("../assets/settings.png")}></Image>
        </NavbarImage>
      </View>
    </View>
  );
}

export default Navbar;
