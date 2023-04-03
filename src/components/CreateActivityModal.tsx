import React, { useCallback, useMemo, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import DatePicker from 'react-native-date-picker'
import { Text, TextInput, Button } from 'react-native-paper';
import { useForm } from "react-hook-form";
import CInput from '../components/CInput';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { routes } from '../routes/routes';
import { getRequest, postRequest } from '../services/ApiService';
import SocketService from '../services/SocketService';
import { useDispatch } from 'react-redux';
import { setActivities } from '../redux/slices/activitySlice';
import { setActivityLocations } from '../redux/slices/activityLocationSlice';
import Geocoder from 'react-native-geocoding';
type Props = {
    bottomSheetModalRef: React.RefObject<BottomSheetModal>
}
Geocoder.init("AIzaSyDYC0H9ezO956jUEz7tu6XhEpTOwknL0iA");
type Activity = {
    title: string,
    address: string,
    size: string,
    description: string,
    date: Date
}

const CreateActivityModal = (props: Props) => {
    const dispatch = useDispatch()
    const [date, setDate] = React.useState(new Date())
    const [open, setOpen] = React.useState(false)
    // variables
    const snapPoints = useMemo(() => ['90%'], []);
    const rules = {
        required: 'Field is required'
    }
    // callbacks

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const { handleSubmit, control } = useForm({
        defaultValues: {
            title: '',
            address: '',
            size: "",
            description: "",
        }
    });



    const submitActivity = async (newActivity: Activity) => {
        const id = await AsyncStorage.getItem("id")
        const url = `${routes.activityHost}${routes.activityEndPoint}`
        return postRequest(url, {
            created_by: id,
            title:newActivity.title,
            date:newActivity.date,
            address:newActivity.address,
            participants:[],
            size:newActivity.size,
            description:newActivity.description
        }).then(()=>{
            LoadActivityCredentials()
        })
    }
    const LoadActivityCredentials = async () => {
        let domain = routes.activityHost + routes.activityEndPoint
        getRequest(domain).then(async resp => {
        const activities = resp?.data;
        dispatch(setActivities(activities))
        Promise.all(activities.map(async (activity: any) => {
            try {
                const json = await Geocoder.from(activity.address)
                var location = json.results[0].geometry.location
                return {loc: location, id: activity._id}
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
    // renders
    return (
        <BottomSheetModalProvider>
            <BottomSheetModal
                ref={props.bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                backgroundStyle={{ backgroundColor: 'rgb(39, 38, 39)' }}
            >
                <View style={styles.contentContainer}>
                    <Text style={styles.textstyle}> Activity </Text>
                    <CInput
                        control={control}
                        style={{ marginBottom: 20 }}
                        placeholder="Please enter a title..."
                        label="title"
                        name="title"
                        secureTextEntry={false}
                        rules={rules}
                    />
                    <CInput
                        control={control}
                        style={{ marginBottom: 20 }}
                        placeholder="Please enter an address..."
                        label="address"
                        name="address"
                        secureTextEntry={false}
                        rules={rules}

                    />
                    <CInput
                        control={control}
                        style={{ marginBottom: 20 }}
                        placeholder="Please enter a description..."
                        label="description"
                        name="description"
                        secureTextEntry={false}
                        rules={rules}

                    />
                    <CInput
                        control={control}
                        style={{ marginBottom: 20 }}
                        placeholder="Please enter number of participants..."
                        label="size"
                        name="size"
                        keyboardType="numeric"
                        secureTextEntry={false}
                        rules={rules}

                    />
                    <Button onPress={() => setOpen(true)} >
                        {date.toLocaleString()}
                    </Button>
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}

                    />
                    <View style={styles.buttonContainer}>
                        <Button style={styles.button} onPress={handleSubmit((data)=>{
                            submitActivity({...data,date:date})
                            props.bottomSheetModalRef.current?.close()
                            control._reset()
                            })}>
                            <Text style={styles.buttonText} >Add</Text>
                        </Button>
                    </View>
                </View>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    )
}

export default CreateActivityModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: 'grey',
        
    },
    contentContainer: {
        height: "100%",
        width: '100%',
        padding: 20,
    },
    buttonContainer: {
        height: '40%',
        width: '100%',
       marginTop: '15%'
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 10
    },textstyle: {
        
        
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: '7%'
        
      
        
    }
});
