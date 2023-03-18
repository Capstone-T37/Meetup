import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import BottomSheet from "@gorhom/bottom-sheet";
import DetachedSheet from './DetachedSheet';



const CustomMarker = (props: any) => {

    return (
        <>
            <Marker {...props} onPress={() => {
                props.bottomSheetRef.current?.expand()
                console.log(props.bottomSheetRef);

            }}>
                <MaterialIcons name='location-history' size={90} />
            </Marker>

        </>
    )
}

export default CustomMarker

const styles = StyleSheet.create({})