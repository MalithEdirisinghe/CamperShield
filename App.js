import { StatusBar } from 'expo-status-bar';
import { BackHandler, Button, StyleSheet, Text} from 'react-native';
import { Image } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import CampTentBuild from './screens/CampTentBuild';
import TentGood from './screens/TentGood';
import TentFair from './screens/TentFair';
import TentPoor from './screens/TentPoor';
import TentGuidance from './screens/TentGuidance';
import TentExcellent from './screens/TentExcellent';

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
          name="Good"
          component={TentGood}
          options={() => ({
            headerTitle: '',
          })}
        />

        <Stack.Screen
          name="Fair"
          component={TentFair}
          options={() => ({
            headerTitle: '',
          })}
        />
        <Stack.Screen
          name="Poor"
          component={TentPoor}
          options={() => ({
            headerTitle: '',
          })}
        />
        <Stack.Screen
          name="Excellent"
          component={TentExcellent}
          options={() => ({
            headerTitle: '',
          })}
        />

        <Stack.Screen
          name="Guidance"
          component={TentGuidance}
          options={() => ({
            headerTitle: '',
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
