import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function MapScreen({navigation}) {

    confirmCallback = () => {
        console.log("Confirmed");
        Alert.alert("Location confirmed. Scan saved.");
        navigation.navigate("Home");
    }

    return (
        <ThemedView>
            <ThemedText type="title">Map Screen</ThemedText>
            <ThemedText type="subtitle">Choose location</ThemedText>

            <TouchableOpacity onPress={confirmCallback}>
                <Text >Confirm</Text>
            </TouchableOpacity>
        </ThemedView>
    );
}