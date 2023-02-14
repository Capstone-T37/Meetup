import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    body: {
        marginTop: 60,
        
    }, 
    txt1: {
        fontSize: 27,
        marginBottom:17,
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
        marginLeft: '10%',
        marginRight: '10%',
        
        
        
    },
    bottomView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf:'center',
        alignItems:'flex-start',
         marginTop: '50%',
        
        
    },
    txt3: {
        fontSize: 17,
        color: 'grey',
        paddingTop:10
    },
    txt4: {
        marginBottom: 30
    }

})