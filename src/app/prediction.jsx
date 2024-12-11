import React, { useState } from 'react';
import { View, TextInput, Button, Text, Pressable, Image } from 'react-native';
import { router } from 'expo-router';

import axios from 'axios';

const API_URL = 'http://192.168.86.228:5000/predict';

export default function App() {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [z, setZ] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async () => {
    try {
      // Asegúrate de usar la IP local de tu computadora
      const response = await axios.post(API_URL, {
        x: parseFloat(x),
        y: parseFloat(y),
        z: parseFloat(z),
      });

      // Guardar la predicción en el estado
      console.log('Respuesta del servidor:', response.data);
      } catch (error) {
      console.error('Error al hacer la solicitud:', error);
      }
  };

  return (
    <View style={{ padding: 20 }}>
      <Pressable
        
        onPress={() => router.push("/app")}
      >
        <Image source={require("../assets/close.png")} />
      </Pressable>
      <Text>Ingresa los valores de x, y y z:</Text>
      <TextInput
        placeholder="Valor de x"
        value={x}
        onChangeText={setX}
        keyboardType="numeric"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Valor de y"
        value={y}
        onChangeText={setY}
        keyboardType="numeric"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Valor de z"
        value={z}
        onChangeText={setZ}
        keyboardType="numeric"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Button title="Enviar" onPress={handleSubmit} />

      {prediction !== null && (
        <Text style={{ marginTop: 20 }}>Predicción: {prediction}</Text>
      )}
    </View>
  );
}
