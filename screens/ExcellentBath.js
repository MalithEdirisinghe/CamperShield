import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TentGood = ({ navigation }) => {

    const TentProcess = () => {
        navigation.navigate('Home');
    }
    return (
        <View style={styles.container}>
            <View style={styles.greenBox}>
                <Text style={styles.good}>Excellent !</Text>
                <Image
                    style={styles.image}
                    source={require('../assets/Lightbulb.png')}
                />
                <Text style={styles.word}>Excellent place to take bath</Text>
            </View>
            <TouchableOpacity style={styles.guidance} onPress={TentProcess}>
                <Text style={styles.guidanceText}>Home Page </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    good: {
        width: 300,
        height: 77,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 64,
        lineHeight: 77,
        textAlign: 'center',
        top: '-15%',
        color: 'black',
    },
    image: {
        width: 168,
        height: 120,
    },
    greenBox: {
        width: '80%',
        height: '75%',
        backgroundColor: '#5FFF9F',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: '20%',
    },
    guidance: {
        width: '40%',
        height: 40,
        alignSelf: 'center',
        backgroundColor: '#5FFF9F',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 15,
        marginTop: 20,
    },
    guidanceText: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 15,
        lineHeight: 24,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.89)',
        top: '15%'
    },
    word: {
        top: '5%',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default TentGood;
