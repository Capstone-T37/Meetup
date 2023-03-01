
import { View, Text , Image} from 'react-native'

import React, { useRef } from 'react'

import { Button } from 'react-native-paper';
import Carousel from '../components/Carousel'
import { styles } from '../styles/onboarding';

export interface Props {
    navigation: any;
}

const Onboarding: React.FC<Props> = (props: Props) => {

    
    const onb = useRef<any>(null);

    const navg = () => {
        props.navigation.push('Session')
    }

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

                callback = {navg}

                items={[{
                title: 'Explore a variety of events and activities around your city',
                }, {
                title: 'Know where to hang out based on live traffic updates',
                }, {
                title: 'Find your bestfriend and the perfect event for a hangout',
                }, ]}
            />

            
            <View style = {styles.prvc}>
                <Text style={{color: 'white'}}>
                    By continuing you agree to Meetup's <Text style={{textDecorationLine: 'underline'}}>Terms of Service</Text> and <Text style={{textDecorationLine: 'underline'}}>Privacy Policy</Text>

                </Text>
            </View>
        </View>
    )
}

export default Onboarding
