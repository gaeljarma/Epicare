import React from "react";
import { View, Image, StyleSheet } from "react-native";
function Background() {
  return (
    <View style={styles.backgroundContainer}>
      <Image
        source={require("../assets/vector arriba register.png")}
        style={styles.topImage}
      />
      <Image
        source={require("../assets/vector abajo register.png")}
        style={styles.leftImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: "#EDD8ED",
    position: "absolute",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    top: 38,
  },

  topImage: {
    top: -2,
  },
  leftImage: {
    left: -2,
  },
});

export default Background;
