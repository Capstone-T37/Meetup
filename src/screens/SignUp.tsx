
import { View, Text , StyleSheet, Image, KeyboardAvoidingView} from 'react-native'
import React from 'react'
import { Checkbox, TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Controller, useForm } from 'react-hook-form';
import CInput from '../components/CInput';

const SignUp = (props: any) => {
    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
          email: '',
          password: ''
        }
      });
    const onSubmit = (data: any) => {
        console.log(data);
      }
      console.log('errors', errors);
    return (
        <KeyboardAvoidingView behavior="padding" >
            <View style = {styles.body}>
                <View style = {styles.container}>
                    <Button  mode="text" style ={{height: 40, width: 40}} >
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
                        style={{marginBottom: 23}}
                        rules = {{required: true}}
                        label="First name"
                        placeholder="Your name..."
                        name = "name"
                        secureTextEntry = {false}
                    />
                    <CInput
                        control = {control}
                        style={{marginBottom: 23}}
                        rules = {{required: true}}
                        label="Last name"
                        placeholder="Your surname"
                        name = "surname"
                        secureTextEntry = {false}
                    />
                    <CInput
                        control = {control}
                        style={{marginBottom: 23}}
                        rules = {{required: true}}
                        label="username"
                        placeholder="Type your username..."
                        name = "username"
                        secureTextEntry = {false}
                    />
                    <CInput
                        control = {control}
                        style={{marginBottom: 23}}
                        rules = {{required: true}}
                        label="email"
                        placeholder="you@example.com"
                        name = "email"
                        secureTextEntry = {false}
                    />
                    <CInput
                        control = {control}
                        style={{marginBottom: 23}}
                        rules = {{required: true}}
                        label="password"
                        placeholder="Min. 8 characters"
                        name = "password"
                        secureTextEntry = {true}
                    />
                    <CInput
                        control = {control}
                        style={{marginBottom: 23}}
                        rules = {{required: true}}
                        label="confirm password"
                        placeholder="Min. 8 characters"
                        name = "confirm-password"
                        secureTextEntry = {true}
                    />
                    <CInput
                        control = {control}
                        style={{marginBottom: 23}}
                        rules = {{required: true}}
                        label="promo code"
                        placeholder="Enter promo code"
                        name = "promocode"
                        secureTextEntry = {false}
                    />
                    <Controller
                        control = {control}
                        name = ""
                        render = {() => {
                            return <Button 
                                        style={{borderRadius: 70, marginBottom: 32, width: 70, height: 40, marginLeft: '75%' }}
                                        mode= "contained"
                                        onPress={handleSubmit(onSubmit)}>  
                                        <AntDesign name='arrowright' size={25}/>
                                    </Button>
                        }}
                    />
                    <View style={styles.bottomView}>
                        <Text style={styles.txt3}> Already have an account? </Text>
                        <Button  style={{borderRadius: 8, width: 110, padding: 0}}  labelStyle={{fontSize: 12}} mode="outlined">
                            Sign In
                        </Button>
                    </View>
                </View>
                
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    body: {
        marginTop: 60,
    }, 
    stretch: {
        width: 40,
        height: 40,       
      },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 15
    } ,
    txt: {
        fontSize: 25,
        paddingTop: 5,
        fontWeight: 'bold'
    },
    form: {
        marginLeft: 25,
        marginRight: 25,
    },
    bottomView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 15
    },
    txt3: {
        fontSize: 17,
        color: 'grey',
        paddingTop:10
    },

})
export default SignUp