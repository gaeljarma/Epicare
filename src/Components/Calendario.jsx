import { CalendarList } from 'react-native-calendars';
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Calendario({ onDayPress, markedDates }) {
  const [selected, setSelected] = useState('');

  const handleDayPress = (day) => {
    const dateString = day.dateString;
    setSelected(dateString);
    onDayPress(dateString);
  };

  return (
    <View style={styles.container}>
      <CalendarList
        pastScrollRange={20}
        futureScrollRange={20}
        hideExtraDays
        minDate='2024-01-01'
        onDayPress={handleDayPress}
        markingType='period'
        markedDates={markedDates}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});