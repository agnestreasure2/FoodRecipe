import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import ReusableInput from '../components/reuseableInput';
import { FontAwesome5} from '@expo/vector-icons'
import CheckBox from 'expo-checkbox'


const SignUp = ({navigation}) => {
    
    const [name, setName] = useState ();
    const [email, setEmail] = useState ();
    const [password, setPassword] = useState ();
    const [confirmpassword, setConfirmPassword] = useState('')
    const [isChecked, setChecked] = useState(false);


   
  return (

    <ScrollView>
      <View style={styles.container}>
    <View style={styles.TextContainer}>
        <View >
        <Text style={styles.TextButton}>Create an account</Text>

        <View>
            <Text style={styles.subText}>Let's help you set up your account,</Text> 
            <Text style={styles.subText}>it won't take time</Text>
        </View>
        </View>

        <View>
            <Text style={styles.label}>Name</Text>

        <ReusableInput
    value={name}  
    onChangeText={(text) => setName(text)}
    placeholder='Enter Name'
    
    />

</View>

     <View>
            <Text style={styles.label}> Email</Text>

<ReusableInput
    value={email}
    onChangeText={(text) => setEmail(text)}
    placeholder='Enter Email'
    
    />
    </View>

<View>
  <Text style={styles.label}>Password</Text>
        
<ReusableInput
    value={password}
    onChangeText={(text) => setPassword(text)}
    placeholder='Enter Password'
    secureTextEntry={true}
    
    />

</View>

<View>
   <Text style={styles.label}>Confirm Password</Text>
<ReusableInput
    value={confirmpassword}
    onChangeText={(text) => setConfirmPassword(text)}
    placeholder='Retype password'
    secureTextEntry={true}
    
    />
    </View>


    <View style={styles.section}>
        <CheckBox  color='orange' style={styles.checkbox}
         value={isChecked} 
         onValueChange={setChecked} />
        <Text style={styles.paragraph}>   Accept terms & Conditions</Text>
      </View>

      <TouchableOpacity style={styles.signInButton}
        onPress={()=> navigation.navigate('Home')} 
      >
        <Text style={styles.signInText}>Sign Up</Text>
        <FontAwesome5 name="arrow-right" size={16} color="#FFFFFF" />
      </TouchableOpacity>
    
    

<View style={styles.option}>
        <View style={styles.separator}></View>
        <Text style={styles.OrText}>or Sign in With</Text>
        <View style={styles.separator}></View>
      </View>

<View style={styles.socialMediaContainer}>
        <Image
          source={require("../assets/icons/google.png")}
          style={styles.socialMediaIcon}
        />

        <TouchableOpacity>
          <Image
            source={require("../assets/icons/facebook.png")}
            style={styles.socialMediaIcon}
          />
        </TouchableOpacity>

      </View>

      <View style={styles.OptionText}>
            <Text style={styles.textOption}>
                Already a member?
            </Text>

            <TouchableOpacity
            onPress={()=> navigation.navigate('signin')} 
            >
                <Text style={styles.signText}> Sign in</Text>
            </TouchableOpacity>
        </View>
        
    </View>
    </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    top: "10%",
    paddingHorizontal: 30,
  },
    TextButton: {
        bottom: 15,
        fontSize: 30,
        fontWeight: "bold",
        left: 20
    },
    subText: {
        fontSize: 16,
        fontWeight: "normal",
        left: 20
    },

    section: {
         flexDirection: 'row',
        alignItems: 'center',
        top: 30
    },
    checkbox: {
        marginLeft: 15,
        borderRadius: 5
    },
    paragraph: {
        fontSize: 15,
        color: 'orange'
},
      option: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 25,
        justifyContent: 'center'
      },
      label: {
        fontSize: 18,
        top: 47,
        left: 20
      },
      OrText: {
        fontSize: 15,
        alignSelf: "center",
        marginHorizontal: 1,
        color: '#ccc'
      },
      separator: {
        width: 80,
        height: 0.5,
        backgroundColor: "#ccc",
        marginHorizontal: 2,
        
       
      },
      signInButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#009688",
        paddingVertical: 10,
        // paddingHorizontal: 30,
        borderRadius: 15,
        marginTop: 60,
        width: "100%",
        height: 70,
      },
      
      signInText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 40,
      },
      socialMediaContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center",
        
        
      },
      socialMediaIcon: {
        width: 55,
        height: 50,
        marginHorizontal: 10,
        marginTop: 60,
        bottom: 20,
        borderRadius: 10
      },
      OptionText: {
        flexDirection: 'row',
        marginTop: 40,
        fontSize: 25,
        color: '#ccc',
        alignItems: 'center',
        justifyContent: "center",
    },
    signText: {
      color: 'orange'
    },
    textOption: {
      fontSize: 15,
    }
})
export default SignUp;




