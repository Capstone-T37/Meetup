import { StyleSheet, View, Platform } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import MapView from "react-native-map-clustering";
import { Marker } from 'react-native-maps';
import { ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useFocusEffect } from '@react-navigation/native';

type Props = {}
const MapComponent = (props: Props) => {

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
            (async () => Location.getCurrentPositionAsync({}).then((res) => {
                initialPosition.current = {
                    latitude: res.coords.latitude, longitude: res.coords.longitude, latitudeDelta: 0.122,
                    longitudeDelta: 0.121,
                }
                setLoading(false);

            }))()
        }, [])
    )


    if (loading) {
        return (
            <ActivityIndicator size="large" color="#0000ff" />
        );
    }
    return (
        <View style={{ height: '100%' }}>
            <MapView
                userInterfaceStyle='dark'
                provider={Platform.OS == 'android' ? 'google' : undefined}
                style={{ height: "100%", width: "100%" }}
                initialRegion={initialPosition.current}
                showsUserLocation={true}
            >
                {
                    locations.map((val, index) => (
                        val?.user_id !== id ? <Marker coordinate={{ latitude: val?.location?.coordinates[1], longitude: val?.location?.coordinates[0] }} key={index} /> : undefined
                    ))
                }
            </MapView>
        </View>
    )
}

export default MapComponent

const styles = StyleSheet.create({})