import { View, Text } from 'react-native'
import React from 'react'
import MapComponent from '../components/MapComponent'

type Props = {}

const Home = (props: Props) => {
    return (
        <View>
            <MapComponent />
        </View>
    )
}

export default Home