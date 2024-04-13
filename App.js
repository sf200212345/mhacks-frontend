import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { GlobalStyles } from './GlobalStyles';

export default function App() {
  return (
    <View style={GlobalStyles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
