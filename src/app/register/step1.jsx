import React, { useState } from "react";
import FormularioLoginAndRegister from "../../components/FormularioLoginAndRegister";
import InputWithFeedback from "../../components/InputWithFeedback";
import { router} from "expo-router";

function step1() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleSubmit = () => {
    router.push({
      pathname: "/register/step2",
      params: { name, surname },
    });
  };

  return (
    <FormularioLoginAndRegister
      buttonText="Siguiente"
      title="Registrate"
      handleSubmit={handleSubmit}
    >
      <InputWithFeedback text="Nombre" type="text" setValue={setName} />
      <InputWithFeedback text="Apellido" type="text" setValue={setSurname} />
    </FormularioLoginAndRegister>
  );
}

export default step1;
