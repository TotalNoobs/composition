import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { rgbaColor } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';


export default function Success({navigation}) {


    const confirmCallback = () => {
        console.log("Confirmed");
        Alert.alert("Location confirmed. Scan saved.");
        navigation.navigate("Home");
    }

    return (
        <>
        <ThemedView>
            <ThemedText>Success!</ThemedText>

        </ThemedView>
                    <TouchableOpacity onPress={confirmCallback}>
                    <Text>Return</Text>
                </TouchableOpacity>
        </>
    );
}