// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';

// const CampTentBuild = () => {
//     return (
//         <View style={styles.container}>
//             <Image
//                 style={styles.homePic}
//                 source={require('../assets/tentHome.png')}
//             />
//             <View style={styles.rectangle81}></View>
//             <Text style={styles.campingTentBuild}>Camping Tent Build</Text>
//             <View style={styles.rectangle48}></View>
//             <View style={styles.rectangle49}></View>
//             {/* ... (other elements) */}

//             {/* Soil Condition */}
//             <View style={styles.rectangle85}></View>
//             <Text style={styles.selectLocationText}>Select Location for Camping Tent Build</Text>
//             {/* ... (other rectangles) */}

//             {/* Process */}
//             <View style={styles.rectangle84}></View>
//             <Text style={styles.processText}>Process</Text>

//             {/* Input Rectangles */}
//             <View style={styles.rectangle93}></View>
//             {/* ... (other input rectangles) */}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         position: 'relative',
//         width: 430,
//         height: 932,
//         background: '#FFFFFF',
//     },
//     campingTentBuild: {
//         position: 'absolute',
//         width: 191,
//         height: 24,
//         left: 4,
//         top: 170,
//         fontStyle: 'normal',
//         fontWeight: '700',
//         fontSize: 20,
//         lineHeight: 24,
//         textAlign: 'center',
//         color: '#000000',
//     },
//     rectangle81: {
//         position: 'absolute',
//         width: 430,
//         height: 165,
//         left: 0,
//         top: 0,
//     },
//     rectangle48: {
//         position: 'absolute',
//         width: 430,
//         height: 56,
//         left: 0,
//         top: 876,
//         background: '#5FFF9F',
//     },
//     rectangle49: {
//         position: 'absolute',
//         width: 23,
//         height: 23,
//         left: 108,
//         top: 887,
//         background: 'url(48)',
//     },
//     // ... (styles for other elements)

//     // Soil Condition Rectangle
//     rectangle85: {
//         boxSizing: 'border-box',
//         position: 'absolute',
//         width: 373,
//         height: 39,
//         left: 26,
//         top: 270,
//         background: '#5FFF9F',
//         border: '1px solid #6B5E5E',
//     },
//     selectLocationText: {
//         position: 'absolute',
//         width: '90%',
//         height: 19,
//         top: 222,
//         fontStyle: 'normal',
//         fontWeight: '600',
//         fontSize: 16,
//         lineHeight: 19,
//         textAlign: 'center',
//         color: '#653030',
//     },
//     // ... (styles for other rectangles)

//     // Process Rectangle
//     rectangle84: {
//         boxSizing: 'border-box',
//         position: 'absolute',
//         width: 131,
//         height: 37,
//         left: 147,
//         top: 833,
//         background: '#5FFF9F',
//         border: '1px solid #000000',
//         borderRadius: 15,
//     },
//     processText: {
//         position: 'absolute',
//         width: 80,
//         height: 24,
//         left: 172,
//         top: 840,
//         fontStyle: 'normal',
//         fontWeight: '700',
//         fontSize: 20,
//         lineHeight: 24,
//         textAlign: 'center',
//         color: 'rgba(0, 0, 0, 0.89)',
//     },
//     // ... (styles for other elements)

//     // Input Rectangles
//     rectangle93: {
//         position: 'absolute',
//         width: 10,
//         height: 10,
//         left: 368,
//         top: 285,
//         background: 'url(Inputs (22))',
//     },

//     homePic: {
//         position: 'absolute',
//         width: '100%',
//         height: '15%',
//         left: 0,
//         top: '3%',
//     },
//     // ... (styles for other input rectangles)
// });

// export default CampTentBuild;

