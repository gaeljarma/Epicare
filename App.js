import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import React, { useState } from 'react';

export default function App() {
  const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
      <CalendarList
        pastScrollRange={5}
        futureScrollRange={20}
        style={{width: "50%", height: "100%"}}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  calendar: {
    flex: 1,
    width: '100%',
  },
});
