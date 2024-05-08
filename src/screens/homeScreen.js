import React from "react";
import { View, Text, StyleSheet, Image, FlatList, Pressable, ScrollView} from "react-native";
import {FontAwesome5} from '@expo/vector-icons'
import Search from "../components/search";
import category from "../data/category";
import products from "../data/products";
import newRecipes from "../data/newRecipes";

const HomeScreen = () => {
  
    return (
        <ScrollView>
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
            style={styles.productConainer}
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
                                <Image source={require(`../assets/icons/nav-icons/bookmark-active.png`)}
                                tintColor={'#009688'} style={styles.saveImage} />
                            </View>
                        </View>
                    </Pressable>
                )}
                keyExtractor={(item) => item.id}
                horizontal={true}
            />

            <View style={styles.recipeHeader}>
                <Text style={styles.headingText}>New Recipes</Text>
            </View>

<FlatList
    data={newRecipes}
    renderItem={({ item }) => (
        <Pressable
            onPress={() => {}}
        >
            <View style={styles.recipeContainer}>
                <View style={styles.recipeimage}>
                    <Image source={{ uri: item.image }} style={styles.recipeStyle} />
                </View>
                <View style={styles.ratingRecipe}>
                    {Array.from(Array(5).keys()).map((index) => (
                        <FontAwesome5 key={index} name="star" size={10} color="#FFD8B1" solid
                         style={styles.recipeIcon} />
                    ))}
                </View>
                <View style={styles.profileRow}>
                    <View style={styles.imageContainer1}>
                    <Image source={require('../assets/images/profile.jpg')} style={styles.images}/>
                    </View>
                    <Text style={styles.subNameText}>{item.subName}</Text>

                    <FontAwesome5 name="clock" size={16} color="#A9A9A9"
                     style={styles.recipeSaveImage}/>
        
                    <Text style={styles.textss}>{item.time}</Text>
                  
                   
                </View>
                <View style={styles.recipeRow}>
                    <Text style={styles.textRecipe}>{item.name}</Text>
                    
                </View>
            </View>
        </Pressable>
    )}
    keyExtractor={(item) => item.id}
    horizontal={true}
/>

        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: '7%',
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
        paddingTop: 7
    },
    icon: {
        bottom: 50,
        marginLeft: '20%',
        backgroundColor: "#FEBA4F",
        padding: 8,
        width: 50,
        height: 50,
        borderRadius: 15
    },
    itemContainer: {
        width: 98,
        backgroundColor: 'white',
        // borderWidth: 0.1,
        // height: 30,
        marginHorizontal: 10,
        justifyContent: 'center',
        padding: 8,
        marginRight: 3,
        borderRadius: 5,
        right: 20
        // top: 5,
    },

    productConainer: {
        marginTop: '5%',
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
        marginBottom: 160,
        // zIndex: 2,
        width: 150,
        height: 235,
        borderRadius: 12,
        top: 80
    },
    image: {
        width: 150,
        height: 165,
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
    recipeHeader: {
        bottom: 40
    },
    headingText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 24
    },
    recipeContainer: {
        backgroundColor: '#FFFFFF', 
        padding: 10,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 300,
        width: 251,
        height: 95,
        borderRadius: 12,
        top: 40
    },
    recipeimage: {
        width: 79.95,
        height: 86,
        borderRadius: 75, 
        overflow: 'hidden',
        borderColor: 'black',
        alignItems: 'center', 
        top: -22,
        left: 75  
    },
    recipeStyle: {
        width: 105.98,
        height: 94,
        // borderRadius: 75, 
    },
    ratingRecipe: {
        position: 'absolute',
        // top: 6,
        // right: -5,
        flexDirection: 'row',
        // alignItems: 'center',
        // backgroundColor: '#FFD8B1',
        paddingHorizontal: 8,
        paddingVertical: 13,
        left: 2
      },
      recipeIcon: {
        marginRight: 5,
        top: -10,
      },
      recipeRow: {
        bottom: 10
    },
    textRecipe: {
        textAlign: 'center',
        fontSize: 16,
        color: '#484848',
        fontWeight: 'bold',
        marginTop: -89,
        right: 40
       
    },

    recipeText: {
        right: 40,
        color: '#A9A9A9'
    },
    timeRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },
    textss: {
        marginRight: 6,
        fontWeight: 'bold',
        paddingLeft: 30,
        top: 4
    },

    recipeSaveImage: {
        width: 16,
        height: 16,
        borderRadius: 100,
        backgroundColor: 'white',
        left: 22,
        top: 4
    },
    profileRow: {
        flexDirection: 'row',
        top: -12,
        paddingHorizontal: 20,
       
    },

    imageContainer1: {
        borderRadius: 100,
        overflow: 'hidden',
        right: 6
    },

    images: {
        width: 25,
        height: 25,
       
    },
    subNameText: {
        fontSize: 12,
        color: '#A9A9A9',
        marginLeft: 10,
        top: 4
      },
    
})

export default HomeScreen;
