import { useState } from "react";
import InputWithFeedback from "./InputWithFeedback";
import { Link, router } from "expo-router";
import { Text } from "react-native";
import FormularioLoginAndRegister from "./FormularioLoginAndRegister";

export default function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(email, password);
    // TODO: login
    router.push("/");
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
