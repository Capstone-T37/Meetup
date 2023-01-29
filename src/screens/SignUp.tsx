
import { View, Text , Image, KeyboardAvoidingView} from 'react-native'
import React from 'react'
import { styles } from '../styles/signUp';
import { Button } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Controller, useForm } from 'react-hook-form';
import CInput from '../components/CInput';
import {emailRules, passwordRules, confirmPwdRules} from '../rules/signUp'
import { routes } from '../routes/routes';
export interface Props {
    navigation: any;
}

const SignUp: React.FC<Props> = (props: Props) => {
    const { handleSubmit, control } = useForm({
        defaultValues: {
          name: '',
          surname: '',
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          promocode: '',
          submitButton:''
        }
      });

    const onSubmit = async (data: any) => {
        const domain = `${routes.localhost}${routes.signup}`
        data = {'email': data.email, 'password': data.password}
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        try {
            await fetch(
                domain, requestOptions)
                .then(response => {
                    response.json()
                        .then(responseData => {
                            switch(response.status) { 
                                case 401: { 
                                    console.log('sign up unsucessfull :('); 
                                    break; 
                                } 
                                case 200: { 
                                    console.log('sign up sucess:'+ responseData.token); 
                                    break; 
                                } 
                                default: {  
                                    break; 
                                } 
                             } 
                        });
                })
        }
        catch (error) {
            console.error('Sign up Error:'+ error);
        }
        //props.navigation.push("Session")
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
                    <CInput
                        control = {control}
                        style={{marginBottom: 12}}
                        rules = {{required: 'your first name is required'}}
                        label="First name"
                        placeholder="Your name..."
                        name = "name"
                        secureTextEntry = {false}
                    />
                    <CInput
                        control = {control}
                        style={{marginBottom: 12}}
                        rules = {{required: 'your last name is required'}}
                        label="Last name"
                        placeholder="Your surname"
                        name = "surname"
                        secureTextEntry = {false}
                    />
                    <CInput
                        control = {control}
                        style={{marginBottom: 12}}
                        rules = {{required: 'your username is required'}}
                        label="username"
                        placeholder="Type your username..."
                        name = "username"
                        secureTextEntry = {false}
                    />
                    <CInput
                        control = {control}
                        style={{marginBottom: 12}}
                        rules = {emailRules}
                        label="email"
                        placeholder="you@example.com"
                        name = "email"
                        secureTextEntry = {false}
                    />
                    <CInput
                        control = {control}
                        style={{marginBottom: 12}}
                        rules = {passwordRules}
                        label="password"
                        placeholder="Min. 8 characters"
                        name = "password"
                        secureTextEntry = {true}
                    />
                    <CInput
                        control = {control}
                        style={{marginBottom: 12}}
                        rules = {confirmPwdRules}
                        label="confirm password"
                        placeholder="Min. 8 characters"
                        name = "confirmPassword"
                        secureTextEntry = {true}
                    />
                    <CInput
                        control = {control}
                        style={{marginBottom: 12}}
                        rules = {{required: false}}
                        label="promo code"
                        placeholder="Enter promo code"
                        name = "promocode"
                        secureTextEntry = {false}
                    />
                    <Controller
                        control = {control}
                        name = "submitButton"
                        render = {() => {
                            return <Button 
                                        style={{borderRadius: 70, marginBottom: 75, width: 70, height: 40, marginLeft: '75%'}}
                                        mode= "contained"
                                        onPress={handleSubmit(onSubmit)}>  
                                        <AntDesign name='arrowright' size={25}/>
                                    </Button>
                        }}
                    />
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
                
            </View>
        </KeyboardAvoidingView>
    )
}

export default SignUp
