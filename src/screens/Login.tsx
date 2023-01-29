import { Image, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { useForm } from "react-hook-form";
import { Text, View, StyleSheet } from 'react-native';
import CInput from '../components/CInput';
import CButton from '../components/CButton';
import { Button } from 'react-native-paper';
import { passwordRules, emailRules } from '../rules/login';
import { styles } from '../styles/login'
import { routes } from '../routes/routes';
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

    const onSubmit = async (data: any) => {
        const domain = `${routes.localhost}${routes.login}`
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
                    console.log(response.status)
                    response.json()
                        .then(responseData => {
                            switch(response.status) { 
                                case 401: { 
                                    console.log('login unsucessfull :('); 
                                    break; 
                                } 
                                case 200: { 
                                    console.log('login sucess:'+ responseData.token); 
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
            console.error('loginError:'+ error);
        }
        //props.navigation.push("Session")
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
                    onPress={handleSubmit(onSubmit)}/>
                    
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