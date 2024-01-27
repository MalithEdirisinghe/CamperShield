import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TentGood = ({ navigation }) => {

    const TentProcess = () => {
        navigation.navigate('Guidance');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.excellent}>Excellent</Text>
            <Image
                style={styles.image}
                source={require('../assets/excellent.png')}
            />
            <TouchableOpacity style={styles.guidance} onPress={TentProcess}>
                <Text style={styles.guidanceText}>Tent Construction Guidance </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    excellent: {
        position: 'absolute',
        width: 'auto',
        height: 77,
        left: '25%',
        top: '15%',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 50,
        lineHeight: 77,
        textAlign: 'center',
        color: '#5FFF9F',
    },
    image: {
        position: 'absolute',
        width: 168,
        height: 150,
        left: '35%',
        top: '35%',
    },
    guidance: {
        position: 'absolute',
        width: '70%',
        height: 40,
        left: '15%',
        top: '80%',
        backgroundColor: '#5FFF9F',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 15,
    },
    guidanceText: {
        position: 'absolute',
        left: '15%',
        top: '12%',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 15,
        lineHeight: 24,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.89)',
    },
});

export default TentGood;
