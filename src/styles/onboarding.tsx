import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: 'rgb(39, 38, 39)',
      height: '100%',
    },
    stretch: {
        width: 50,
        height: 50,

      },
    txt: {
        fontSize: 30,
        paddingTop: 5,
        fontWeight: 'bold',
        color: 'white'
    },
    ct: {
        position: 'absolute',
        top: 70,
        left: 40,
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
    prvc: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
        paddingRight: 50,
        paddingLeft: 50,
        alignItems: 'center'
    }
  });