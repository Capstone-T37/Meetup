import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    body: {
        marginTop: 60,
        
    }, 
    txt1: {
        fontSize: 27,
        fontWeight: 'bold'
    },
    txt2: {
        fontSize: 13,
        color: 'grey',
        marginBottom: 40
    },
    stretch: {
        width: 40,
        height: 40,       
      },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: '15%'
    } ,
    txt: {
        fontSize: 25,
        paddingTop: 5,
        fontWeight: 'bold'
    },
    form: {
        alignSelf:'center',
        marginLeft: '15%',
        marginRight: '15%'
    },
    bottomView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf:'center',
        position: 'absolute', //Here is the trick
        bottom: 0, 
        
        
    },
    txt3: {
        fontSize: 17,
        color: 'grey',
        paddingTop:10
    },

})