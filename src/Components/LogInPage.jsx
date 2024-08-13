import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { supabase } from './supabaseClient';

export default function LoginPage({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [session, setSession] = useState(null);
    const [emailActive, setEmailActive] = useState(false);
    const [passwordActive, setPasswordActive] = useState(false);

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

    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) Alert.alert('Error', error.message);
        else navigation.navigate('Home'); // Navegar a la página de inicio si el login es exitoso
    };

    if (!session) {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.statusBar} />
                    <View style={styles.formContainer}>
                        <Text style={styles.titulo}>Login</Text>

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

                        <TouchableOpacity style={styles.button} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Login</Text>
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
        flex: 1,
        backgroundColor: '#f1f1f1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        width: "80%",
        backgroundColor: "#F2F2F2",
        borderWidth: 1,
        borderColor: "#7950B2",
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 40,
        color: '#4B1C71',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        borderColor: '#7F4CA5',
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        width: '100%',
    },
    button: {
        padding: 10,
        backgroundColor: "#4B1C71",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
    },
    buttonText: {
        color: "#FFF",
        fontWeight: "bold",
    }
});
