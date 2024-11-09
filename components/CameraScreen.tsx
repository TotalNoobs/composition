import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CameraScreen({navigation}) {
  const [facing, setFacing] = useState<CameraType>('back');
  const [isCameraReady, setIsCameraReady] = useState<boolean>(false);
  const [permission, requestPermission] = useCameraPermissions();
  const ref = useRef(null)

  const onCameraReady = () => {
    setIsCameraReady(true);
     };

  if (!permission) {
    // Camera permissions are still loading.
    return <View/>;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>COMPANY needs to access your camera to scan.</Text>
        <Button onPress={requestPermission} title="Request Camera Permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  // cameraRef = useRef(null);
  async function takePhoto() { 
    if (!isCameraReady) return;

    // Take a photo using the camera.
    console.log('Taking photo');
    const photo = await ref.current.takePictureAsync({quality:0});
    console.log(photo);
    navigation.navigate('Home', {photo});
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera}
                  onCameraReady={onCameraReady} 
                  facing={facing}
                  ref={ref}>
        <View style={styles.buttonContainer}>
        
        <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <Text style={styles.text}>Take photo</Text>
        </TouchableOpacity>
      
         <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignContent : 'center',
    justifyContent: 'flex-end',
    // margin: 64,
  },
  button: {
    // flex: 1,
    // flexDirection: 'column',
    // alignSelf: 'flex-end',
    padding: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
