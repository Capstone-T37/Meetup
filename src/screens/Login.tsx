import { Image, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { useForm } from "react-hook-form";
import { Text, View, StyleSheet } from 'react-native';
import CInput from '../components/CInput';
import CButton from '../components/CButton';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export interface Props {
    navigation: any;
}

const Login : React.FC<Props> = (props: Props) => {

    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
          email: '',
          password: ''
        }
      });

    const emailRules = {
        required: 'Your email is required',
        pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g , message: 'invalid email'}
    }

    const passwordRules = {
        required: 'Your password is required',
        minLength: {value: 8, message: 'password should contain at least 8 characters'},
        maxLength: {value: 20, message: 'password should contain at most 20 characters'}
    }

    const onSubmit = (data: any) => {
        console.log(data);
        props.navigation.push("Session")
      }
      console.log('errors', errors);

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

const styles = StyleSheet.create({
    body: {
        marginTop: 60,
        marginLeft: 25,
        marginRight: 25,
    },

    stretch: {
        width: 50,
        height: 50,

      },
    txt: {
        fontSize: 30,
        paddingTop: 5,
        fontWeight: 'bold'
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 100
    } ,
    txt1: {
        fontSize: 27,
        fontWeight: 'bold'
    }
    ,
    txt2: {
        fontSize: 27,
        fontWeight: 'bold',
        color: 'grey'
    }, 
    txt3: {
        fontSize: 17,
        color: 'grey',
        paddingTop:10
    },
    bottomView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center'
    }
})

export default Login