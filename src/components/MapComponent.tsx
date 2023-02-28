import { StyleSheet, Text, View, Platform } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import MapView from "react-native-map-clustering";
import { Marker } from 'react-native-maps';
import { ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import LocationService from '../services/LocationService';
import { LocationObject } from 'expo-location';
import SocketService from '../services/SocketService';
import { deleteRequest, getRequest, patchRequest, postRequest } from '../services/ApiService';
import { routes } from '../routes/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { setLocations } from '../redux/slices/locationsSlice';
import { useFocusEffect } from '@react-navigation/native';

type Props = {}
const MapComponent = (props: Props) => {
    const dispatch = useDispatch()
    const [loca, setLoca] = useState({ "coords": { "accuracy": 5, "altitude": 0, "altitudeAccuracy": -1, "heading": 309.73, "latitude": 0, "longitude": 0, "speed": 31.03 }, "timestamp": 1676415761710.242 })
    const locations = useSelector((state: RootState) => state.locations.locations)
    const id = useSelector((state: RootState) => state.id.id)


    const initialPosition = useRef({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
    });

    const [loading, setLoading] = useState(true);


    useFocusEffect(
        useCallback(() => {
            getLocations().then((res) => dispatch(setLocations(res.data)))
                .then(() =>
                    (async () => Location.getCurrentPositionAsync({}).then((res) => {
                        initialPosition.current = {
                            latitude: res.coords.latitude, longitude: res.coords.longitude, latitudeDelta: 0.122,
                            longitudeDelta: 0.121,
                        }
                        setLoading(false);
                        firstLocation(res).then((val) => console.log("location is updated first")).catch((e) => console.log(e, "first update error"))
                    }))()

                ).catch((e) => console.log(e, "getting locations error"));

            LocationService.startWatching();
            LocationService.subscribe(handleLocationUpdate);
            SocketService.connect('http://localhost:8000');
            SocketService.on('location:read', handleNewMessage);
            getLocations().then((res) => dispatch(setLocations(res.data)))
            return () => {
                LocationService.unsubscribe(handleLocationUpdate);
                LocationService.stopWatching();
                removeLocation().then(() => {
                    sendMessage("remove")
                    SocketService.off('location:read');
                    SocketService.disconnect();
                }).catch((e) => console.log(e, "remove location"))

            };
        }, [])
    )


    //console.log(locations);



    const handleLocationUpdate = (newLocation: LocationObject) => {
        sendMessage("newLocation")
        updateLocation(newLocation).then(() => console.log("location updated in database")).catch((e) => console.log("error updated location database", e))
        //updateLocation(newLocation).then(() => console.log("location updated")).catch((e) => console.log(e,"update location error"))
    };



    const handleNewMessage = (message: string) => {
        console.log('Received message:', message);
        getLocations().then((res) => {
            console.log(res.data);

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

    const getLocations = async () => {
        const url = `${routes.locationHost}${routes.location}`
        return getRequest(url)

    }
    const removeLocation = async () => {
        const id = await AsyncStorage.getItem("id")
        const url = `${routes.locationHost}${routes.location}/${id}`
        return deleteRequest(url)
    }


    if (loading) {
        return (
            <ActivityIndicator size="large" color="#0000ff" />
        );
    }
    return (
        <View style={{ height: '100%' }}>
            <MapView
                provider={Platform.OS == 'android' ? 'google' : undefined}
                style={{ height: "100%", width: "100%" }}
                initialRegion={initialPosition.current}
                showsUserLocation={true}
            >
                {
                    locations.map((val, index) => (
                        val?.user_id !== id ? <Marker coordinate={{ latitude: val?.location?.coordinates[1], longitude: val?.location?.coordinates[0] }} key={index} /> : null
                    ))
                }
            </MapView>
        </View>
    )
}

export default MapComponent

const styles = StyleSheet.create({})