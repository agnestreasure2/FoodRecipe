// import React from "react";
// import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";
// import { FontAwesome5} from '@expo/vector-icons'


// const CustomBottomTabs = ({ state, descriptors, navigation}) => {
//     const tabWidth = 60;
//     const tabCurve = 20;
//     const totalWidth = tabWidth * state.routes.length;
//     const translateX = new Animated.Value(0);

//     const handleTabPress = (index) => {
//         const destination = index * tabWidth;
//         Animated.spring(translateX, {
//             toValue: destination,
//             useNativeDriver: true,
//         }).start();
//         navigation.navigate(state.routes[index.name]);
//     };

//     return (
//         <View>
//             <Animated.View
//             style={[
//                 styles.indicator,
//                 {
//                     width: tabWidth - tabCurve * 2,
//                     transform: [{ translateX: translateX}],
//                 },
//             ]}
//             />

//             {state.routes.map((route, index) => (
//             <TouchableOpacity
//             key={route.key}
//             onPress={() => handleTabPress(index)}
//             style={styles.tab}
//           >
//              {route.name === 'Home' && <Icon name="home" size={24} color="black" />}
//     {route.name === 'Save' && <Icon name="save" size={24} color="black" />}
//     {route.name === 'Notification' && <Icon name="bell" size={24} color="black" />}
//     {route.name === 'Profile' && <Icon name="user" size={24} color="black" />}
//           </TouchableOpacity>
//         ))}
//       </View>
//     )

// }

// const styles = StyleSheet.create({

// })

// export default CustomBottomTabs;