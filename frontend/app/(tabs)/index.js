import { Image, StyleSheet, Platform, Button, Alert } from 'react-native';

import { HelloWave } from '@/components/AnimatedLogo';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import CameraScreen from '@/components/CameraScreen';
import EditScreen from '@/app/EditScreen';
import MapScreen from '@/app/MapScreen';
import Success from '@/components/Success'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


function HomeScreen({navigation}) {
  return (
    <ThemedView style={styles.viewContainer}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText style={styles.centredText} type="title">LOGO</ThemedText>
        </ThemedView>

        <Button title="Upload new map" onPress={() => console.log("Button 1 pressed")}/>
        <Button title="Load map" onPress={() => console.log("Load map.")}/>
        <Button title="Scan" onPress={() => navigation.navigate("Camera")}/>
        <Button title="Map" onPress={() => navigation.navigate("MapScreen")}/>
    </ThemedView>
  );
}

const RootStack = createNativeStackNavigator();

const Stack = () => (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <RootStack.Screen name="Camera" component={CameraScreen} />
      <RootStack.Screen name="EditScreen" component={EditScreen} />
      <RootStack.Screen name="MapScreen" component={MapScreen} />
      <RootStack.Screen name="Success" component={Success} />
    </RootStack.Navigator>
);

export default function App() {
  return (
    <Stack/>
  )
};


// export default function App() {
//   return (
//     <Stack />
//     // <NavigationContainer>
//     //   <ThemedView style={styles.viewContainer}>
//     //     <ThemedView style={styles.titleContainer}>
//     //       <ThemedText style={styles.centredText} type="title">LOGO</ThemedText>
//     //     </ThemedView>

//     //     <Button title="Upload new map" onPress={() => console.log("Button 1 pressed")}/>
//     //     <Button title="Load map" onPress={() => console.log("Load map.")}/>
//     //     <Button title="Scan" onPress={() => console.log("Taking scan photo...")}/>
//     //   </ThemedView>
//     // </NavigationContainer>
    
//     // <ThemedView style={styles.titleContainer}>
//     //   <ThemedText type="title">Welcome! Henrique is a nerd</ThemedText>
//     //   <HelloWave />
//     // </ThemedView>

//     // <ParallaxScrollView
//     //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//     //   headerImage={
//     //     <Image
//     //       source={require('@/assets/images/partial-react-logo.png')}
//     //       style={styles.reactLogo}
//     //     />
//     //   }>
//     //   <ThemedView style={styles.titleContainer}>
//     //     <ThemedText type="title">Welcome! Henrique is a nerd and a </ThemedText>
//     //     <HelloWave />
//     //   </ThemedView>
//     //   <ThemedView style={styles.stepContainer}>
//     //     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//     //     <ThemedText>
//     //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//     //       Press{' '}
//     //       <ThemedText type="defaultSemiBold">
//     //         {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
//     //       </ThemedText>{' '}
//     //       to open developer tools.
//     //     </ThemedText>
//     //   </ThemedView>
//     //   <ThemedView style={styles.stepContainer}>
//     //     <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//     //     <ThemedText>
//     //       Tap the Explore tab to learn more about what's included in this starter app.
//     //     </ThemedText>
//     //   </ThemedView>
//     //   <ThemedView style={styles.stepContainer}>
//     //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//     //     <ThemedText>
//     //       When you're ready, run{' '}
//     //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//     //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//     //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//     //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//     //     </ThemedText>
//     //   </ThemedView>
//     // </ParallaxScrollView>
//   );
// }

const styles = StyleSheet.create({
  viewContainer:{
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },

  centredText:{
    textAlign: 'center',
    width: "100%",
  }
});
