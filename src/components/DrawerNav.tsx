import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ProfileScreen from '../screens/ProfileScreen'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Switch } from 'react-native-paper';
import LocationService from '../services/LocationService';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import SocketService from '../services/SocketService'
import { deleteRequest, getRequest, patchRequest, postRequest } from '../services/ApiService'
import { routes } from '../routes/routes'
import { LocationObject } from 'expo-location'
import { setLocations } from '../redux/slices/locationsSlice'
import * as Location from 'expo-location';


type Props = {
    navigation: any
}
const Drawer = createDrawerNavigator();

const DrawerContent = (props: Props) => {
    const dispatch = useDispatch()
    const startSharing = () => {

        getLocations().then((res) => dispatch(setLocations(res.data)))
            .catch((e) => console.log(e, "getting locations error"));
        (async () => Location.getCurrentPositionAsync({}).then((res) => {
            firstLocation(res).then((val) => console.log("location is updated first")).catch((e) => console.log(e, "first update error"))
        }))()
        LocationService.startWatching();
        LocationService.subscribe(handleLocationUpdate);
        SocketService.connect('http://localhost:8000');
        SocketService.on('location:read', handleNewMessage);
    }
    const stopSharing = () => {
        console.log("here");
        dispatch(setLocations([]))
        LocationService.unsubscribe(handleLocationUpdate);
        LocationService.stopWatching();
        removeLocation().then(() => {
            sendMessage("remove")
            SocketService.off('location:read');
            SocketService.disconnect();
        }).catch((e) => console.log(e, "remove location"))
    }
    const removeLocation = async () => {
        const id = await AsyncStorage.getItem("id")
        const url = `${routes.locationHost}${routes.location}/${id}`
        return deleteRequest(url)
    }

    const getLocations = async () => {
        const url = `${routes.locationHost}${routes.location}`
        return getRequest(url)

    }

    const handleLocationUpdate = (newLocation: LocationObject) => {
        sendMessage("newLocation")
        updateLocation(newLocation).then(() => console.log("location updated in database")).catch((e) => console.log("error updated location database", e))
        //updateLocation(newLocation).then(() => console.log("location updated")).catch((e) => console.log(e,"update location error"))
    };



    const handleNewMessage = (message: string) => {
        console.log('Received message:', message);
        getLocations().then((res) => {
            console.log(res.data, "locations fetched");

            dispatch(setLocations(res.data))
        })
    };

    const sendMessage = (update: string) => {
        SocketService.emit('location:read', update);
    };
    const firstLocation = async (newLocation: LocationObject) => {
        const id = await AsyncStorage.getItem("id")
        const url = `${routes.locationHost}${routes.location}`
        return postRequest(url, {
            user_id: id,
            location: {
                coordinates: [newLocation.coords.longitude, newLocation.coords.latitude]
            }
        })
    }


    const updateLocation = async (newLocation: LocationObject) => {
        const id = await AsyncStorage.getItem("id")
        const url = `${routes.locationHost}${routes.location}/${id}`
        return patchRequest(url, {
            user_id: id,
            location: {
                coordinates: [newLocation.coords.longitude, newLocation.coords.latitude]
            }
        })
    }

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => {

        if (isSwitchOn) {
            stopSharing()
            setIsSwitchOn(false)
        } else {
            startSharing()
            setIsSwitchOn(true)
        }


    };

    const logout = () => {
        AsyncStorage.multiRemove(["token", "id"]).then(() => {
            props.navigation.navigate('Login')
        }).catch((e) => {
            console.log(e, " failed to logout")
        })

    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.shareLocation}>
                <Text style={styles.shareLocationText}>Share Location</Text>
                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} thumbColor="beige" trackColor={{ true: 'green' }} />
            </View>
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
        justifyContent: 'space-between',
        padding: 20
    },
    titleContainer: {
        width: '100%',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 30
    },
    shareLocation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    shareLocationText: {
        color: 'white',
        fontSize: 22
    }
})