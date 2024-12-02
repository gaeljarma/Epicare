import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import * as tf from "@tensorflow/tfjs";
// import { bundleResourceIO } from "@tensorflow/tfjs-react-native";
function PredictionScreen() {
  const [model, setModel] = useState(null);
  const [param1, setParam1] = useState("");
  const [param2, setParam2] = useState("");
  const [param3, setParam3] = useState("");
  const [prediction, setPrediction] = useState(null);
  // List of possible values for each parameter
  const paramList = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  useEffect(() => {
    const loadModel = async () => {
      const modelJson = require("../assets/models/model.json");
      //ESTA CODIGO ESTA COMENTADO PORQUE LA FORMA DE CARGAR EL MODELO QUE USAN ESTA DANDO EL PROBLEMA DE LA NAVEGACION ENTRE PAGINAS
      //PRUEBEN OTRA FORMA DE CARGAR EL MODELO
      //const modelWeight = require('../assets/models/group1-shard1of1.bin');
      //   const loadedModel = await tf.loadLayersModel(
      //     bundleResourceIO(modelJson, modelWeight)
      //   );
      setModel(loadedModel);
    };
    loadModel();
  }, []);
  const handlePrediction = async () => {
    if (model) {
      const inputTensor = tf.tensor([
        [parseFloat(param1), parseFloat(param2), parseFloat(param3)],
      ]);
      const result = await model.predict(inputTensor);
      setPrediction(result.dataSync());
    }
  };
  // Function to select random parameters
  const handleRandomSelection = () => {
    const randomParams =
      paramList[Math.floor(Math.random() * paramList.length)];
    setParam1(randomParams[0].toString());
    setParam2(randomParams[1].toString());
    setParam3(randomParams[2].toString());
  };
  return (
    <View>
      {model ? (
        <>
          <Button
            title="Randomize Parameters"
            onPress={handleRandomSelection}
          />
          <Text>Parameter 1: {param1}</Text>
          <Text>Parameter 2: {param2}</Text>
          <Text>Parameter 3: {param3}</Text>
          <Button title="Predict" onPress={handlePrediction} />
          {prediction && <Text>Prediction: {prediction}</Text>}
        </>
      ) : (
        <Text>Loading model...</Text>
      )}
    </View>
  );
}

export default PredictionScreen;
