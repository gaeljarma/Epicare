import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import InputWithFeedback from '../../components/InputWithFeedback';
import { useLocalSearchParams, router } from 'expo-router';


export default function createEvent() {

    const { date } = useLocalSearchParams()

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const handleSubmit = () => {
        console.log(title, desc)
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title} >
                    Crear Evento - {
                        date
                    }
                </Text>
                <InputWithFeedback text="Titulo" type="text" setValue={setTitle} />
                <InputWithFeedback text="Descripcion" type="text" setValue={setDesc} />
                
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        backgroundColor: "#f1f1f1",
        justifyContent: "center",
    },
    formContainer: {
        width: "80%",
        paddingHorizontal: "1em",
        margin: "auto",
        backgroundColor: "#F2F2F2",
        borderWidth: 2,
        borderColor: "#ccc",
        borderStyle: "solid",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        height: 367, //TO DO: Responsive
        gap: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
})