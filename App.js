import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './LoginScreen';
import ChatScreen from './ChatScreen';
import { useState } from 'react';

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <View style={styles.container}>
      {user ? <ChatScreen /> : <LoginScreen onLogin={setUser} />}
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: '#d0bdf4',
      justifyContent: 'center',
      // alignItems: 'center',
      padding: 20,
  }
});