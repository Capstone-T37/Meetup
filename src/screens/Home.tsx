import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import MapComponent from '../components/MapComponent'
import Popup from '../components/Popup'
import AsyncStorage from '@react-native-async-storage/async-storage'

type Props = {}

const Home =  (rops: Props) => {
    useEffect(  () => {
        (async()=> console.log(await AsyncStorage.getItem('mytoken')))()
     }, [])
    return (
        <View>
            <MapComponent />
        </View>
    )
}

export default Home