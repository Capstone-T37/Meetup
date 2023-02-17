
import { View, Text , Image} from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import Carousel from '../components/Carousel'
import { styles } from '../styles/onboarding';

export interface Props {
    navigation: any;
}

const Onboarding: React.FC<Props> = (props: Props) => {
    return (
        <View style={styles.container}>
            <View style = {styles.ct}>
                        <Image
                            style = {styles.stretch}
                            source={require('../assets/meetup.png')}
                        />
                        <Text style={styles.txt}> Meetup </Text>
            </View>
            <Carousel
                items={[{
                title: 'Explore a variety of events and activities around your city',
                }, {
                title: 'Know where to hang out based on live traffic updates',
                }, {
                title: 'Find your bestfriend and the perfect event for a hangout',
                }, ]}
            />
            <Button 
                style={{borderRadius: 8, width: 350, marginBottom: 7}}
                mode="contained" 
                onPress={() => props.navigation.push("Session")}
                > Get started</Button>
            <View style = {styles.prvc}>
                <Text >
                    By continuing you agree to Meetup's <Text style={{color: '#FC6600'}}>Terms of Service</Text> and <Text style={{color: '#FC6600'}}>Privacy Policy</Text>
                </Text>
            </View>
        </View>
    )
}

export default Onboarding
