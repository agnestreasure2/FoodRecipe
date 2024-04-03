import React from "react";
import { View, Text, StyleSheet, Image, FlatList, Pressable, ImageBackground } from "react-native";
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

                 <Text style={styles.categoryText}>{item.title}</Text>
   
    </Pressable>
              )}  horizontal={true} />

<FlatList
  data={products}
  renderItem={({ item }) => (
    <Pressable
      onPress={() => {}}
      >

        <View style={styles.imageContainer}>
    <View style={styles.image}>
      <ImageBackground source={{ uri: item.image }} style={styles.imageStyle} />
      </View>
      
      
      <Text style={styles.text}>{item.name}</Text>

      <Text style={styles.text}>Time</Text>

      <View>
      <Text style={styles.texts}>{item.time}</Text>

      <Image source={require('../assets/images/save.png')} 
      style={styles.timeRow}
      />
      </View>
      
      
      </View>
    </Pressable>
  )}
  keyExtractor={(item) => item.id}
  horizontal={true}
/>


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

    categoryText: {
        color: '#009688',
        textAlign: 'center',
        
    },
    text: {
        textAlign: 'center',
        fontSize: 12,
        color: 'black',
        marginBottom: 0
      },

      imageContainer: {
        backgroundColor: '#D9D9D9', 
        padding: 10,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 260,
        position: 'relative',
        zIndex: 2,
      },
    
      image: {
        width: 150,
        height: 150,
        borderRadius: 75, 
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center', 
        top: -39    

      },
    
      imageStyle: {
        width: 150,
        height: 150,
        borderRadius: 75, 
         
      },

      timeRow: {
        width: 24,
        height: 24,
        color: 'red'
      },

})

export default HomeScreen;

