import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ColorPicker } from 'react-native-color-picker';

export default function AddEventScreen({ route }) {
  const [eventTitle, setEventTitle] = useState('');
  const [selectedColor, setSelectedColor] = useState('#000000');
  const { date, setEvents, events } = route.params;
  const navigation = useNavigation();

  const handleAddEvent = () => {
    if (!eventTitle) {
      Alert.alert('Error', 'Please enter an event title');
      return;
    }

    setEvents({
      ...events,
      [date]: [
        ...(events[date] || []),
        { title: eventTitle, color: selectedColor },
      ],
    });

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Event Title</Text>
      <TextInput
        style={styles.input}
        value={eventTitle}
        onChangeText={setEventTitle}
        placeholder="Enter event title"
      />
      <Text style={styles.label}>Select Color</Text>
      <ColorPicker
        onColorSelected={color => setSelectedColor(color)}
        style={{ flex: 1 }}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddEvent}>
        <Text style={styles.buttonText}>Add Event</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4B1C71',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
