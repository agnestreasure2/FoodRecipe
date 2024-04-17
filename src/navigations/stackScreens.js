import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';
import SplashScreen from '../screens/splashScreen';
import BottomTabs from './bottomTabs';
import FoodDetailScreen from '../screens/FoodDetailScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';



const Stack = createNativeStackNavigator();

const StackScreen = () => {
  


  return (

    // <SafeAreaView>
    <SafeAreaProvider>


    <Stack.Navigator  screenOptions={{ headerShown: false }}>

      
     <Stack.Screen name='splash' component={SplashScreen}  />
     
     <Stack.Screen name='signin' component={SignIn}  />
     
      <Stack.Screen name='home' component={BottomTabs}   />

      <Stack.Screen name='signup' component={SignUp}  />

      <Stack.Screen name='details' component={FoodDetailScreen}  />

  

    
      
    
    </Stack.Navigator>
    </SafeAreaProvider>
   
  
    // {/* </SafeAreaView> */}
    
  );
}


export default StackScreen;