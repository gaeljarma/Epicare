import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress = {() => Alert.alert ("Has tocado Hola Mundo!")}
        >
      <Text>Hola Mundo!</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
