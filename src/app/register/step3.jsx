import React, { useState } from "react";
import FormularioLoginAndRegister from "../../components/FormularioLoginAndRegister";
import InputWithFeedback from "../../components/InputWithFeedback";
import { router, useLocalSearchParams } from "expo-router";
function step3() {

  const { name, surname, email, password } = useLocalSearchParams();

  const [tel, setTel] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = () => {
    console.log(tel, date);

    router.push({
      pathname: "/register/step4",
      params: {
        name,
        surname,
        email,
        password,
        tel,
        date,
      },
    });
  };

  return (
    <FormularioLoginAndRegister
      buttonText="Siguiente"
      title="Registrate"
      handleSubmit={handleSubmit}
    >
      <InputWithFeedback
        text="Numero de teléfono"
        type="numeric"
        setValue={setTel}
      />
      <InputWithFeedback
        text="Fecha de nacimiento"
        type="text"
        setValue={setDate}
      />
    </FormularioLoginAndRegister>
  );
}

export default step3;
