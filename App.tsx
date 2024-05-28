import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TextInput, Image } from 'react-native';
import type { StatusBarStyle } from 'react-native';
import * as Svg from 'react-native-svg';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("C:/Users/47846324/Documents/PROYECTO EPICARE/Epicare/assets/MargenSuperiorDerecho.png")} style={styles.topImage} /> 
        </View>
      <Text style={styles.titulo}>Hello!</Text>
      <Text style={styles.Subtitulo}>Sign In</Text>
      <TextInput
        placeholder = "Email"
        style={styles.textInput}
      />
      <TextInput
        placeholder = "Password"
        style={styles.textInput}
        secureTextEntry = {true}
      />
      <StatusBar style="auto"  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topImageContainer: {
    height: 0,
    backgroundColor: 'black',
  },
  topImage: {
    height: 300,
    bottom: 0,
    position: 'absolute',
    left: -27,
    bottom: 0,
  },
  titulo:{
    fontSize: 10,
    color: '#000',
    fontWeight: 'bold',
  },
  Subtitulo:{
    fontSize: 20,
    color: 'gray',
  },
  textInput:{
    padding: 10,
    paddingStart: 30,
    height: 50,   
    width: '80%',
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff'
  },
});
