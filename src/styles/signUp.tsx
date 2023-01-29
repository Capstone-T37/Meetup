import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
        marginBottom: 12
    } ,
    txt: {
        fontSize: 25,
        paddingTop: 5,
        fontWeight: 'bold'
    },
    form: {
        alignSelf:'center'
    },
    bottomView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf:'center'
    },
    txt3: {
        fontSize: 17,
        color: 'grey',
        paddingTop:10
    },

})