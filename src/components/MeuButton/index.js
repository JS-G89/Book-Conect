import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { CORES } from "../../constants/cores";

const MeuButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={props.callback}
        >
            <Text style={styles.text}>{props.value}</Text>
        </TouchableOpacity>

    );

}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor:CORES.COR_PRIMARIA,
        padding: 13,
        width: 250,
        borderRadius: 10,
        marginTop:20,
        marginBottom: 25,
        borderWidth:3,
        // borderWidth:false,
        borderColor: '#080808',
        shadowRadius: 10,
        shadowColor: 'black',


    },
    text: {
        fontSize: 20,
        color: CORES.COR_FUNDO_CLARO,
        fontWeight: 700,

    }
})
export default MeuButton;

