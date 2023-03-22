import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Home from '../screens/Home';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SearchScreen from '../screens/SearchScreen';
import DrawerNav from './DrawerNav';


type Props = {}

const BottomNavBar = (props: Props) => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home" >
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarLabelStyle: { color: 'white' },
                    tabBarStyle: { backgroundColor: 'rgb(39, 38, 39)' },
                    tabBarIcon: () => (<MaterialCommunityIcons style={{ color: 'white' }} name='party-popper' size={23} />)
                }} />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabelStyle: { color: 'white' },
                    tabBarStyle: { backgroundColor: 'rgb(39, 38, 39)' },
                    tabBarIcon: () => (<AntDesign style={{ color: 'white' }} name='home' size={23} />)
                }} />

            <Tab.Screen
                name="Profile"
                component={DrawerNav}
                options={{
                    tabBarLabelStyle: { color: 'white' },
                    tabBarStyle: { backgroundColor: 'rgb(39, 38, 39)' },
                    tabBarIcon: () => (<MaterialCommunityIcons style={{ color: 'white' }} name='account-circle-outline' size={23} />)
                }} />
        </Tab.Navigator>
    )
}

export default BottomNavBar