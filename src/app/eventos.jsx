import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { supabase } from '../components/supabaseClient'; // Asegúrate de que esta importación sea correcta
import EveryDayEvents from '../components/EveryDayEvents';

export default function EventosDia() {
  const { date } = useLocalSearchParams();
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  
  const handleCreateEvent = () => {
    router.push({
      pathname: "/createEvent",
      params: {
        date,
      },
    });
  };

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('fecha', date); // Asegúrate de que 'fecha' es el nombre de la columna correcta en tu tabla

      if (error) {
        console.error("Error al obtener los eventos:", error.message);
      } else {
        setEventos(data);
      }
      setLoading(false);
    };

    fetchEvents();
  }, [date]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4B1C71" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View className="flex flex-row ">
        <Pressable
          className="bg-black w-8 aspect-square rounded-full flex items-center justify-center"
          onPress={() => router.back()}
        >
          <Text style={styles.closeButtonText}>X</Text>
        </Pressable>
        <Text style={styles.title}>Eventos del {date}</Text>
      </View>

      <EveryDayEvents />
      <Text className="text-2xl font-bold my-4">Tus eventos:</Text>

      {eventos.length > 0 ? (
        <FlatList
          data={eventos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.eventItem}>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <Text style={styles.eventDescription}>{item.description}</Text>
            </View>
          )}
        />
      ) : (
        <View style={styles.noEventsContainer}>
          <Text style={styles.noEventsText}>
            No hay eventos añadidos para este día.
          </Text>
        </View>
      )}
      <Pressable style={styles.addButton} onPress={() => handleCreateEvent()}>
        <Text style={styles.addButtonText}>Añadir evento</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  closeButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
    backgroundColor: "black",
    borderRadius: 12,
    padding: 8,
  },
  closeButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  noEventsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noEventsText: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
  },
  eventItem: {
    marginBottom: 12,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  eventDescription: {
    fontSize: 14,
  },
  addButton: {
    backgroundColor: "#4B1C71",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  addButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
