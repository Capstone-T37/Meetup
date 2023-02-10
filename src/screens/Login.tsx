import { Image, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { useForm } from "react-hook-form";
import { Text, View } from 'react-native';
import CInput from '../components/CInput';
import CButton from '../components/CButton';

import { Button, Dialog, Portal } from 'react-native-paper';
import { passwordRules, emailRules } from '../rules/login';
import { styles } from '../styles/login'
import { routes } from '../routes/routes';
import { postToBackend } from '../services/service';
import { asyncStore } from '../services/service';
import Popup from '../components/Popup';


export interface Props {
    navigation: any;
}

const Login : React.FC<Props> = (props: Props) => {

    const { handleSubmit, control } = useForm({
        defaultValues: {
          email: '',
          password: ''
        }
      });


      const signInWIthCredentials = async (data: any) => {
        const domain : string = `${routes.localhost}${routes.login}`
        data = {email: data.email, password: data.password}
        postToBackend(data, domain).then( async (res)=>{
            switch(res?.status) { 
                case 401: { 
                    return <Popup content="Login was unseccussfull"></Popup>
                } 
                case 200: { 
                    let val = await res.json()
                    await asyncStore(val.token)
                    props.navigation.push("Session")
                    break; 
                } 
                default: {  
                    break; 
                } 
             } 
        }).catch((e)=>console.log(e))
    }

    return (
        <KeyboardAvoidingView behavior="padding" >
            <View style = {styles.body}>
                
                <View style = {styles.container}>
                        <Image
                            style = {styles.stretch}
                            source={require('../assets/meetup.png')}
                        />
                        <Text style={styles.txt}> Meetup </Text>
                    </View>
                    <View style={{marginBottom: 60}}>
                        <Text style={styles.txt1}> Welcome back, </Text>
                        <Text style={styles.txt2}> Sign in to continue </Text>
                </View>

                <CInput
                    control = {control}
                    style={{marginBottom: 30}}
                    rules = {emailRules}
                    placeholder= "Please enter your email..."
                    label = "email"
                    name = "email"
                    secureTextEntry = {false}
                />

                <CInput
                    control = {control}
                    style={{marginBottom: 30}}
                    rules = {passwordRules}
                    placeholder= "Please enter your password..."
                    label = "password"
                    name = "password"
                    secureTextEntry = {true}
                />

                <CButton 
                    content="Sign In"
                    control={control}
                    style= {{borderRadius: 8, marginBottom: 180}}
                    name="button"
                    mode="contained" 
                    onPress={handleSubmit(signInWIthCredentials)}/>
                <View style={styles.bottomView}>
                    <Text style={styles.txt3}> Don't have an account? </Text>
                    <Button 
                        style={{borderRadius: 8, width: 110, padding: 0}}  
                        labelStyle={{fontSize: 12}} 
                        mode="outlined"
                        onPress={() => props.navigation.push("SignUp")}
                        >
                        Sign Up
                    </Button>
                </View>
                
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login