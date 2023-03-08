import { Image, KeyboardAvoidingView } from 'react-native'
import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Text, View } from 'react-native';
import CInput from '../components/CInput';
import CButton from '../components/CButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button, Dialog, Portal } from 'react-native-paper';
import { passwordRules, emailRules } from '../rules/login';
import { styles } from '../styles/login'
import { routes } from '../routes/routes';

import { asyncStoreMulti, getRequest, postRequest } from '../services/ApiService';
import { asyncStore } from '../services/ApiService';

import Popup from '../components/Popup';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { setId } from '../redux/slices/userIdSlice';

export interface Props {
    navigation: any;
}

const Login: React.FC<Props> = (props: Props) => {
    const dispatch = useDispatch()

    const { handleSubmit, control } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    useEffect(() => {
        (async () => await AsyncStorage.multiGet(['token', 'id']))().then((res) => {
            if (res[0][1] && res[1][1]) {
                props.navigation.push('Session')
            }

        }).catch((e) => {
            console.log(e);

        })
    }, [])



    const signInWIthCredentials = async (data: any) => {
        const authDomain = `${routes.authHost}${routes.login}`
        const authData = { email: data.email, password: data.password }
        const userDomain = `${routes.userHost}${routes.user}/${data.email}`

        postRequest(authDomain, authData).then((authResponse) => {
            getRequest(userDomain).then((userResponse) => {
                asyncStoreMulti([["token", authResponse?.data?.token], ["id", userResponse?.data?._id]])
                dispatch(setId(userResponse?.data?._id))
            }

            )
        }).then(() => props.navigation.push("onboarding")).catch((e) => console.log(e))
    }

    return (
        <View style={styles.body}>
            <View style={styles.container}>
                <Image
                    style={styles.stretch}
                    source={require('../assets/meetup.png')}
                />
                <Text style={styles.txt}> Meetup </Text>
            </View>
            <View style={{ marginBottom: 60 }}>
                <Text style={styles.txt1}> Welcome back, </Text>
                <Text style={styles.txt2}> Sign in to continue </Text>
            </View>
            <CInput
                control={control}
                style={{ marginBottom: 30 }}
                rules={emailRules}
                placeholder="Please enter your email..."
                label="email"
                name="email"
                secureTextEntry={false}
            />
            <CInput
                control={control}
                style={{ marginBottom: 30 }}
                rules={passwordRules}
                placeholder="Please enter your password..."
                label="password"
                name="password"

                secureTextEntry={true}
            />
            <CButton
                content="Sign In"
                control={control}
                style={{ borderRadius: 8, marginBottom: 180 }}
                name="button"
                mode="contained"
                onPress={handleSubmit(signInWIthCredentials)} />
            <View style={styles.bottomView}>
                <Text style={[styles.txt3, { color: 'white' }]}> Don't have an account? </Text>
                <Button
                    style={{ borderRadius: 8, width: 110, padding: 0 }}
                    labelStyle={{ fontSize: 12 }}
                    mode="outlined"
                    onPress={() => props.navigation.push("SignUp")}
                >
                    Sign Up
                </Button>
            </View>
        </View>

    )
}

export default Login