import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GetStarted } from './src/screens/GetStarted';

export default function App() {
  return (
    <View>
      <GetStarted/>
      <StatusBar style="light" translucent/>
    </View>
  );
}
