import React, { useState } from 'react';
import { StyleSheet, View, Image, Modal, TouchableOpacity, Text, FlatList } from "react-native";
import { BlurView } from 'expo-blur';
import Calendario from "./Calendario";
import AddEventScreen from './AddEventScreen'; // Componente para añadir eventos

export default function HomePage() {
  const [visible, setVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [events, setEvents] = useState({});
  const [showAddEventModal, setShowAddEventModal] = useState(false);

  const handleDayPress = (dateString) => {
    setSelectedDate(dateString);
    setVisible(true);
  };

  const handleAddEvent = (title, color) => {
    setEvents({
      ...events,
      [selectedDate]: [...(events[selectedDate] || []), { title, color }],
    });
    setShowAddEventModal(false);
  };

  const renderEventItem = ({ item }) => (
    <View style={[styles.eventItem, { backgroundColor: item.color }]}>
      <Text style={styles.eventTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <BlurView intensity={40}>
        <View style={styles.statusBar} />
      </BlurView>
      <View style={styles.imagesContainer}>
        <Image source={require("../../assets/bordeIzqSup.png")} />
        <Image source={require("../../assets/bordeDerechoInferior.png")} style={styles.imageRight} />
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setVisible(false)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <Text style={styles.selectedDateText}>{selectedDate}</Text>
          <FlatList
            data={events[selectedDate] || []}
            renderItem={renderEventItem}
            keyExtractor={(item, index) => index.toString()}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setShowAddEventModal(true)}
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showAddEventModal}
        onRequestClose={() => setShowAddEventModal(false)}
      >
        <AddEventScreen onAddEvent={handleAddEvent} />
      </Modal>

      <View style={styles.navBar}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <View style={styles.navBarButtons}>
          <TouchableOpacity style={styles.openButton} onPress={() => setVisible(true)}>
            <Text style={styles.openButtonText}>Open</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    backgroundColor: "#EDD8ED",
  },
  imagesContainer: {
    flex: 1,
    justifyContent: "space-between",
    height: "100%",
  },
  imageRight: {
    marginLeft: "10%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 20,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#000',
  },
  addButton: {
    position: 'absolute',
    top: 30,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 20,
    zIndex: 1,
  },
  addButtonText: {
    fontSize: 30,
    color: '#000',
  },
  navBar: {
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#4B1C71",
    paddingHorizontal: 20,
  },
  navBarButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  openButton: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  openButtonText: {
    color: "#4B1C71",
    fontSize: 18,
  },
  logo: {
    position: "absolute",
    top: -30,
  },
  selectedDateText: {
    fontSize: 20,
    marginVertical: 20,
  },
  eventItem: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '90%',
  },
  eventTitle: {
    color: '#fff',
  },
});
