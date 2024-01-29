// Navigation.tsx
import React from 'react';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import FlightsScreen from '../screens/FlightsScreen/FlightsScreen';
import colors from '../theme/colors';
import { getTabBarIcon } from './TabBarIcons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const customHeaderOptions = { headerShown: false }

const Header = {
    headerStyle: {
      backgroundColor: colors.orangeOne, 
    },
    headerTintColor: colors.white, 
    headerTitleStyle: {
        fontSize: 20,
        fontFamily: 'RobotoSlab-Regular', 
      }
  }

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={customHeaderOptions}/>
      <Stack.Screen name="Flights" component={FlightsScreen} options={customHeaderOptions} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => getTabBarIcon(route.name, focused),
          tabBarStyle: { backgroundColor: colors.orangeOne },
          tabBarActiveTintColor: colors.white
        })} >
        <Tab.Screen name="Home" component={AppStack} options={customHeaderOptions}/>
        <Tab.Screen name="Flights" component={FlightsScreen} options={customHeaderOptions}/>
        <Tab.Screen name="Offers" component={HomeScreen} options={customHeaderOptions}/>
        <Tab.Screen name="Profile" component={FlightsScreen} options={customHeaderOptions}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
