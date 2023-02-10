import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
        alignSelf: 'center'
    }
})