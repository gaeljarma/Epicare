import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Modal,
  TouchableOpacity,
  Text,
} from "react-native";
import { BlurView } from "expo-blur";
import Calendario from "./Calendario";
import Navbar from "./Navbar";
import { Link } from "expo-router";
import CardiacFrecuence from "./CardiacFrecuence";
import HomePageBox from "./HomePageBox";

export default function HomePage() {
  const [visible, setVisible] = useState(false);
  const [markedDates, setMarkedDates] = useState({});

  const handleDayPress = (dateString) => {
    setMarkedDates({
      ...markedDates,
      [dateString]: { selected: true, color: "#B57EDC", textColor: "#fff" },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagesContainer} className="pb-10">
        <Image source={require("../assets/bordeIzqSup.png")} />

        <Image
          source={require("../assets/bordeDerechoInferior.png")}
          style={styles.imageRight}
        />
      </View>

      <View className="flex flex-1 z-10 h-full justify-center">
        <CardiacFrecuence />
        <View className="flex flex-row my-6">
          <HomePageBox title="Ayuda" />
          <HomePageBox title="Ayuda" />
        </View>
        <CardiacFrecuence />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(false);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setVisible(false);
              }}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            <Calendario onDayPress={handleDayPress} markedDates={markedDates} />
          </View>
        </View>
      </Modal>

      <Navbar setVisible={setVisible} />
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
    position: "absolute",
    justifyContent: "space-between",
    height: "100%",
  },
  imageRight: {
    marginLeft: "10%",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro semitransparente
  },
  modalContainer: {
    width: "90%",
    height: "60%", // Puedes ajustar el tamaño del modal
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 10,
    borderRadius: 20,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 18,
    color: "#000",
  },

  logo: {
    position: "absolute",
    top: -30,
  },
});
