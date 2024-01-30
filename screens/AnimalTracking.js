import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const AnimalTracking = () => {

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/cam.png')}
            />
            <Text style={styles.topicText}>Animal Identify</Text>
            <Text style={styles.normalText}>Capture Footprint to Identify Animal</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    topicText: {
        marginBottom: 10,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#653030',
        top: '250%',
    },
    image: {
        position: 'absolute',
        width: 200,
        height: 200,
        left: '25%',
        top: '35%',
    },
});

export default AnimalTracking;
