import React, { useState } from 'react';
import { View, Text, Pressable, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import axios from 'axios';

const API_URL = 'http://192.168.86.228:5000/predict';

export default function App() {
  const [prediction, setPrediction] = useState(null);
  const [showAlert, setShowAlert] = useState(false);  // Estado para controlar el mensaje

  const data = `85,0.291504,0.004395,0.070312
  86,0.289062,0.116943,0.072754
  87,0.289062,0.116943,0.072754
  88,0.289062,0.116943,0.072754
  89,0.580322,0.206543,0.168457
  90,0.580322,0.206543,0.168457
  91,0.580322,0.206543,0.168457
  92,0.831787,0.208008,0.188965
  93,1.277832,0.306396,0.551025
  94,0.767090,0.340576,0.849609
  95,0.162354,-0.478760,0.265381
  96,0.449219,-0.716553,-0.538818
  97,0.689209,-1.671143,-0.912842
  98,0.861816,0.095947,-2.513672
  99,0.861816,0.095947,-2.513672
  100,1.975830,0.551514,-2.291992
  101,4.548828,0.819580,1.622315
  102,4.928711,0.532471,1.543945
  103,1.471680,0.456055,0.479492
  104,-0.592773,0.224609,0.098145
  105,0.950195,0.220215,0.804199
  106,0.950195,0.220215,0.804199
  107,0.905029,0.009277,0.721436
  108,0.684570,0.395020,0.138184
  109,1.257080,0.114990,0.682861
  110,1.352539,0.542969,0.729980
  111,0.865723,-0.061523,0.544189
  112,0.581543,0.005371,0.753174
  113,0.581543,-0.136475,0.586670
  114,0.415772,0.242676,0.687500
  115,0.147705,0.277588,0.835449
  116,0.213379,-0.044434,0.786377
  117,0.347900,0.116455,0.291016
  118,0.528076,0.601563,0.118408
  119,0.936768,0.166016,0.128174`;

  const handleSubmit = async () => {
    try {
      // Formatear los datos para enviar como JSON
      const rows = data.split("\n").map(row => {
        const [index, x, y, z] = row.split(",").map(Number);
        return { ms_accelerometer_x: x, ms_accelerometer_y: y, ms_accelerometer_z: z };
      });

      const response = await axios.post(API_URL, { rows });

      // Inspeccionar la respuesta del servidor
      console.log('Respuesta del servidor:', response.data);

      // Verificar si predictions existe y es un arreglo antes de recorrerlo
      if (response.data.predictions && Array.isArray(response.data.predictions)) {
        setPrediction(response.data.predictions);

        // Recorrer la lista y buscar un '1'
        for (let i = 0; i < response.data.predictions.length; i++) {
          if (response.data.predictions[i] === 1) {
            setShowAlert(true);  // Mostrar alerta si encontramos un '1'
            return;  // Salir del loop después de mostrar la alerta
          }
        }

        // Si no se encuentra un '1', ocultar la alerta
        setShowAlert(false);
      } else {
        console.error('La predicción no está disponible o no es un arreglo.');
        setPrediction(null);
      }

    } catch (error) {
      console.error('Error al hacer la solicitud:', error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Pressable onPress={() => router.push("/app")}>
        <Image source={require("../assets/close.png")} />
      </Pressable>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar datos</Text>
      </TouchableOpacity>

      {prediction !== null && (
        <Text style={{ marginTop: 50 }}>Predicción: {prediction}</Text>
      )}

      {showAlert && (
        <View style={styles.alert}>
          <Text style={styles.alertText}>¡Caída detectada!</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4D1B72',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  alert: {
    backgroundColor: '#ffcc00',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  alertText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
