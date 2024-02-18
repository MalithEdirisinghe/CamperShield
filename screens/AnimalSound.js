import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Button, ActivityIndicator } from 'react-native';
import { Audio } from 'expo-av';

const AnimalSound = ({ route, navigation }) => {
    const { imageUri } = route.params;
    const [capturedImageUri] = useState(imageUri);
    const [isLoading, setIsLoading] = useState(false);

    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    useEffect(() => {
        if (sound) {
            sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
        }
    }, [sound]);

    const onPlaybackStatusUpdate = (status) => {
        if (status.didJustFinish) {
            setIsPlaying(false);
        }
    };

    const playSound = async () => {
        try {
            if (sound) {
                if (isPlaying) {
                    await sound.pauseAsync();
                } else {
                    await sound.playAsync();
                }
                setIsPlaying(!isPlaying);
            } else {
                const { sound } = await Audio.Sound.createAsync(
                    require('../assets/sounds/fox/fox.mp3')
                );
                setSound(sound);
                await sound.playAsync();
                setIsPlaying(true);
            }
        } catch (error) {
            console.error('Failed to play/pause the sound', error);
        }
    };

   

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: capturedImageUri }} />
            {isLoading && <ActivityIndicator size="large" color="#3FFF9A" />}
            <Text style={styles.capText}>Successfully captured Image</Text>

            <Button title={isPlaying ? 'Pause' : 'Play'} onPress={playSound} />
            {/* <WaveForm autoPlay={true}
                source={require('../assets/sounds/fox/fox.mp3')}
            /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 300,
        top: '5%'
    },
    capText: {
        top: '10%',
        fontSize: 20,
    },
});

export default AnimalSound;