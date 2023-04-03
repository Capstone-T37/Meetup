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
import { postRequest } from '../services/ApiService';

type Props = {
    bottomSheetModalRef: React.RefObject<BottomSheetModal>
}
type Activity = {
    title: string,
    address: string,
    size: string,
    description: string,
    date: Date
}

const CreateActivityModal = (props: Props) => {

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
                    <CInput
                        control={control}
                        style={{ marginBottom: 30 }}
                        placeholder="Please enter a title..."
                        label="title"
                        name="title"
                        secureTextEntry={false}
                        rules={rules}
                    />
                    <CInput
                        control={control}
                        style={{ marginBottom: 30 }}
                        placeholder="Please enter an address..."
                        label="address"
                        name="address"
                        secureTextEntry={false}
                        rules={rules}

                    />
                    <CInput
                        control={control}
                        style={{ marginBottom: 30 }}
                        placeholder="Please enter a description..."
                        label="description"
                        name="description"
                        secureTextEntry={false}
                        rules={rules}

                    />
                    <CInput
                        control={control}
                        style={{ marginBottom: 30 }}
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
                            })}>
                            <Text style={styles.buttonText} >Submit</Text>
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
    },
    buttonContainer: {
        height: '40%',
        width: '100%',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    },
    button: {
        backgroundColor: 'black',
    }
});
