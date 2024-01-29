import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import FlightsScreen from '../screens/FlightsScreen/FlightsScreen';
import colors from '../theme/colors';
import { getTabBarIcon } from './TabBarIcons';
import { AppRoute } from './Navigation.type';
import PageNotFound from '../screens/PageNotFound/PageNotFound';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const customHeaderOptions = { headerShown: false }

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppRoute.Home} component={HomeScreen} options={customHeaderOptions}/>
      <Stack.Screen name={AppRoute.Flights} component={FlightsScreen} options={customHeaderOptions} />
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
        <Tab.Screen name={AppRoute.Home} component={AppStack} options={customHeaderOptions}/>
        <Tab.Screen name={AppRoute.Offers} component={PageNotFound} options={customHeaderOptions}/>
        <Tab.Screen name={AppRoute.Profile} component={PageNotFound} options={customHeaderOptions}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
