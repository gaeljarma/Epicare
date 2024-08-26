import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import InputWithFeedback from '../components/InputWithFeedback';
import { useLocalSearchParams, router } from 'expo-router';
import { supabase } from '../components/supabaseClient';
import { getUserId } from '../utils/getUserId';

export default function createEvent() {
    const { date } = useLocalSearchParams();

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = async() => {
        const { data: { user }, error: userError } = await supabase.auth.getUser(); // Obtener el usuario autenticado

    if (userError) {
        console.error("Error al obtener el usuario:", userError.message);
        return;
    }

    if (!user) {
        console.error("User not logged in");
        return;
    }

    const newEvent = {
        title: title,
        description: desc,
        fecha: date,
        profiles_id: user.id,  // Asegúrate de que el ID del usuario autenticado se utiliza aquí
    };

    try {
        const { data, error } = await supabase
            .from('events')
            .insert([newEvent]);

        if (error) {
            console.error("Error al crear el evento:", error.message);
            alert("Error al crear el evento: " + error.message);
        } else {
            console.log("Evento creado con éxito:", data);
            router.back();  // Navega de regreso a la pantalla anterior
        }
    } catch (err) {
        console.error("Error inesperado:", err.message);
        alert("Error inesperado: " + err.message);
    }
};

    return (
        <View style={styles.container}>
            {/* Botón "X" para volver */}
            <Pressable style={styles.closeButton} onPress={() => router.back()}>
                <Text style={styles.closeButtonText}>X</Text>
            </Pressable>

        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>
                    Crear Evento - {date}
                </Text>
                <InputWithFeedback text="Titulo" type="text" setValue={setTitle} />
                <InputWithFeedback text="Descripcion" type="text" setValue={setDesc} />

                <Pressable style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Crear Evento</Text>
                </Pressable>
            </View>
        </View>
    </View>
    );
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
    submitButton: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#4B1C71',
        borderRadius: 5,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    closeButton: {
        position: "absolute",
        top: 40,
        left: 20,
        zIndex: 10,
        backgroundColor: "#E0E0E0",
        padding: 10,
        borderRadius: 15,
    },
    closeButtonText: {
        fontSize: 18,
        color: "#000",
    },
});
