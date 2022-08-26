import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';

import ClassScreen from './src/screens/ClassScreen/ClassScreen';
import RaceScreen from './src/screens/RaceScreen/RaceScreen';
import DiceScreen from './src/screens/DiceScreen/DiceScreen';
import ClassDetailsScreen from './src/screens/ClassDetailsScreen/ClassDetailsScreen';
import colors from './src/assets/colors/colors';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      shifting={true}
      initialRouteName="ClassScreen"
      activeColor={colors.white}
      inactiveColor={colors.darkgray}
      barStyle={{
        backgroundColor: colors.darkgray,
        position: 'absolute',
        left: 10,
        right: 10,
        bottom: 5,
        height: 60,
        // borderRadius: 20, NOT WORKING
      }}>
      <Tab.Screen
        name="ClassScreen"
        component={ClassScreen}
        options={{
          tabBarColor: colors.darkred,
          headerShown: false,
          tabBarLabel: (
            <Text style={{fontSize: 12, fontFamily: 'Lato-Bold'}}>Classes</Text>
          ),
          tabBarIcon: ({color}) => (
            <Feather
              name="stop-circle"
              size={24}
              color={color}
              // style={{paddingTop: 5}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="RaceScreen"
        component={RaceScreen}
        options={{
          tabBarColor: colors.darkgreen,
          headerShown: false,
          tabBarLabel: (
            <Text style={{fontSize: 12, fontFamily: 'Lato-Bold'}}>Races</Text>
          ),
          tabBarIcon: ({color}) => (
            <Feather
              name="disc"
              size={24}
              color={color}
              // style={{paddingTop: 5}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="DiceScreen"
        component={DiceScreen}
        options={{
          tabBarColor: colors.purple,
          headerShown: false,
          tabBarLabel: (
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Lato-Bold',
              }}>
              Dice
            </Text>
          ),
          tabBarIcon: ({color}) => (
            <Feather
              name="codesandbox"
              size={24}
              color={color}
              // style={{paddingTop: 5}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ClassDetailsScreen"
          component={ClassDetailsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
