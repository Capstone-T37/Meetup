import { StyleSheet } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const CustomMarker = (props: any) => {

    return (
        <>
            <Marker {...props} onPress={() => {
                props.bottomSheetRef.current?.expand()
            }}>
                <MaterialIcons name='location-history' size={90} />
            </Marker>

        </>
    )
}

export default CustomMarker

const styles = StyleSheet.create({})