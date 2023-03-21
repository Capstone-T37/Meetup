import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import BottomSheet from "@gorhom/bottom-sheet";
import Handle from './BottomSheetHandle';




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
                    padding: 20
                }}>
                <Text style={styles.textstyle}>Yoga </Text>
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
    }
    
})