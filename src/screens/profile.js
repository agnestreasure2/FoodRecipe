import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import RecipeScreen from "./recipeScreen";

const ProfileScreen = () => {
    const [showDetails, setShowDetails] = useState(false);
    
    const [showModal, setShowModal] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);

    };
        const toggleModal = () => {
            setShowModal(!showModal);
        
    };


    return (
        <View style={styles.container}> 
            <View style={styles.headerRow}>
                <Text style={styles.text}>Profile</Text>
                <Pressable onPress={toggleModal}>
                    <FontAwesome5 name="ellipsis-h" size={24} color="black" style={{ marginRight: 30 }} />
                </Pressable>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={toggleModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                            <FontAwesome5 name="times" size={20} color="black" />
                        </TouchableOpacity>
                        <View style={styles.menuRow}>
                            <TouchableOpacity style={styles.menuItem}>
                                <FontAwesome5 name="share" size={20} color="black" />
                                <Text style={styles.menuItemText}>Share</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem}>
                                <FontAwesome5 name="star" solid size={20} color="black" />
                                <Text style={styles.menuItemText}>Rate Recipe</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem}>
                                <FontAwesome5 name="envelope" solid size={20} color="black" />
                                <Text style={styles.menuItemText}>Review</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem}>
                                <FontAwesome5 name="bookmark" solid size={20} color="black" />
                                <Text style={styles.menuItemText}>Unsave</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.profileRow}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/images/profile.jpg')} style={styles.image} />
                </View>
                <Text style={styles.profileText}>Recipe</Text>
                <Text style={styles.profileText}>Followers</Text>
                <Text style={styles.profileText}>Following</Text>
            </View>

            <View style={styles.followRow}>
                <Text style={styles.followText}>4</Text>
                <Text style={styles.followText}>2.5M</Text>
                <Text style={styles.followText}>259</Text>
            </View>

            <View style={styles.chefRow}>
                <Text style={styles.chefName}>Afuwape Abiodun</Text>
                <Text style={styles.subChef}>chef</Text>
            </View>

            <View style={styles.chefDetails}>
                <Text style={styles.detailsChef}>Private Chef</Text>
                <Text style={styles.detailsChef}>Passionate about food and life</Text>
                {showDetails && (
                    <View>
                       <Text style={styles.detailsChef}>Worked for 5 years as a chef</Text>
                       <Text style={styles.detailsChef}>Went to a culinary school</Text>
                    </View>
                )}
                <TouchableOpacity onPress={toggleDetails}>
                    <Text style={styles.moreText}>{showDetails ? "Less" : "More.."}</Text>
                </TouchableOpacity>
            </View>

            <RecipeScreen /> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: '10%',
        
    },

    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    text: {
       left: 160,
       fontSize: 20,
       fontWeight: 'bold'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
       
    },

    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        bottom: 250,
        left: 90,
        
    },

    closeButton: {
        alignSelf: 'flex-end'
    },

    menuRow: {
        // flexDirection: 'row',
        justifyContent: 'space-between',
        // marginTop: 5
    },

    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },

    menuItemText: {
        marginLeft: 15,
        fontSize: 16
    },

    profileRow: {
        flexDirection: 'row',
        top: 20,
        paddingHorizontal: 20,
    },

    imageContainer: {
        borderRadius: 100,
        overflow: 'hidden'
    },

    image: {
        width: 100,
        height: 100
    },

    profileText: {
        fontSize: 16,
        color: '#ccc',
        top: 25,
        paddingHorizontal: 20
    },

    followRow: {
        flexDirection: 'row',
    },

    followText: {
        paddingHorizontal: 32,
        bottom: 30,
        left: 120,
        fontSize: 24,
        fontWeight: 'bold'

    },

    chefRow: {
        top: 10,
        paddingHorizontal: 20
    },

    chefName: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    subChef: {
        color: '#ccc'
    },

    chefDetails: {
        top: 20,
        paddingHorizontal: 20,
    },

    detailsChef: {
        color: 'gray'
    },

    moreText: {
        color: "#009688",
    },
});

export default ProfileScreen;
