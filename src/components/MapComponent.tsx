import { StyleSheet, Text, View, Platform } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MapView from "react-native-map-clustering";
import { Marker } from 'react-native-maps';
import { ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import LocationService from '../services/LocationService';
import { LocationObject } from 'expo-location';
import SocketService from '../services/SocketService';

type Props = {}
const MapComponent = (props: Props) => {
    const [loca, setLoca] = useState({ "coords": { "accuracy": 5, "altitude": 0, "altitudeAccuracy": -1, "heading": 309.73, "latitude": 0, "longitude": 0, "speed": 31.03 }, "timestamp": 1676415761710.242 }
    )
    const initialPosition = useRef({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => Location.getCurrentPositionAsync({}).then((res) => {
            initialPosition.current = {
                latitude: res.coords.latitude, longitude: res.coords.longitude, latitudeDelta: 0.122,
                longitudeDelta: 0.121,
            }
            setLoading(false);
        }))()

    }, [])

    useEffect(() => {
        LocationService.startWatching();
        LocationService.subscribe(handleLocationUpdate);
        return () => {
            LocationService.unsubscribe(handleLocationUpdate);
            LocationService.stopWatching();
        };
    }, []);

    const handleLocationUpdate = (newLocation: LocationObject) => {
        sendMessage(newLocation)
    };


    useEffect(() => {
        SocketService.connect('http://localhost:8000');
        SocketService.on('location:read', handleNewMessage);
        return () => {
            SocketService.off('location:read');
            SocketService.disconnect();
        };
    }, []);

    const handleNewMessage = (message: string) => {
        setLoca(JSON.parse(JSON.stringify(message)))        
        console.log('Received message:', message);
    };

    const sendMessage = (newLocation: LocationObject) => {
        SocketService.emit('location:read', newLocation);
    };


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
                <Marker coordinate={{ latitude:loca.coords.latitude, longitude: loca.coords.longitude }} />
            </MapView>
        </View>
    )
}

export default MapComponent

const styles = StyleSheet.create({})