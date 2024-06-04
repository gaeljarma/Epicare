import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';


export default function LogInPage( {navigation} ) {

    const handleSubmit = () => {
        navigation.navigate('Home')
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.statusBar} />
                <View style={styles.topImageContainer}>
                    <Image source={require("../../assets/MargenSuperiorDerecho.png")} style={styles.topImage} />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.titulo}>Hello!</Text>
                    <Text style={styles.Subtitulo}>Sign In</Text>
                    <TextInput
                        placeholder="Email"
                        style={styles.textInput}
                    />
                    <TextInput
                        placeholder="Password"
                        style={styles.textInput}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText} >Log In</Text>
                    </TouchableOpacity>
                </View >
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
    topImageContainer: {
        position: "absolute",
        height: 300,
        right: 0,
        top: 40,
        alignItems: "flex-end",
    },
    formContainer: {
        width: "100%",
        flex: 1,
        alignItems: 'center',
        gap: 20,
    },
    topImage: {
        height: "100%",
    },
    titulo: {
        marginTop: 150,
        fontSize: 50,
        color: '#000',
        fontWeight: 'bold',
    },
    Subtitulo: {
        marginTop: 70,
        fontSize: 20,
        color: 'gray',
    },
    textInput: {
        padding: 10,
        paddingStart: 30,
        height: 50,
        width: '80%',
        borderRadius: 30,
        backgroundColor: '#fff'
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
