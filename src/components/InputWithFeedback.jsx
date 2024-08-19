import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { StyleSheet } from "react-native";

function InputWithFeedback({ text, type, isPassword = false, setValue }) {
  const [value, setValueLocal] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.emailContainer}>
      <View style={[styles.beforeElementEmail, { top: open ? -50 : 0 }]}>
        <Text style={styles.emailText}>{text}</Text>
      </View>
      <TextInput
        type={type}
        value={value}
        onFocus={() => {
          setOpen(true);
        }}
        onBlur={() => {
          if (value === "") {
            setOpen(false);
          }
        }}
        style={styles.email}
        secureTextEntry={isPassword}
        onChangeText={(text) => {
          setValue(text);
          setValueLocal(text);
        }}
      />
    </View>
  );
}

export default InputWithFeedback;

const styles = StyleSheet.create({
  emailContainer: {
    position: "relative",
    padding: 10,
    paddingStart: 10,
    height: 50,
    width: "80%",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#7F4CA5",
    borderStyle: "solid",
  },
  beforeElementEmail: {
    position: "absolute",
    left: 10,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  emailText: {
    backgroundColor: "#F2F2F2",
    paddingLeft: 5,
    paddingRight: 5,
    color: "#000",
  },
  email: {
    width: "100%",
    height: "100%",
  },
});
