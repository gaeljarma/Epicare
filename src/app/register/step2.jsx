import React, { useState } from "react";
import FormularioLoginAndRegister from "../../components/FormularioLoginAndRegister";
import InputWithFeedback from "../../components/InputWithFeedback";
import { router, useLocalSearchParams } from "expo-router";
function step2() {

  const { name, surname } = useLocalSearchParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    console.log(email, password);
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    if (password != confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    router.push({
      pathname: "/register/step3",
      params: {
        name,
        surname,
        email,
        password,
      },
    });
  };

  return (
    <FormularioLoginAndRegister
      buttonText="Siguiente"
      title="Regístrate"
      handleSubmit={handleSubmit}
    >
      <InputWithFeedback
        text="Correo Electrónico"
        type="text"
        setValue={setEmail}
      />
      <InputWithFeedback
        text="Contraseña"
        type="text"
        setValue={setPassword}
        isPassword={true}
      />
      <InputWithFeedback
        text="Confirmar Contraseña"
        type="text"
        setValue={setConfirmPassword}
        isPassword={true}
      />
    </FormularioLoginAndRegister>
  );
}

export default step2;
