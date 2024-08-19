import React, { useState } from 'react';
import { StyleSheet, View, Image, Modal, TouchableOpacity, Text } from "react-native";
import { BlurView } from 'expo-blur';
import Calendario from "./Calendario";


export default function HomePage() {
  const [visible, setVisible] = useState(false);
  const [markedDates, setMarkedDates] = useState({});

  const handleDayPress = (dateString: string) => {
    setMarkedDates({
      ...markedDates,
      [dateString]: { selected: true, color: '#B57EDC', textColor: '#fff' },
    });
  };

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
        onRequestClose={() => {
          setVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={() => {
            setVisible(false);
          }}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <Calendario onDayPress={handleDayPress} markedDates={markedDates} />
        </View>
      </Modal>

      <View style={styles.navBar}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <View style={styles.navBarButtons}>
          <TouchableOpacity style={styles.openButton} onPress={() => {
            setVisible(true);
          }}>
            <Text style={styles.openButtonText}>Open</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.openButton} onPress={() => {
            setVisible(true);
          }}>
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
    left: '20%',
    transform: [{ translateX: -50 }],
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 20,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 18,
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
  }
});
