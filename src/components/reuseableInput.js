import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const ReusableInput = ({label, onChangeText, placeholder, value, style, secureTextEntry}) => {
  return (
    <View>
      {/* {label} */}

      <View style={styles.inputCover}>
        <TextInput
        style={styles.inputText}
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
        label={label}
        secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  inputCover: {
    alignSelf: 'center',
    backgroundColor: 'whitesmoke',
    width: '100%',
    height: 70,
    borderColor: "#DBDBDB",
    borderRadius: 15,
    borderWidth: 2,
    paddingHorizontal: 15,
    marginVertical: 20,
    top:30
   
  },
  inputText: {
    color: 'black',
    padding: 10,
    marginTop: 15
  }
})

export default ReusableInput;
