
import { View, Text , Image, KeyboardAvoidingView} from 'react-native'
import React from 'react'
import { styles } from '../styles/signUp';
import { Button, TextInput } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Controller, useForm } from 'react-hook-form';
import CInput from '../components/CInput';
import {emailRules, passwordRules, confirmPwdRules} from '../rules/signUp'
import { routes } from '../routes/routes';
import { postToBackend } from '../services/service';
import { asyncStore } from '../services/service';
import Popup from '../components/Popup';
export interface Props {
    navigation: any;
}

const SignUp: React.FC<Props> = (props: Props) => {
    const { handleSubmit, control } = useForm({
        defaultValues: {
          phonenum: ''
        }
      });

      const signUpWIthCredentials = async (data: any) => {
        const domain : string = `${routes.localhost}${routes.signup}`
        data = {email: data.email, password: data.password}
        postToBackend(data, domain).then( async (res)=>{
            switch(res?.status) { 
                case 401: { 
                    return <Popup content="Sign up was unseccussfull"></Popup>
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
                    <Button  
                        mode="text" 
                        style ={{height: 40, width: 40}} 
                        onPress={() => props.navigation.goBack()}>
                        <Ionicons name='chevron-back' size={25} />
                    </Button>
                        <Image
                            style = {styles.stretch}
                            source={require('../assets/meetup.png')}
                        />
                        <Text style={styles.txt}> Meetup </Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.txt1}> Phone number: </Text>
                    <View  style={{flexDirection: 'row', flexWrap: 'nowrap',width: '100%'}}>
                    <CInput
                        control = {control}
                        style={{}}
                        rules = {{required: 'your first name is required'}}
                        placeholder= "CA +1"
                        label = ""
                        editable = {false}
                        name = "CA"
                        secureTextEntry = {false}
                    />
                        
                        <CInput
                        control = {control}
                        style={{marginBottom:'20%'}}
                        editable = {true}
                        rules = {{required: 'your first name is required'}}
                        placeholder= "Please enter your phone number"
                        label = "phonenum"
                        name = "phonenum"
                        secureTextEntry = {false}
                    />
                    
                </View>
                    <Text style={styles.txt2}> We will send a text with a verification code. Message and data rates may apply. Learn what happens when your number changes. </Text>
                    <Controller
                        control = {control}
                        name = "submitButton"
                        render = {() => {
                            return <Button 
                                        style={{borderRadius: 70, marginBottom: 75, width: 70, height: 40, marginLeft: '75%'}}
                                        mode= "contained"
                                        onPress={handleSubmit(signUpWIthCredentials)}>  
                                        <AntDesign name='arrowright' size={25}/>
                                    </Button>
                        }}
                    />
                    </View>
                    <View style={styles.bottomView}>
                        <Text style={styles.txt3}> Already have an account? </Text>
                        <Button  
                            style={{borderRadius: 8, width: 110, padding: 0}}  
                            labelStyle={{fontSize: 12}} 
                            onPress = {()=> props.navigation.push("Login")}
                            mode="outlined">
                            Sign In
                        </Button>
                    </View>
                
                
            </View>
        </KeyboardAvoidingView>
    )
}

export default SignUp
