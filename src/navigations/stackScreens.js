import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, Pressable } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";
import HomeScreen from '../screens/homeScreen';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';
import SplashScreen from '../screens/splashScreen';
import BottomTabs from './bottomTabs';
import FoodDetailScreen from '../screens/FoodDetailScreen';
import Recipe from '../components/recipe';
import RecipeScreen from '../screens/recipeScreen';





const Stack = createNativeStackNavigator();

const StackScreen = () => {
  


  return (

    <Stack.Navigator  screenOptions={{ headerShown: false }}>

      
     <Stack.Screen name='splash' component={SplashScreen}  />
     
     <Stack.Screen name='signin' component={SignIn}  />
     
      <Stack.Screen name='home' component={BottomTabs}   />

      <Stack.Screen name='signup' component={SignUp}  />

      <Stack.Screen name='details' component={FoodDetailScreen}  />

      
      <Stack.Screen name='recipe' component={RecipeScreen}  />
      
    
    </Stack.Navigator>
   
  
    
  );
}


export default StackScreen;