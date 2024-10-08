import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

export default function Calendario({ markedDates }) {
  const [selected, setSelected] = useState('');
  const navigation = useNavigation();

  /* NO TOCAR */
  const handleDayPress = (day) => {
    const dateString = day.dateString;
    setSelected(dateString);

    const eventosDelDia = obtenerEventosParaFecha(dateString);

    router.push({
      pathname: '/eventos',
      params: { date: dateString, events: JSON.stringify(eventosDelDia) },
    });
  };

  const obtenerEventosParaFecha = (date) => {
    // Lógica para obtener eventos; aquí se devuelve un ejemplo estático
    const eventos = {
      '2024-08-19': [{ id: 1, title: 'Reunión con el equipo', description: 'Revisión del proyecto.' }],
      // Agrega más fechas y eventos según sea necesario
    };
    return eventos[date] || [];
  };
  /*TOCAR A PARTIR DE ACA */

  return (
    <View style={styles.container}>
      <CalendarList
        pastScrollRange={20}
        futureScrollRange={20}
        hideExtraDays
        minDate='2024-01-01'
        onDayPress={handleDayPress} //NO TOCAR ESTA LINEA
        markingType='period'
        markedDates={markedDates}
        // PROPIEDADES AGREGADAS PARA SCROLL HORIZONTAL
        horizontal={true}
        pagingEnabled={true}
        calendarWidth={320}  // Ajusta el ancho del calendario según sea necesario
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
