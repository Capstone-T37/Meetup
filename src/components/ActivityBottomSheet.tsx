import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import BottomSheet from "@gorhom/bottom-sheet";
import Handle from './BottomSheetHandle';
import { Button } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




const ActivityBottomSheet = (props: any) => {
    const [meet, setMeet] = useState(false)
    // variables
    const snapPoints = useMemo(() => ['25%', '80%'], []);
    return (
  
        <BottomSheet
            ref={props.bottomSheetRef}
            backgroundStyle = {{
                backgroundColor : 'rgb(39, 38, 39)'
            }}
            snapPoints={snapPoints}
            index={-1}
            // add bottom inset to elevate the sheet
            bottomInset={0}
            // set `detached` to true
            detached={false}
            
            handleComponent={Handle}
            enablePanDownToClose={true}
            style={styles.sheetContainer}
        >
            <View style={styles.container}>
                
                <View style = {{
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    marginBottom: 40,
                    padding: 20,
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <View style = {{borderColor: 'white'}}>
                <Text style={styles.textstyle}>Yoga </Text>
                </View>
                <TouchableOpacity  
                    onPress={() => {
                        props.bottomSheetRef.current.close()
                    }}
                    style={styles.button}>
                    <MaterialIcons name="close" size={24} color="#909B9B" />
                </TouchableOpacity>
                </View>
                <Text style={styles.desc}>Yoga is an ancient practice that originated in India over 5,000 years ago. The word "yoga" is derived from the Sanskrit word "yuj," which means to yoke or unite. It is a holistic approach to wellness that integrates the mind, body, and spirit. The practice of yoga involves a combination of physical postures, breathing exercises, and meditation techniques. </Text>
            </View>
            

        </BottomSheet>
        

    )
}

export default ActivityBottomSheet

const styles = StyleSheet.create({

    sheetContainer: {
        // add horizontal space
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        //borderColor: 'black',
        //borderWidth: 1
       


    },textstyle: {
        
        
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold',
        
      
        
    }, desc : {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    }, container: {
        height: '100%',
        width: '100%',
        padding: 30,
        paddingTop: 0
    },
    button: {
        backgroundColor: '#484E4E',
        width: 35,
        height: 35,
        alignItems: 'center',
        position: 'absolute',
        right: 5,
        top: 5,
        borderRadius: 20,
        paddingTop: '18%'

    }
    
})