import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { supabase } from './supabaseClient';

export default function RegisterPage({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [session, setSession] = useState(null);
    const [emailActive, setEmailActive] = useState(false);
    const [passwordActive, setPasswordActive] = useState(false);
    const [nameActive, setNameActive] = useState(false);
    const [phoneActive, setPhoneActive] = useState(false);

    useEffect(() => {
        const getSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setSession(session);
        };

        getSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    const handleRegister = async () => {
        const { error } = await supabase.auth.signUp({ email, password });

        if (error) Alert.alert('Error', error.message);
        else navigation.navigate('Home');
    };
    
    if (!session) {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.statusBar} />
                    <View style={styles.backgroundContainer}>
                        {/* Aquí van tus imágenes de fondo */}
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
                                onChangeText={(text) => setEmail(text)}
                                value={email}
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
                                onChangeText={(text) => setPassword(text)}
                                value={password}
                            />
                        </View>

                        {/* Tus otros campos de Name y Phone */}
                        <TouchableOpacity style={styles.button} onPress={handleRegister}>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Logged in!</Text>
        </View>
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

