import { View, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import MapComponent from '../components/MapComponent'
import { checkForPermission } from '../services/PermissionService'
import PermissionAsk from '../components/PermissionAsk'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { setPermission } from '../redux/slices/permissionSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setId } from '../redux/slices/userIdSlice'
import Geocoder from 'react-native-geocoding';
import { getRequest } from '../services/ApiService'
import { routes } from '../routes/routes'
import { setActivities } from '../redux/slices/activitySlice'
import { setActivityLocations } from '../redux/slices/activityLocationSlice'

type Props = {}
Geocoder.init("AIzaSyDYC0H9ezO956jUEz7tu6XhEpTOwknL0iA");

const Home = (props: Props) => {
    const dispatch = useDispatch()
    const permitted = useSelector((state: RootState) => state.permission.whenInUse)
    useEffect(() => {
        (() => checkForPermission().then((res) => dispatch(setPermission(res))))();
        try {
            (async () => await AsyncStorage.multiGet(["token", "id"]))().then((res) => dispatch(setId(res[1][1])))

        } catch (e) {
            console.log(" could not be fetched!")
        }
        LoadActivityCredentials()
    }, [])

    const LoadActivityCredentials = async () => {
            let domain = routes.activityHost + routes.activityEndPoint
            getRequest(domain).then(async resp => {
            const activities = resp?.data;
            dispatch(setActivities(activities))
            Promise.all(activities.map(async (activity: any) => {
                try {
                    const json = await Geocoder.from(activity.address)
                    var location = json.results[0].geometry.location
                    return location
                } catch (error) {
                    console.warn(error)
                    return null
                }
              })).then((locations) => {
                const filteredLocations = locations.filter(location => location !== null);
                dispatch(setActivityLocations(filteredLocations));
              });
        })
    }
    
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