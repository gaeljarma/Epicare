import React, { useState } from "react";
import FormularioLoginAndRegister from "../../../components/FormularioLoginAndRegister";
import InputWithFeedback from "../../../components/InputWithFeedback";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

function step3() {
  const { name, surname, email, password, tel, date } = useLocalSearchParams();

  const [epilepsia, setEpilepsia] = useState("");
  const [sexo, setSexo] = useState("");

  const [rol, setRol] = useState("paciente");
  const handleSubmit = () => {
    const userData = {
      name,
      surname,
      email,
      password,
      tel,
      date,
      epilepsia,
      sexo,
      rol,
    };
    //TODO: Send userData to server
    console.log(userData);
    router.push("/");
  };

  return (
    <FormularioLoginAndRegister
      buttonText="Registrarse"
      title="Registrate"
      handleSubmit={handleSubmit}
    >
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setRol("paciente")}
          style={[
            styles.btn1,
            rol === "paciente" && { backgroundColor: "#B57EDC" },
          ]}
        >
          <Text style={[styles.text, rol == "paciente" && { color: "#fff" }]}>
            Paciente
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setRol("medico")}
          style={[
            styles.btn2,
            rol === "medico" && { backgroundColor: "#B57EDC" },
          ]}
        >
          <Text style={[styles.text, rol == "medico" && { color: "#fff" }]}>
            Medico
          </Text>
        </TouchableOpacity>
      </View>

      <InputWithFeedback
        text="Tipo de epilepsia"
        type="text"
        setValue={setEpilepsia}
      />
      <InputWithFeedback text="Sexo" type="text" setValue={setSexo} />
    </FormularioLoginAndRegister>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  btn1: {
    padding: 10,
    paddingStart: 25,
    paddingEnd: 25,
    height: 48,
    backgroundColor: "#F2F2F2",
    borderColor: "#7950B2",
    borderWidth: 2,
    borderRightWidth: 1,

    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  btn2: {
    padding: 10,
    paddingStart: 25,
    paddingEnd: 25,
    height: 48,
    backgroundColor: "#F2F2F2",
    borderColor: "#7950B2",
    borderWidth: 2,
    borderLeftWidth: 1,

    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#4B1C71",
    fontWeight: "semibold",
    fontSize: 17,
  },
});

export default step3;
