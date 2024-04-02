import React from "react";
import { View, Text, StyleSheet, Image, FlatList, Pressable } from "react-native";
import Search from "../components/search";
import category from "../data/category";
import products from "../data/products";




const HomeScreen = () => {
  
    return (
        <View style={styles.container}>
            <Text style={styles.textContainer}>Hello Fola</Text>

            <View style={styles.header}>
                <Text style={styles.subHeader}>What are you cooking today?</Text>
                
                <Image source={require("../assets/icons/profile.png")} style={styles.icon}/>
                
            </View>

            <View>
                <Search/>
            </View>

            <FlatList
                 data={category}
                 renderItem={({item})=> 
                 (
                 <Pressable
                 onPress={()=>{}}
    
                 style={styles.itemContainer}>

                 <Text style={styles.texts}>{item.title}</Text>
   
    </Pressable>
   )}  horizontal={true} />

             <FlatList
                   data={products}
                    renderItem={({item})=> 
                    (
                   <Pressable
                   onPress={()=>{}}

                  style={styles.image}>
                 <Image source={{uri: item.image}}/>
                <Text style={styles.texts}>{item.name}</Text>

</Pressable>
)}  horizontal={true}  />

        </View>
    )
    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: '10%',
        padding: 35,
    },
    textContainer: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    header: {
        flexDirection: 'row'
    },
    subHeader: {
        fontSize: 16,
        color: "#ccc",
    },
    icon: {
        bottom: 50,
        marginLeft: '29%',
        backgroundColor: "#FEBA4F",
        padding: 8,
        width: 60,
        height: 60,
        borderRadius: 15
        
    },
    itemContainer: {
        width: 98,
        backgroundColor: 'white',
        borderWidth: 0.1,
        height: 30,
        marginHorizontal: 10,
        justifyContent: 'center',
        padding: 8,
        marginLeft: 2,
        borderRadius: 5,
        top: 20,
    },
    texts: {
        alignSelf: 'center',
        fontSize: 13,
        color: '#009688'
    },
    image: {
        width: 150,
        height: 30,
        aspectRatio:1,
    }
   
})

export default HomeScreen;

