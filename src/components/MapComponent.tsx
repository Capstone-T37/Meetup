import { StyleSheet, Text, View,Platform} from 'react-native'
import React from 'react'
import MapView from "react-native-map-clustering";
import { Marker } from 'react-native-maps';


type Props = {}
const INITIAL_REGION = {
    latitude: 52.5,
    longitude: 19.2,
    latitudeDelta: 8.5,
    longitudeDelta: 8.5,
};


const MapComponent = (props: Props) => {
    return (
        <View style={{ height: '100%' }}>
            <MapView
            provider={Platform.OS=='android'? 'google':undefined}
                style={{ height:"100%",width:"100%" }}
                initialRegion={INITIAL_REGION}
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