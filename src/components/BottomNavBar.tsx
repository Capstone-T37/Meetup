import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'
import React from 'react'
import Home from '../screens/Home';
import CounterScreen from '../screens/CounterScreen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ProfileScreen from '../screens/ProfileScreen';

type Props = {}

const BottomNavBar = (props: Props) => {
    const Tab = createBottomTabNavigator();

    return (
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: () => (<AntDesign name='home' size={23} />) }}  />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: () => (<MaterialCommunityIcons name='account-circle-outline' size={23} />) }} />
                <Tab.Screen name="Counter" component={CounterScreen} options={{ tabBarIcon: () => (<AntDesign name='clockcircleo' size={23} />) }}  />
            </Tab.Navigator>
    )
}

export default BottomNavBar