import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function EditScreen({navigation}) {

    confirmCallback = () => {
        console.log("Confirmed");
        navigation.navigate("MapScreen");
    }

    return (
        <ThemedView>
            <ThemedText type="title">Edit Screen</ThemedText>

            <TouchableOpacity onPress={confirmCallback}>
                <Text >Confirm</Text>
            </TouchableOpacity>
        </ThemedView>
    );
}