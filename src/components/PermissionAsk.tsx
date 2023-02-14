import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import { Button } from 'react-native-paper';
import { goToSettings } from '../services/PermissionService';
type Props = {}

const PermissionAsk = (props: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Set Location to 'When In Use'</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>MeetUp only works correctly if it can access your location.</Text>
            </View>

            <View style={styles.instructionsContainer}>
                <View style={styles.instruction}>
                    <View style={styles.instructionText}>
                        <Text style={styles.description}>1. In Settings, select</Text><Text style={styles.important}> Location</Text>
                    </View>
                    <View style={styles.setting}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ backgroundColor: "#007aff", alignSelf: 'baseline', padding: 5, borderRadius: 4 }}>
                                <FontAwesome5 name="location-arrow" size={10} color="white" />
                            </View>
                            <Text> Location</Text>
                        </View>
                        <SimpleLineIcons name='arrow-right' color="grey" size={10} />
                    </View>
                </View>
                <View style={styles.instruction}>
                    <View style={styles.instructionText}>
                        <Text style={styles.description}>2. Then tap on</Text><Text style={styles.important}> When in use</Text>
                    </View>
                    <View style={styles.setting}>
                        <Text>When in use</Text>
                        <Feather name='check' color='green' size={15} />

                    </View>
                </View>
            </View>
            <View style={styles.button}>
                <Button mode='contained' buttonColor='purple' onPress={goToSettings}>Go to Settings</Button>
            </View>
        </View>
    )
}

export default PermissionAsk

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    titleContainer: {
        alignItems: 'center',
        margin: 30
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'

    },
    descriptionContainer: {


    },
    description: {
        textAlign: 'center',
        fontSize: 15,
    },
    instructionsContainer: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '30%'
    },
    instructionText: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
    },
    instruction: {
        justifyContent: 'space-around',
        width: '100%',
        padding: "10%",
    },
    setting: {
        padding: 10,
        borderColor: 'purple',
        borderWidth: 2,
        flexDirection: 'row',
        borderRadius: 3,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    important: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    button: { position: 'absolute', bottom: 0, justifyContent: 'center', width: '100%',paddingLeft:20,paddingRight:20 }

})