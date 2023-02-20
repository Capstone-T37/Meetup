import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    body: {
        paddingTop: 60,
        backgroundColor: 'rgb(39, 38, 39)',
        height: '100%',
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
        fontWeight: 'bold',
        color: 'white'
    },
    form: {
        alignSelf:'center'
    },
    bottomView: {

        // position: 'absolute',
        // bottom: -50,

        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf:'center'
    },
    txt3: {
        fontSize: 17,
        paddingTop:10,
        color: 'white'
    },

})