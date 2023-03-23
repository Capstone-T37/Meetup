import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BottomSheet from "@gorhom/bottom-sheet";
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const DetachedSheet = (props: any) => {
    const [meet, setMeet] = useState(false)
    // variables
    const snapPoints = React.useMemo(() => ["25%"], []);
    return (

        <BottomSheet
            ref={props.bottomSheetRef}
            snapPoints={snapPoints}
            index={-1}
            // add bottom inset to elevate the sheet
            bottomInset={46}
            // set `detached` to true
            detached={true}

            enablePanDownToClose={true}
            style={styles.sheetContainer}
        >
            {meet ? <View style={{ justifyContent: 'center', alignItems: 'center',height:'100%' }}>
                <AntDesign name='checkcircleo' size={70} color='green' />
            </View> :


                <View style={styles.contentContainer}>
                    <Text style={styles.contentText} >Request to meet?</Text>
                    <TouchableOpacity style={styles.button} onPress={() => setMeet(true)}>

                        <Ionicons name='ios-send' size={70} color='purple' />

                    </TouchableOpacity>
                </View>
            }

        </BottomSheet>

    )
}

export default DetachedSheet

const styles = StyleSheet.create({

    sheetContainer: {
        // add horizontal space
        marginHorizontal: 24,
        paddingBottom: 10,


    },
    contentContainer: {
        flex: 1,
        alignItems: "center",

    },
    contentText: {
        fontSize: 30,

    }
    , button: {
        height: '100%',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 25
    }
})