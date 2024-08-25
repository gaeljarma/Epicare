import { useState } from "react";
import InputWithFeedback from "./InputWithFeedback";
import { Link, router } from "expo-router";
import { Text, Alert } from "react-native";
import FormularioLoginAndRegister from "./FormularioLoginAndRegister";
import { supabase } from "./supabaseClient";

export default function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    console.log(email, password);
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      Alert.alert("Error", error.message);
    } else {
      router.push("/app");
    }
  };

  return (
    <FormularioLoginAndRegister
      buttonText="Ingresar"
      title="Iniciar Sesión"
      handleSubmit={handleSubmit}
    >
      <InputWithFeedback text="Email" type="text" setValue={setEmail} />
      <InputWithFeedback
        text="Contraseña"
        type="text"
        setValue={setPassword}
        isPassword={true}
      />

      <Text>
        <Link href="/register/step1">Crear Cuenta</Link>
      </Text>
    </FormularioLoginAndRegister>
  );
}
