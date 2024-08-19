import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function LogInPage({
  children,
  buttonText,
  title,
  handleSubmit,
}) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <View style={styles.backgroundContainer}>
          <Image
            source={require("../assets/vector arriba register.png")}
            style={styles.topImage}
          />
          <Image
            source={require("../assets/vector abajo register.png")}
            style={styles.leftImage}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.titulo}>{title}</Text>

          {children}

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="light" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    height: 40,
    backgroundColor: "#4B1C71",
  },
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
  },
  backgroundContainer: {
    backgroundColor: "#EDD8ED",
    position: "absolute",
    justifyContent: "space-between",
    height: "96%",
    width: "100%",
    top: 38,
  },

  topImage: {
    top: -2,
  },
  leftImage: {
    left: -2,
  },
  formContainer: {
    width: "80%",
    margin: "auto",
    backgroundColor: "#F2F2F2",
    borderWidth: 1,
    borderColor: "#7950B2",
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    height: 367, //TO DO: Responsive
    gap: 20,
  },
  titulo: {
    fontSize: 40,
    color: "#4B1C71",
    fontWeight: "bold",
  },

  textInput: {
    padding: 10,
    paddingStart: 30,
    height: 50,
    width: "80%",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#7F4CA5",
    borderStyle: "solid",
  },
  button: {
    padding: 10,
    paddingStart: 30,
    paddingEnd: 30,
    height: 48,
    backgroundColor: "#4B1C71",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
