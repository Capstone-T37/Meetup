import { View, Text } from 'react-native'
import React from 'react'
import MapComponent from '../components/MapComponent'
import Popup from '../components/Popup'
import AsyncStorage from '@react-native-async-storage/async-storage'

type Props = {}

const Home = async (props: Props) => {
    
    return (
        <View>
            <MapComponent />
        </View>
    )
}

export default Home