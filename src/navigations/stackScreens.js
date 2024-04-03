import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';
import SplashScreen from '../screens/splashScreen';
import BottomTabs from './bottomTabs';
import FoodDetailScreen from '../screens/FoodDetailScreen';
import Recipe from '../components/recipe';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from '../screens/homeScreen';
import SaveScreen from '../screens/save';
import Noti from '../screens/notification';
import ProfileScreen from '../screens/profile';





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