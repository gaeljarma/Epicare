import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { supabase } from '../lib/supabase'
import { Button, Input } from '@rneui/themed'

export default function LogInPage({ navigation }) {

    const handleSubmit = () => {
        navigation.navigate('Home')
    }

    const [loading, setLoading] = useState(false)
    const [emailActive, setEmailActive] = useState(false);
    const [passwordActive, setPasswordActive] = useState(false);

    async function signInWithEmail() {
        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({
          emailActive: emailActive,
          passwordActive: passwordActive,
        })

        if (error) Alert.alert(error.message)
            setLoading(false)
          }
        
    async function signUpWithEmail() {
        setLoading(true)
        const {
            data: { session },
            error,
        } = await supabase.auth.signUp({
            emailActive: emailActive,
            passwordActive: passwordActive,
        })
        
        if (error) Alert.alert(error.message)
        if (!session) Alert.alert('Please check your inbox for email verification!')
        setLoading(false)
    }
    
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.statusBar} />
                <View style={styles.backgroundContainer}>
                    <Image source={require("../../assets/vector arriba register.png")} style={styles.topImage} />
                    <Image source={require("../../assets/vector abajo register.png")} style={styles.leftImage} />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.titulo}>Log in</Text>
                    <View style={styles.emailContainer}>
                        <View style={[styles.beforeElementEmail, { top: emailActive ? -50 : 0 }]}>
                            <Text style={styles.emailText}>Email</Text>
                        </View>
                        <TextInput
                            onFocus={() => {
                                setEmailActive(true)
                            }}
                            onBlur={() => {
                                setEmailActive(false)
                            }}
                            style={styles.email}
                        />
                    </View>

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
        height: 367, //TO DO: Responsive
        gap: 20,
    },
    titulo: {
        fontSize: 40,
        color: '#4B1C71',
        fontWeight: 'bold',
    },

    textInput: {
        padding: 10,
        paddingStart: 30,
        height: 50,
        width: '80%',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#7F4CA5",
        borderStyle: "solid",
    },
    emailContainer: {
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
    beforeElementEmail: {
        position: 'absolute',
        left: 30,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'

    },
    emailText: {
        backgroundColor: "#F2F2F2",
        paddingLeft: 5,
        paddingRight: 5,
    },
    email: {
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
