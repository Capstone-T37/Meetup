import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'
import React from 'react'
import Home from '../screens/Home';
import CounterScreen from '../screens/CounterScreen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import ProfileScreen from '../screens/ProfileScreen';

type Props = {}

const BottomNavBar = (props: Props) => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer >
            <Tab.Navigator >
                <Tab.Screen name="Home" component={ProfileScreen} options={{tabBarIcon:()=>(<AntDesign name='home'/>)}}/>
                <Tab.Screen name="Counter" component={CounterScreen} options={{tabBarIcon:()=>(<AntDesign name='clockcircleo'/>)}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomNavBar