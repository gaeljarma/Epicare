import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello!</Text>
      <Text style={styles.Subtitulo}>Sign In</Text>
      <TextInput
        placeholder = "Email"
        style={styles.textInput}
      />
      <TextInput
        placeholder = "Password"
        style={styles.textInput}
      />
      <StatusBar style="auto" />
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
  titulo:{
    fontSize: 50,
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