// import React from 'react';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CampTentBuild = () => {
    const [location, setLocation] = React.useState('');
    const [gender, setGender] = useState('');

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
            <Image
                style={styles.homePic}
                source={require('../assets/tentHome.png')}
            />
            <View style={styles.rectangle81}></View>
            <Text style={styles.campingTentBuild}>Camping Tent Build</Text>
            <View style={styles.rectangle48}></View>
            <View style={styles.rectangle49}></View>
            {/* ... (other elements) */}

            {/* Soil Condition */}
            <View style={styles.greenBox}>
                <Text style={styles.selectLocationText}>Select Location for Camping Tent Build</Text>
                <Text style={styles.question}>What is your gender?</Text>
                <Picker
                    selectedValue={gender}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                        setGender(itemValue)
                    }>
                    <Picker.Item label="Select Gender" value="" />
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Other" value="other" />
                </Picker>
                <Text style={styles.question}>What is your gender?</Text>
                <Picker
                    selectedValue={gender}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                        setGender(itemValue)
                    }>
                    <Picker.Item label="Select Gender" value="" />
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Other" value="other" />
                </Picker>
                <Text style={styles.question}>What is your gender?</Text>
                <Picker
                    selectedValue={gender}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                        setGender(itemValue)
                    }>
                    <Picker.Item label="Select Gender" value="" />
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Other" value="other" />
                </Picker>
                <Text style={styles.question}>What is your gender?</Text>
                <Picker
                    selectedValue={gender}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                        setGender(itemValue)
                    }>
                    <Picker.Item label="Select Gender" value="" />
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Other" value="other" />
                </Picker>
                <Text style={styles.question}>What is your gender?</Text>
                <Picker
                    selectedValue={gender}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                        setGender(itemValue)
                    }>
                    <Picker.Item label="Select Gender" value="" />
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Other" value="other" />
                </Picker>
                <Text style={styles.question}>What is your gender?</Text>
                <Picker
                    selectedValue={gender}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                        setGender(itemValue)
                    }>
                    <Picker.Item label="Select Gender" value="" />
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Other" value="other" />
                </Picker>
                <Text style={styles.question}>What is your gender?</Text>
                <Picker
                    selectedValue={gender}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                        setGender(itemValue)
                    }>
                    <Picker.Item label="Select Gender" value="" />
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Other" value="other" />
                </Picker>
                <Text style={styles.question}>What is your gender?</Text>
                <Picker
                    selectedValue={gender}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                        setGender(itemValue)
                    }>
                    <Picker.Item label="Select Gender" value="" />
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Other" value="other" />
                </Picker>
                <Text style={styles.question}>What is your gender?</Text>
                <Picker
                    selectedValue={gender}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                        setGender(itemValue)
                    }>
                    <Picker.Item label="Select Gender" value="" />
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Other" value="other" />
                </Picker>
            </View>
            {/* ... (other rectangles) */}

            {/* Process */}
            <View style={styles.rectangle84}></View>
            <Text style={styles.processText}>Process</Text>

            {/* Input Rectangles */}
            <View style={styles.rectangle93}></View>
            {/* ... (other input rectangles) */}
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    container: {
        position: 'relative',
        width: 430,
        height: 1450,
        backgroundColor: '#FFFFFF',
    },
    campingTentBuild: {
        position: 'absolute',
        width: 191,
        height: 24,
        left: '2.5%',
        top: '20%',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 24,
        textAlign: 'center',
        color: '#000000',
    },
    rectangle81: {
        position: 'absolute',
        width: 430,
        height: 165,
        left: 0,
        top: 0,
    },
    rectangle48: {
        position: 'absolute',
        width: 430,
        height: 56,
        left: 0,
        top: 876,
        backgroundColor: '#5FFF9F',
    },
    rectangle49: {
        position: 'absolute',
        width: 23,
        height: 23,
        left: 108,
        top: 887,
        backgroundColor: 'url(48)',
    },
    // ... (styles for other elements)

    // Green Box Style
    greenBox: {
        position: 'absolute',
        width: '85%',
        height: 'auto', // You can adjust the height as needed
        left: '2.5%',
        top: '25%',
        backgroundColor: '#5FFF9F',
        borderRadius: 10,
        padding: 10,
    },
    selectLocationText: {
        marginBottom: 10,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#653030',
    },
    dropdown: {
        height: '50%',
        width: '100%', 
        marginBottom: 10,
        backgroundColor: '#fafafa',
    },
    // ... (styles for other elements)

    // Process Rectangle
    rectangle84: {
        position: 'absolute',
        width: 131,
        height: 37,
        left: 147,
        top: 833,
        backgroundColor: '#5FFF9F',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 15,
    },
    processText: {
        position: 'absolute',
        width: 80,
        height: 24,
        left: 172,
        top: 840,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 24,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.89)',
    },
    // ... (styles for other elements)

    // Input Rectangles
    rectangle93: {
        position: 'absolute',
        width: 10,
        height: 10,
        left: 368,
        top: 285,
        backgroundColor: 'url(Inputs (22))',
    },

    homePic: {
        position: 'absolute',
        width: '100%',
        height: '15%',
        left: 0,
        top: '4%',
    },
    question: {
        fontSize: 18,
        marginBottom: 10,
    },
    dropdown: {
        height: 50,
        width: '100%',
        marginBottom: 20,
        backgroundColor: '#fafafa',
    },
    // ... (styles for other input rectangles)
});

export default CampTentBuild;
