import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TentGood = () => {
    return (
        <View style={styles.container}>
            {/* Your JSX content here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    good: {
        position: 'absolute',
        width: 168,
        height: 77,
        left: 131,
        top: 188,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 64,
        lineHeight: 77,
        textAlign: 'center',
        color: '#70FE01',
    },
    // Define other styles similarly
});

export default TentGood;
