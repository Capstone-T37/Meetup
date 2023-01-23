import { View, Text , StyleSheet, Image, KeyboardAvoidingView} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';


type Props = {}

const navigateToSignUp = async () => {
    
}

const MainPage = (props: Props) => {
    return (
        <KeyboardAvoidingView behavior="padding" >
            <View style = {styles.body}>
                <View style = {styles.container}>
                    <Image
                        style = {styles.stretch}
                        source={require('../icons/meetup.png')}
                    />
                    <Text style={styles.txt}> Meetup </Text>
                </View>
                <View style={{marginBottom: 60}}>
                    <Text style={styles.txt1}> Welcome back, </Text>
                    <Text style={styles.txt2}> Sign in to continue </Text>
                </View>
                <TextInput style={{marginBottom: 30}}
                    
                    label="email"
                    placeholder="Please enter your email..."
                />
                <TextInput style={{marginBottom: 45}}
                    
                    label="password"
                    placeholder="Please enter your password..."
                    secureTextEntry
                    
                />
                <Button  style={{borderRadius: 8, marginBottom: 210}} mode="contained" onPress={() => console.log('Pressed')}>
                    Sign in
                </Button>
                <View style={styles.bottomView}>
                    <Text style={styles.txt3}> Don't have an account? </Text>
                    <Button  onPress={navigateToSignUp} style={{borderRadius: 8, width: 110, padding: 0}}  labelStyle={{fontSize: 12}} mode="outlined">
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
export default MainPage