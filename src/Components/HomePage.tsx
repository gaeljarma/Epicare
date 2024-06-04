import { StyleSheet, View, Image } from "react-native"
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function HomePage() {
    const [selected, setSelected] = useState('');
    return (
        <View style={styles.calendar}>
            <View style={styles.statusBar} />

            <CalendarList
        pastScrollRange={5}
        futureScrollRange={20}
        style={{width: "100%", height: "100%"}}
        hideExtraDays
        minDate='2024-01-01'
        //enableSwipeMonths
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markingType='period'
        markedDates={{
          //'2024-06-20': {marked: true, selectedColor: 'blue'},
          //[selected]: { selected: true, disableTouchEvent: true, selectedColor: '' }
          '2024-06-18': {startingDay: true, color: 'lightblue', textColor: 'black'},
          '2024-06-19': {selected: true, color: 'lightblue', textColor: 'black'},
          '2024-06-20': {selected: true, endingDay: true, color: 'lightblue', textColor: 'black'}
        }}
      />
      <StatusBar style="auto" />

            <View style={styles.imagesContainer}>
                <Image source={require("../../assets/bordeIzqSup.png")} />
                <Image source={require("../../assets/bordeDerechoInferior.png")} style={styles.imageRigth} />
            </View>

            <View style={styles.navBar}>
                <Image source={require("../../assets/logo.png")} style={styles.logo} />
            </View>
            
        </View>
    )

}

const styles = StyleSheet.create({
    statusBar: {
        height: 40,
        backgroundColor: "#4B1C71",
    },
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: "#EDD8ED"
    },
    imagesContainer: {
        flex: 1,
        justifyContent: "space-between",
        height: "100%",
    },
    imageRigth: {
        marginLeft: "10%",
    },
    navBar: {
        height: 90,
        alignItems: "center",
        backgroundColor: "#4B1C71",
        top: 0,
    },
    logo: {
        position: "absolute",
        top: -30,
    },
    calendar: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 50,
        top: -10,
        height: "50%",
      }
})