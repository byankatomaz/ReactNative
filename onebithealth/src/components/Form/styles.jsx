import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    content:{
        justifyContent: 'center',
        position: 'relative',
        marginTop: 100
    }, 

    input: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#fff',
        color: '#fff',
        position: 'relative',
        borderRadius: 10,
    },

    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    buttonCalculator: {

        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: "#531616",
        paddingTop: 14,
        paddingBottom: 14,
        marginTop: 30,
        marginBottom: 50,

    },  

    button: {
        fontSize: 18,
        color: "#fffdfd",
    },

    errorMessage: {
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold',
    paddingLeft: 20,
    },

    exibitionResultImc: {
        width: '100%',
        height: '65%',

    },

    textList: {
        
        fontSize: 18,
        color: '#fff'

    },

    resultItem: {
        fontSize: 26,
        color: '#c99999',
        width: '100%',
        height: 50,
        paddingHorizontal: 30,


    }

  });
  
  export default styles