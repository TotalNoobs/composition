import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Alert, StyleSheet, Image, TouchableWithoutFeedback, Platform, View } from 'react-native';
import { useState } from 'react';

export default function MapScreen({ navigation }) {
  const [imageLayout, setImageLayout] = useState({ width: 0, height: 0 });

  const confirmCallback = () => {
    console.log("Confirmed");
    Alert.alert("Location confirmed. Scan saved.");
    navigation.navigate("Home");
  };

  const handleImageTouch = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    
    // Calculate percentages for cross-platform consistency
    const xPercentage = (locationX / imageLayout.width) * 100;
    const yPercentage = (locationY / imageLayout.height) * 100;
    
    console.log("Tapped Coordinates:", { 
      x: locationX, 
      y: locationY,
      xPercentage,
      yPercentage 
    });
    
    // navigation.navigate("Success", {
    //   x: xPercentage,
    //   y: yPercentage
    // });
  };

  return (
    <View style={styles.container}>
      <ThemedView>
        <ThemedText type="title">Map Screen</ThemedText>
        <ThemedText type="subtitle">Choose location</ThemedText>
      </ThemedView>
      
      <TouchableWithoutFeedback onPress={handleImageTouch}>
        <Image
          source={require('@/assets/MKH-MKH.png')}
          style={styles.picture}
          resizeMode="contain"
          onLayout={(event) => {
            const { width, height } = event.nativeEvent.layout;
            setImageLayout({ width, height });
          }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  picture: {
    width: '100%',
    height: Platform.select({
      web: 300,
      default: undefined, // Will maintain aspect ratio on mobile
    }),
    aspectRatio: 16 / 9, // Adjust this ratio to match your image
    alignSelf: 'center',
    cursor: "pointer"
  }
});