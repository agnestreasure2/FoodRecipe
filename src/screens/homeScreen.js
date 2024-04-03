import React from "react";
import { View, Text, StyleSheet, Image, FlatList, Pressable, ScrollView} from "react-native";
import {FontAwesome5} from '@expo/vector-icons'
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
                 renderItem={({item})=> (
                     <Pressable
                         onPress={()=>{}}
                         style={styles.itemContainer}>
                         <Text style={styles.categoryText}>{item.title}</Text>
                     </Pressable>
                 )}  
                 horizontal={true} 
            />

            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => {}}
                    >
                        <View style={styles.imageContainer}>

                            
                            <View style={styles.image}>
                                <Image source={{ uri: item.image }} style={styles.imageStyle} />
                            </View>

                            <View style={styles.ratingContainer}>
                         <FontAwesome5 name="star" size={10} color="yellow" style={styles.ratingIcon} />
                             <Text style={styles.ratingText}>{item.rating}</Text>

                        </View>
                            <View style={styles.nameRow}>
                            <Text style={styles.text}>{item.name}</Text>
                            </View>
                            
                            <Text style={styles.timeText}>Time</Text>
                            <View style={styles.timeRowContainer}>
                                <Text style={styles.texts}>{item.time}</Text>
                                <Image source={require('../assets/images/save.png')}
                                tintColor={'#009688'} style={styles.saveImage} />
                            </View>
                        </View>
                    </Pressable>
                )}
                keyExtractor={(item) => item.id}
                horizontal={true}
            />

            <View>
                <Text>New Recipes</Text>
            </View>
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

    ratingContainer: {
        position: 'absolute',
        top: 6,
        right: -5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFD8B1',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 8,
      },
      ratingIcon: {
        marginRight: 5,
      },
      ratingText: {
        fontSize: 12,
        color: '#000',
      },
    categoryText: {
        color: '#009688',
        textAlign: 'center',
    },

    nameRow: {
        bottom: 10
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',marginTop: -20
    },

    timeText: {
        right: 40,
        color: '#A9A9A9'
    },
    imageContainer: {
        backgroundColor: '#D9D9D9', 
        padding: 10,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 260,
        zIndex: 2,
        width: 150,
        height: 235,
        borderRadius: 12
    },
    image: {
        width: 150,
        height: 155,
        borderRadius: 75, 
        overflow: 'hidden',
        // borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center', 
        top: -39    
    },
    imageStyle: {
        width: 150,
        height: 150,
        borderRadius: 75, 
    },
    timeRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },
    texts: {
        marginRight: 6,
        fontWeight: 'bold'
    },
    saveImage: {
        width: 16,
        height: 16,
        borderRadius: 100,
        backgroundColor: 'white',
        marginLeft: 50
    },
})

export default HomeScreen;
