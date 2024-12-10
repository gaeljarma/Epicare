import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO } from '@tensorflow/tfjs';

const PredictionScreen = () => {
  const [model, setModel] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      const modelJson = require('../assets/models/model.json');
      const modelWeight = require('../assets/models/group1-shard1of1.bin');
      const loadedModel = await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeight));
      setModel(loadedModel);
    };
    loadModel();
  }, []);

  const handlePrediction = async () => {
    if (model) {
      const inputTensor = tf.tensor([parseFloat(inputValue)]);  // Modify based on expected input shape
      const result = await model.predict(inputTensor);
      setPrediction(result.dataSync());
    }
  };

  return (
    <View>
      <Text>Enter a number:</Text>
      <TextInput
        value={inputValue}
        onChangeText={setInputValue}
        keyboardType="numeric"
        placeholder="Type a number"
      />
      <Button title="Predict" onPress={handlePrediction} />
      {prediction && <Text>Prediction: {prediction}</Text>}
    </View>
  );
};

export default PredictionScreen;
