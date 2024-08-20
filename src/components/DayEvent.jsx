import { View, Text, StyleSheet } from "react-native"

export function DayEvent({ item }) {
    <View style={styles.eventItem}>
        <Text style={styles.eventTitle}>{item.title}</Text>
        <Text style={styles.eventDescription}>{item.description}</Text>
    </View>

}

const styles = StyleSheet.create({
    eventItem: {
        marginBottom: 12,
    },
    eventTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    eventDescription: {
        fontSize: 14,
    }
})