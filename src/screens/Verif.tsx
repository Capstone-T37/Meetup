import { View, Text , Image, KeyboardAvoidingView} from 'react-native'
import React from 'react'
import { styles } from '../styles/verification';
import { Button, TextInput } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Controller, useForm } from 'react-hook-form';
import CInput from '../components/CInput';
import { routes } from '../routes/routes';
import { postToBackend } from '../services/service';
import { asyncStore } from '../services/service';
import Popup from '../components/Popup';
export interface Props {
    navigation: any;
}

const Verif: React.FC<Props> = (props: Props) => {
    const { handleSubmit, control } = useForm({
        defaultValues: {
          code: ''
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
                    <Text style={styles.txt1}> Verify your number </Text>
                    <Text style={styles.txt4}> Enter the code we've sent by text to +158197816666. <Text style={{textDecorationLine: 'underline',}}>Change</Text> </Text>
                    <View  style={{flexDirection: 'row', flexWrap: 'nowrap',width: '100%'}}>
                        
                        <CInput
                        control = {control}
                        style={{marginBottom:'27%', width: 200}}
                        editable = {true}
                        rules = {{required: 'your first name is required'}}
                        placeholder= "Please enter the code"
                        label = "code"
                        name = "code"
                        secureTextEntry = {false}
                    />
                    
                    
                </View>
                <Text style={styles.txt4}> Didn't get a text? </Text>
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

export default Verif