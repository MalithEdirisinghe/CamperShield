import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native';
import firebase from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { getDownloadURL, ref, getStorage } from 'firebase/storage';
import { auth, app, db } from './firebase';
import 'firebase/database';
import { modalStyles } from '../css/modalStyles';

export default function HomeScreen({ navigation }) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [userData, setUserData] = useState(null);
    const [username, setUsername] = useState(null);
    const [profileImageUrl, setProfileImageUrl] = useState(null);

    const openModal = () => {
        setModalVisible(true);
        fetchUserData();
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const onHomePress = () => {
        // Close the modal when the Home button is pressed
        closeModal();
        // You can also navigate to the Home screen here
    };

    const home = () => {
        // Close the modal when the Home button is pressed
        closeModal();
        // You can also navigate to the Home screen here
    };

    const OpenTent = () => {
        navigation.navigate('Tent');
    };

    const openTracking = () => {
        navigation.navigate('Track');
    };

    const fetchUserData = async () => {
        // Get the currently signed-in user
        const user = getAuth().currentUser;

        if (user) {
            setUsername(user.displayName);

            const storage = getStorage(app);
            const storageRef = ref(storage, `user_images/${user.uid}.jpeg`);

            getDownloadURL(storageRef)
                .then((url) => {
                    setProfileImageUrl(url);
                })
                .catch((error) => {
                    // console.error('Error fetching profile picture:', error);
                    const value = 'Not available profile picture.';
                    ToastAndroid.showWithGravityAndOffset(
                        value,
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                        25,
                        50
                    );
                });
            setUserData(user);
        }
    };


    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.rectangle31}></View>
            <View style={styles.rectangle28}></View>
            <View style={styles.rectangle29}>
            </View>
            <View style={styles.rectangle30}></View>

            <TouchableOpacity onPress={openTracking}>
            <Image
                style={styles.animal}
                source={require('../assets/Animal.png')}
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={OpenTent}>
            <Image
                style={styles.tent}
                source={require('../assets/Tent.png')}
                />
                </TouchableOpacity>
            <Image
                style={styles.mushroom}
                source={require('../assets/Mushroom.png')}
            />
            <Image
                style={styles.water}
                source={require('../assets/Water.png')}
            />

            <Text style={styles.trackingAnimals}>Tracking Animals</Text>
            <Text style={styles.identifyMushrooms}>Identify Mushrooms</Text>
            <Text style={styles.waterSources}>Water Sources for Bathing</Text>
            <Text style={styles.campingTentBuild}>Camping Tent Build</Text>
            <View style={styles.rectangle44}>
            </View>

            <View style={styles.rectangle42} />
            <TouchableOpacity onPress={openModal}>
                <Image
                    style={styles.rectangle43}
                    source={require('../assets/tripleLine.png')}
                />
            </TouchableOpacity>



            <View style={styles.rectangle25}>
                <Image
                    style={styles.homePic}
                    source={require('../assets/homePic.png')}
                />
            </View>



            <View style={styles.rectangle38}>
            </View>

            {isModalVisible && (
                <View style={modalStyles.modal}>
                    {/* {userData && ( */}
                    <View style={modalStyles.profileContainer}>
                        {profileImageUrl ? (
                            <Image source={{ uri: profileImageUrl }} style={styles.profileImage} />
                        ) : (
                            <Image source={require('../assets/users.png')} style={styles.image} />
                        )}
                        <Text style={modalStyles.profileName}>{userData.displayName}</Text>
                        {/* Add other user details as needed */}
                       
                    </View>
                    <TouchableOpacity style={modalStyles.home} onPress={home}>
                        <Image
                            source={require('../assets/homes.png')}
                            style={modalStyles.homes}
                        />
                        <Text style={modalStyles.homeText}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={modalStyles.profile} onPress={home}>
                        <Image
                            source={require('../assets/profiles.png')}
                            style={styles.homes}
                        />
                        <Text style={modalStyles.homeText}>My Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={modalStyles.setting} onPress={home}>
                        <Image
                            source={require('../assets/setting.png')}
                            style={modalStyles.homes}
                        />
                        <Text style={modalStyles.homeText}>Settings</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.profile} onPress={home}>
                        <Image
                            source={require('../assets/profiles.png')}
                            style={styles.homes}
                        />
                        <Text style={styles.homeText}>My Profile</Text>
                    </TouchableOpacity> */}
                    {/* )} */}
                    <TouchableOpacity style={modalStyles.overlay} onPress={closeModal} />
                    {/* User profile details */}
                </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 430,
        minHeight: 932,
        backgroundColor: '#D8F6E4',
    },
    rectangle44: {
        position: 'absolute',
        width: 403,
        height: 157,
        left: 15,
        top: 748,
        // Add background image style
    },
    rectangle38: {
        position: 'absolute',
        width: 23,
        height: 23,
        left: 108,
        top: 887,
        // Add background image style
    },
    rectangle42: {
        position: 'absolute',
        width: 430,
        height: 60,
        left: 0,
        top: 35,
        backgroundColor: '#5FFF9F',
    },
    rectangle43: {
        // position: 'absolute',
        width: 20,
        height: 15,
        left: 21,
        top: 60,
    },
    homePic: {
        position: 'absolute',
        width: 430,
        height: 337,
        left: 0,
        top: 75,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        top: 10,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        top: 10,
    },
    rectangle31: {
        position: 'absolute',
        width: 180,
        height: 150,
        left: 10,
        top: 450,
        backgroundColor: 'rgba(95, 255, 159, 0.24)',
    },
    rectangle28: {
        position: 'absolute',
        width: 180,
        height: 150,
        left: 10,
        top: 620,
        backgroundColor: 'rgba(95, 255, 159, 0.24)',
    },
    rectangle29: {
        position: 'absolute',
        width: 180,
        height: 150,
        left: 200,
        top: 450,
        backgroundColor: 'rgba(95, 255, 159, 0.24)',
    },
    rectangle30: {
        position: 'absolute',
        width: 180,
        height: 150,
        left: 200,
        top: 620,
        backgroundColor: 'rgba(95, 255, 159, 0.24)',
    },
    animal: {
        position: 'absolute',
        width: 96,
        height: 87,
        left: 55,
        top: 460,
    },
    tent: {
        position: 'absolute',
        width: 100,
        height: 100,
        left: 250,
        top: 460,
    },
    mushroom: {
        position: 'absolute',
        width: 97,
        height: 97,
        left: 55,
        top: 630,
    },
    water: {
        position: 'absolute',
        width: 100,
        height: 100,
        left: 250,
        top: 630,
    },
    trackingAnimals: {
        position: 'absolute',
        width: 197,
        height: 21,
        left: 5,
        top: 560,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 17,
        lineHeight: 21,
        textAlign: 'center',
        color: '#000000',
    },
    identifyMushrooms: {
        position: 'absolute',
        width: 197,
        height: 21,
        left: 5,
        top: 730,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 17,
        lineHeight: 21,
        textAlign: 'center',
        color: '#000000',
    },
    waterSources: {
        position: 'absolute',
        width: 197,
        height: 42,
        left: 195,
        top: 720,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 17,
        lineHeight: 21,
        textAlign: 'center',
        color: '#000000',
    },
    campingTentBuild: {
        position: 'absolute',
        width: 158,
        height: 21,
        left: 212,
        top: 560,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 17,
        lineHeight: 21,
        textAlign: 'center',
        color: '#000000',
    },
    home: {
        top: 10,
        width: 120,
        left: '5%',
        justifyContent: 'center',
    },
    homeText: {
        fontWeight: 'bold',
        fontSize: 20,
        left: '40%',
        textAlign: 'left'       
    },
    homes: {
        position: 'absolute',
        left: 10,
        top: 0,
        width: 24,
        height: 24,
    },
    profile: {
        top: 25,
        width: 120,
        left: '5%',
        justifyContent: 'center',
    },
    setting: {
        top: 45,
        width: 120,
        left: '5%',
        justifyContent: 'center',
    },
});

