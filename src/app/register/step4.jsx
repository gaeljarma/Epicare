import React, { useState } from "react";
import FormularioLoginAndRegister from "../../components/FormularioLoginAndRegister";
import InputWithFeedback from "../../components/InputWithFeedback";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { supabase } from '../../components/supabaseClient';

function step3() {
  const { name, surname, email, password, tel, date } = useLocalSearchParams();

  const [epilepsia, setEpilepsia] = useState("");
  const [sexo, setSexo] = useState("");

  const [rol, setRol] = useState("paciente");
  const handleSubmit = async () => {
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

    // Crear usuario en Supabase
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: name,
          surname: surname,
          tel: tel,
          date: date,
          epilepsia: epilepsia,
          sexo: sexo,
          rol: rol,
        },
      },
    });

    if (error) {
      Alert.alert("Error", error.message);
    } else {
      Alert.alert("Éxito", "Usuario registrado con éxito");
      router.push("/app");
    }
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
