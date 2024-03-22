import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, Pressable } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";
import HomeScreen from '../screens/homeScreen';
import SignIn from '../screens/signIn';





const Stack = createNativeStackNavigator();

const StackScreen = () => {
  


  return (

    <Stack.Navigator >
     
     <Stack.Screen name='signin' component={SignIn} options={{ headerShown: false }} />
     

      <Stack.Screen name='Home' component={HomeScreen}  options={{ headerShown: false }}
      />
    
    </Stack.Navigator>
   
  
    
  );
}


export default StackScreen;