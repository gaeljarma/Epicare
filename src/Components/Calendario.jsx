import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Modal, Alert, Keyboard, FlatList } from 'react-native';
import { CalendarList } from 'react-native-calendars';

export default function Calendario() {
  const [selectedDate, setSelectedDate] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [addEventModalVisible, setAddEventModalVisible] = useState(false);
  const [eventTitle, setEventTitle] = useState('');
  const [events, setEvents] = useState({});
  
  const handleDayPress = (day) => {
    const dateString = day.dateString;
    setSelectedDate(dateString);
    setModalVisible(true);
  };

  const handleAddEvent = () => {
    if (!eventTitle) {
      Alert.alert('Error', 'Please enter an event title');
      return;
    }

    setEvents({
      ...events,
      [selectedDate]: [
        ...(events[selectedDate] || []),
        { title: eventTitle }
      ],
    });

    setEventTitle('');
    setAddEventModalVisible(false);
    setModalVisible(true); // Close add event modal
    Keyboard.dismiss();
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setAddEventModalVisible(false);
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
        markedDates={{
          ...Object.keys(events).reduce((acc, date) => ({
            ...acc,
            [date]: { marked: true, dotColor: 'orange' }
          }), {})
        }}
      />
      
      {/* Modal to show events and add new event */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Events for {selectedDate}</Text>
            <FlatList
              data={events[selectedDate] || []}
              renderItem={({ item }) => (
                <View style={styles.eventItem}>
                  <Text>{item.title}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
              ListEmptyComponent={<Text>No events for this day</Text>}
            />
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setAddEventModalVisible(true)}
            >
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleCloseModal}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal to add new event */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={addEventModalVisible}
        onRequestClose={() => setAddEventModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Event</Text>
            <TextInput
              style={styles.input}
              placeholder="Event Title"
              value={eventTitle}
              onChangeText={setEventTitle}
            />
            <TouchableOpacity style={styles.button} onPress={handleAddEvent}>
              <Text style={styles.buttonText}>Add Event</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setAddEventModalVisible(false)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    position: 'relative',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4B1C71',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#4B1C71',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
  },
  eventItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
});
