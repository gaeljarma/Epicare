import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      <Text style={styles.titulo}>Sign In</Text>
      <TextInput
        placeholder = "Email"
      />
      <TextInput
        placeholder = "password"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 50,
    fontColor: 'white',
  }
});
