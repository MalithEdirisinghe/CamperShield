import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TentGood = ({ navigation }) => {

    const TentProcess = () => {
        navigation.navigate('Good');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.poor}>Poor</Text>
            <Image
                style={styles.image}
                source={require('../assets/poor.png')}
            />
            <TouchableOpacity style={styles.guidance} onPress={TentProcess}>
                <Text style={styles.guidanceText}>Try again in another location!</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    poor: {
        position: 'absolute',
        width: 168,
        height: 77,
        left: '30%',
        top: '15%',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 64,
        lineHeight: 77,
        textAlign: 'center',
        color: '#FB0808',
    },
    image: {
        position: 'absolute',
        width: 168,
        height: 120,
        left: '30%',
        top: '40%',
    },
    guidance: {
        position: 'absolute',
        width: '70%',
        height: 40,
        left: '15%',
        top: '70%',
        backgroundColor: '#EE8282',
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
        color: '#FF0606',
    },
});

export default TentGood;
