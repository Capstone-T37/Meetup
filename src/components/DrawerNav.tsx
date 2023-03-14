import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ProfileScreen from '../screens/ProfileScreen'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/core'

type Props = {
    navigation: any
}
const Drawer = createDrawerNavigator();

const DrawerContent = (props: Props) => {
    const logout = () => {
        AsyncStorage.multiRemove(["token", "id"]).then(() => {
            props.navigation.navigate('Login')
        }).catch((e) => {
            console.log(e, " failed to logout")
        })

    }
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={logout}>
                <Button mode="contained" textColor="black" >
                    <Text> Logout</Text>
                </Button>

            </TouchableOpacity>
        </SafeAreaView>
    )
}

const DrawerNav = (props: Props) => {
    return (
        <Drawer.Navigator initialRouteName="ProfilePage" screenOptions={{ headerShown: false }} drawerContent={DrawerContent}>
            <Drawer.Screen name="ProfilePage" component={ProfileScreen} />
        </Drawer.Navigator>
    )
}


export default DrawerNav

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgb(39, 38, 39)',
        justifyContent: 'flex-end'
    },
    titleContainer: {
        width: '100%',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 30
    },
})