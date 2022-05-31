import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { stylesG } from './assets/style/stylesGlobal';

export default function App() {
  return (
    <View style={stylesG.background}>
      <Text>Bem vindx ao +Escola</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1673d6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
