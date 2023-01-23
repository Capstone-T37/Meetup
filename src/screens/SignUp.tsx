
import { View, Text , StyleSheet, Image, KeyboardAvoidingView} from 'react-native'
import React from 'react'
import { Checkbox, TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

type Props = {}


const SignUp = (props: Props) => {
    const [checked, setChecked] = React.useState(false);
    return (
        <KeyboardAvoidingView behavior="padding" >
            <View style = {styles.body}>
                <View style = {styles.container}>
                    <Button  mode="text" style ={{height: 50, width: 50}} >
                    <Ionicons name='chevron-back' size={30} />
                    </Button>
                        <Image
                            style = {styles.stretch}
                            source={require('../assets/meetup.png')}
                        />
                        <Text style={styles.txt}> Meetup </Text>
                </View>
                <View style={styles.form}>
                    <TextInput style={{marginBottom: 23}}
                        label="First name"
                        placeholder="Your name..."
                    />
                    <TextInput style={{marginBottom: 23}}
                        label="Last name"
                        placeholder="Your surname"
                    />
                    <TextInput style={{marginBottom: 23}}
                        label="username"
                        placeholder="Type your username..."
                    />
                    <TextInput style={{marginBottom: 23}}
                        label="email"
                        placeholder="you@example.com"
                    />
                    <TextInput style={{marginBottom: 23}}
                        label="password"
                        placeholder="Min. 8 characters"
                    />
                    <TextInput style={{marginBottom: 23}}
                        label="confirm password"
                        placeholder="Min. 8 characters"
                    />
                    <TextInput style={{marginBottom: 13}}
                        label="promo code"
                        placeholder="Enter promo code"
                    />
                    <Button  style={{borderRadius: 70, marginBottom: 32, width: 80, height: 60, marginLeft: '75%' }} mode="contained" >
                    <AntDesign name='arrowright'/>
                    </Button>
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