import React from "react";
import { Image, TouchableOpacity } from "react-native";

function NavbarImage({ handlePress, children }) {
  return (
    <TouchableOpacity
      onPress={() => {
        handlePress();
      }}
    >
      {children}
    </TouchableOpacity>
  );
}

export default NavbarImage;
