import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/screens/signIn';
import StackScreen from './src/navigations/stackScreens';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
   <NavigationContainer style={styles.container}>
     <StackScreen/>
   </NavigationContainer>
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
