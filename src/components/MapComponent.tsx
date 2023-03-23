import { View, Platform, Image } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import MapView from "react-native-map-clustering";
import { Marker } from 'react-native-maps';
import { ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useFocusEffect } from '@react-navigation/native';
import CustomMarker from './CustomMarker';
import BottomSheet from "@gorhom/bottom-sheet";
import DetachedSheet from './DetachedSheet';
import ActivityBottomSheet from './ActivityBottomSheet';


type Props = {}
const MapComponent = (props: Props) => {

    const locations = useSelector((state: RootState) => state.locations.locations)
    const activityLocations = useSelector((state: RootState) => state.activityLocations.locations)
    const id = useSelector((state: RootState) => state.id.id)


    const initialPosition = useRef({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
    });

    const [loading, setLoading] = useState(true);

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const activitiesStore: Array<any> = useSelector((state: RootState) => state.activities.activities)

    const bottomSheetRef = React.useRef<BottomSheet>(null);
    const activityBottomSheet = React.useRef<BottomSheet>(null);

    useFocusEffect(
        useCallback(() => {
            (async () => Location.getCurrentPositionAsync({}).then((res) => {
                initialPosition.current = {
                    latitude: 45.424721, longitude: -75.6972, latitudeDelta: 0.122,
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
                        val?.user_id !== id ? <CustomMarker coordinate={{ latitude: val?.location?.coordinates[1], longitude: val?.location?.coordinates[0] }} key={index} bottomSheetRef={bottomSheetRef} /> : undefined
                    ))
                }
                {
                    activityLocations.map((activity, index) => (
                        <Marker 
                            coordinate={{ latitude: activity.loc.lat, longitude: activity.loc.lng }} 
                            key={index} 
                            pinColor="green" 
                            onPress={() => {
                                let store_activity = activitiesStore.find(a => a._id === activity.id);
                                setTitle(store_activity.title)
                                setDescription(store_activity.description)
                                activityBottomSheet.current?.expand()
                            }}
                            > 
                            <Image  style ={{
                                    width: 23,
                                    height: 23,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 12,
                                    },
                                    shadowOpacity: 0.58,
                                    shadowRadius: 16.00,
                                    
                                    
                                    
                            }} source={require('../assets/star.png')} />
                        </Marker>
                    ))
                }
            </MapView>
            <DetachedSheet bottomSheetRef={bottomSheetRef} />
            <ActivityBottomSheet 
                title = {title}
                description = {description}
                bottomSheetRef={activityBottomSheet} 
                />

        </View>
    )
}

export default MapComponent