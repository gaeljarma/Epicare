import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Modal,
  TouchableOpacity,
  Text,
  Pressable,
} from "react-native";
import { BlurView } from "expo-blur";
import Calendario from "./Calendario";
import Navbar from "./Navbar";
import { router } from "expo-router";
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

  const contacts = [
    {
      name: "Bautista Loisi",
      phone: "+54 9 11 5314 4000",
      email: "bautistaloisi@ort.edu.ar",
      note: "Bauti es mi sobrino"

    },
    {
      name: "Gael Jarma",
      phone: "+54 9 11 5412 5653",
      email: "gaeljarma@ort.edu.ar",
      note: ""

    },
    {
      name: "Santiago Gaviria",
      phone: "+54 9 11 1234 5678",
      email: "santiagogaviria@ort.edu.ar",
      note: ""
    },
  ];
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
          <HomePageBox title="Ayuda" href="/Help">
            <Image source={require("../assets/ayuda.png")}></Image>
          </HomePageBox>
          <HomePageBox title="(En desarrollo)">
            <Image source={require("../assets/reparacion.png")}></Image>
          </HomePageBox>
        </View>
        <View className=" w-11/12 mx-auto aspect-[5/2] p-2 rounded-lg bg-[#c09ccc]">
          <Text className="text-[#4B1C71] text-md font-bold text-center">
            Contactos de Emergencia
          </Text>
          <View className="flex-row items-center justify-center gap-2">
            {contacts.map((contact, index) => (
              <Pressable
                onPress={() =>
                  router.push({
                    pathname: "/contacts",
                    params: {
                      name: contact.name,
                      phone: contact.phone,
                      email: contact.email,
                      note: contact.note,
                      profile: index+1
                    },
                  })
                }
                key={index}
                className="h-24 aspect-square bg-[#7F4CA573] rounded-xl p-2"
              >
                <View className="flex flex-col">
                  <Text className="text-[#4B1C71] text-md font-bold text-center">
                    {"Perfil " + (index + 1)}
                  </Text>
                  <View className="h-14 aspect-square rounded-full bg-[#AD8EC4] m-auto"></View>
                </View>
              </Pressable>
            ))}
          </View>
        </View>
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
