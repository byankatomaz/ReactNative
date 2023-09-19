import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        position: 'relative',
    },

    boxText:{
        width: '100%',
        alignItems: 'center',
        marginTop: 30
    },

    shareText:{
        color: '#fff',
        fontWeight: 'bold',
        paddingHorizontal: 30
    },

    buttonShare:{
        backgroundColor: "#531616",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        paddingBottom: 10,
        paddingTop: 10
    },

    resultTextIMC: {
        color: '#c99999',
        fontSize: 70,
        fontWeight: "bold",
        textAlign: "center",
        position: 'relative',
        padding: 40
    }
});

export default styles;