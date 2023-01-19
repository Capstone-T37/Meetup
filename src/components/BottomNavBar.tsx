import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'
import React from 'react'
import Home from '../screens/Home';
import CounterScreen from '../screens/CounterScreen';

type Props = {}

const BottomNavBar = (props: Props) => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer >
            <Tab.Navigator screenOptions={{ tabBarIconStyle: { display: "none" } }}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Counter" component={CounterScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomNavBar