
import { View, Text , StyleSheet, Image, KeyboardAvoidingView} from 'react-native'
import React from 'react'
import { Checkbox, TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Controller, useForm } from 'react-hook-form';
import CInput from '../components/CInput';

export interface Props {
    navigation: any;
}

const SignUp: React.FC<Props> = (props: Props) => {
    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
          name: '',
          surname: '',
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          promocode: ''
        }
      });

    const onSubmit = (data: any) => {
        console.log(data);
        props.navigation.push("Session")
      }

    const emailRules = {
        required: 'Your email is required',
        pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g , message: 'invalid email'}
    }

    const passwordRules = {
        required: 'Your password is required',
        minLength: {value: 8, message: 'password should contain at least 8 characters'},
        maxLength: {value: 20, message: 'password should contain at most 20 characters'}
    }

    const confirmPwdRules = {
        required: 'Your password is required',
        validate: (value: any, formValues: any) => value === formValues.password || 'passwords are not matching'
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
                        name = ""
                        render = {() => {
                            return <Button 
                                        style={{borderRadius: 70, marginBottom: 75, width: 70, height: 40, marginLeft: '75%' }}
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
        marginBottom: 12
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
        marginLeft: 12
    },
    txt3: {
        fontSize: 17,
        color: 'grey',
        paddingTop:10
    },

})
export default SignUp

function register(arg0: string): { onChange: any; onBlur: any; name: any; ref: any; } {
    throw new Error('Function not implemented.');
}
