import { View, Text, StyleSheet, SafeAreaViewBase, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import MapComponent from '../components/MapComponent'
import Popup from '../components/Popup'
import { checkForPermission } from '../services/PermissionService'
import PermissionAsk from '../components/PermissionAsk'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { setPermission } from '../redux/slices/permissionSlice'
import { check, PERMISSIONS } from 'react-native-permissions'
import AsyncStorage from '@react-native-async-storage/async-storage';


type Props = {}

const Home = (rops: Props) => {
    const dispatch = useDispatch()
    const permitted = useSelector((state: RootState) => state.permission.whenInUse)
    useEffect(() => {
        (() => checkForPermission().then((res) => dispatch(setPermission(res))))();
        try {
            (async () => await AsyncStorage.multiGet(["token", "id"]))().then((res) => console.log(res))

        } catch (e) {
            console.log(" could not be fetched!")
        }
    }, [])
    return (
        <View style={styles.container}>
            {
                permitted ? <MapComponent /> : <PermissionAsk />
            }


        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    }
})