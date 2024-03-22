import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const Button = ({onpress, title, style}) => {
  return (
    <View>
      <TouchableOpacity
      onPress={onpress} style={[styles.HandleButton, style]}>

        <Text style={styles.ButtonText}>{title}</Text>

      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    text: {
        textAlign: 'center',
        marginTop: 5,
    },
    HandleButton: {
      alignSelf: 'center',
      alignItems: 'center', 
      borderWidth: 1,
      width: 350,
      height: 55,
      borderRadius: 35,
      top: 85,
      backgroundColor: 'green'
     
  },
  ButtonText: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 20,
      paddingTop: 15
  }

});


export default Button;
