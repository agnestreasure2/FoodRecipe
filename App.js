import React from 'react';
import { StyleSheet } from 'react-native';
import StackScreen from './src/navigations/stackScreens';
import { NavigationContainer } from '@react-navigation/native';
import MyTabBar from './src/components/svgSample';
import ExampleBottom from './src/components/exampleBottom';

export default function App() {
  return (
    //  <MyTabBar/>
   <NavigationContainer style={styles.container}>
     <StackScreen/>


   </NavigationContainer>
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
