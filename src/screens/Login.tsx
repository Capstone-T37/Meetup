import { Image, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { useForm } from "react-hook-form";
import { Text, View, StyleSheet } from 'react-native';
import CInput from '../components/CInput';
import CButton from '../components/CButton';
import { Button } from 'react-native-paper';
import { Constants } from 'react-native-navigation';
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
                    rules = {{required: true}}
                    placeholder= "Please enter your email..."
                    label = "email"
                    name = "email"
                    secureTextEntry = {false}
                />
                {errors.email && <Text>This is required.</Text>}

                <CInput
                    control = {control}
                    style={{marginBottom: 30}}
                    rules = {{required: true}}
                    placeholder= "Please enter your password..."
                    label = "password"
                    name = "password"
                    secureTextEntry = {true}
                />
                {errors.password && <Text>This is required.</Text>}
                <CButton 
                    content="Sign In"
                    control={control}
                    style= {{borderRadius: 8, marginBottom: 210}}
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
        marginLeft: 20
    }
})

export default Login