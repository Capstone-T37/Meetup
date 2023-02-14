import { StyleSheet, Text, View, Platform } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MapView from "react-native-map-clustering";
import Region from "react-native-map-clustering";
import { Marker } from 'react-native-maps';
import { ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';

type Props = {}
const INITIAL_REGION = {
    latitude: 52.5,
    longitude: 19.2,
    latitudeDelta: 8.5,
    longitudeDelta: 8.5,
};


const MapComponent = (props: Props) => {
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
                <Marker coordinate={{ latitude: 52.4001, longitude: 18.70 }} />
                <Marker coordinate={{ latitude: 52.4002, longitude: 18.72 }} />
                <Marker coordinate={{ latitude: 52.6, longitude: 18.3 }} />
                <Marker coordinate={{ latitude: 51.6, longitude: 18.0 }} />
                <Marker coordinate={{ latitude: 53.1, longitude: 18.8 }} />
                <Marker coordinate={{ latitude: 52.9, longitude: 19.4 }} />
                <Marker coordinate={{ latitude: 52.2, longitude: 21 }} />
                <Marker coordinate={{ latitude: 52.4, longitude: 21 }} />
                <Marker coordinate={{ latitude: 51.8, longitude: 20 }} />
            </MapView>
        </View>
    )
}

export default MapComponent

const styles = StyleSheet.create({})