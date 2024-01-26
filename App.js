// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { Image } from 'react-native';
// import LoginScreen from './screens/LoginScreen';
// import RegisterScreen from './screens/RegisterScreen';
// import HomeScreen from './screens/HomeScreen';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native'; 
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const App = () => {

//   const HomeTabNavigator = () => (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen}
//         options={() => ({
//           tabBarIcon: () => (
//             <Image
//               source={require("./assets/HomeBlack.png")}
//               style={{ width: 24, height: 24 }}
//             />
//           ),
//           headerShown: false,
//           headerLeft: null, // Remove the back button
//         })} />
//       {/* <Tab.Screen name="Report" component={MapScreen}
//         options={() => ({
//           tabBarIcon: () => (
//             <Image
//               source={require("./assets/VectorMap.png")}
//               style={{ width: 24, height: 24 }}
//             />
//           ),
//           headerShown: false,
//           headerLeft: null, // Remove the back button
//         })} />
//       <Tab.Screen name="Notification" component={NotificationScreen}
//         options={() => ({
//           tabBarIcon: () => (
//             <Image
//               source={require("./assets/VectorNotification.png")}
//               style={{ width: 24, height: 24 }}
//             />
//           ),
//           headerShown: false,
//           headerLeft: null, // Remove the back button
//         })} /> */}
//     </Tab.Navigator>
//   );

// return (
//   <NavigationContainer>

//     <Stack.Navigator>
//       <Stack.Screen name="Login" component={LoginScreen}
//         options={() => ({
//           headerShown: false,
//           headerLeft: null, // Remove the back button
//         })} />
//       <Stack.Screen name="Register" component={RegisterScreen}
//         options={() => ({
//           headerShown: false,
//           headerLeft: null, // Remove the back button
//         })} />
//       {/* <Stack.Screen name="Home" component={HomeScreen}
//         options={() => ({
//           headerShown: false,
//           headerLeft: null, // Remove the back button
//         })} /> */}

//       <Stack.Screen
//         name="Homes"
//         component={HomeTabNavigator}
//         options={() => ({
//           headerShown: false,
//           headerLeft: null, // Remove the back button
//         })}
//       />
//     </Stack.Navigator>
//   </NavigationContainer>
// );
// };

// export default App;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import CampTentBuild from './screens/CampTentBuild';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const HomeTabNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#5FFF9F', // Set the background color to green
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          tabBarIcon: () => (
            <Image
              source={require('./assets/HomeBlack.png')}
              style={{ width: 24, height: 24 }}
            />
          ),
          headerShown: false,
          headerLeft: null, // Remove the back button
        })}
      />
      {/* Add other Tab.Screen components here */}
    </Tab.Navigator>
  );


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={() => ({
            headerShown: false,
            headerLeft: null, // Remove the back button
          })}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={() => ({
            headerShown: false,
            headerLeft: null, // Remove the back button
          })}
        />

        <Stack.Screen
          name="Homes"
          component={HomeTabNavigator}
          options={() => ({
            headerShown: false,
            headerLeft: null, // Remove the back button
          })}
        />
        <Stack.Screen
          name="Tent"
          component={CampTentBuild}
          options={() => ({
            headerShown: false,
            headerLeft: null, // Remove the back button
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
