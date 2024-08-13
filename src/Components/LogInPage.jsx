import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Alert, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function RegisterPage({ navigation }) {

    const handleSubmit = () => {
        // Aquí podrías agregar lógica para manejar la creación de cuenta, como enviar los datos a un servidor.
        navigation.navigate('Home');
    }

    const [emailActive, setEmailActive] = useState(false);
    const [passwordActive, setPasswordActive] = useState(false);
    const [nameActive, setNameActive] = useState(false);
    const [phoneActive, setPhoneActive] = useState(false);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.statusBar} />
                <View style={styles.backgroundContainer}>
                    <Image source={require("../../assets/vector arriba register.png")} style={styles.topImage} />
                    <Image source={require("../../assets/vector abajo register.png")} style={styles.leftImage} />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.titulo}>Register</Text>

                    <View style={styles.inputContainer}>
                        <View style={[styles.beforeElement, { top: emailActive ? -50 : 0 }]}>
                            <Text style={styles.inputText}>Email</Text>
                        </View>
                        <TextInput
                            onFocus={() => setEmailActive(true)}
                            onBlur={() => setEmailActive(false)}
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={[styles.beforeElement, { top: passwordActive ? -50 : 0 }]}>
                            <Text style={styles.inputText}>Password</Text>
                        </View>
                        <TextInput
                            onFocus={() => setPasswordActive(true)}
                            onBlur={() => setPasswordActive(false)}
                            style={styles.input}
                            secureTextEntry={true}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={[styles.beforeElement, { top: nameActive ? -50 : 0 }]}>
                            <Text style={styles.inputText}>Name</Text>
                        </View>
                        <TextInput
                            onFocus={() => setNameActive(true)}
                            onBlur={() => setNameActive(false)}
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={[styles.beforeElement, { top: phoneActive ? -50 : 0 }]}>
                            <Text style={styles.inputText}>Phone</Text>
                        </View>
                        <TextInput
                            onFocus={() => setPhoneActive(true)}
                            onBlur={() => setPhoneActive(false)}
                            style={styles.input}
                            keyboardType="phone-pad"
                        />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
                <StatusBar style="light" />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    statusBar: {
        height: 40,
        backgroundColor: "#4B1C71",
    },
    container: {
        position: "relative",
        flex: 1,
        backgroundColor: '#f1f1f1',
        justifyContent: 'center',
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
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 12,
        height: 460, // Ajuste para acomodar más campos
        gap: 20,
    },
    titulo: {
        fontSize: 40,
        color: '#4B1C71',
        fontWeight: 'bold',
    },
    inputContainer: {
        position: "relative",
        padding: 10,
        paddingStart: 30,
        height: 50,
        width: '80%',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#7F4CA5",
        borderStyle: "solid",
    },
    beforeElement: {
        position: 'absolute',
        left: 30,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputText: {
        backgroundColor: "#F2F2F2",
        paddingLeft: 5,
        paddingRight: 5,
    },
    input: {
        width: "100%",
        height: "100%"
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
    }
});
