import React from "react"
import { StyleSheet, Text, Image, View } from "react-native"
import Logo from "../../../img/logo.png"
import { CORES } from "../../constants/cores";

export const App = () => {
    return (
        <Image source={Logo} style={{ width: 330, height: 200 }} />
    );
};

export default function Sobre() {

    return (
        <View style={styles.info}>
            <Image source={Logo} style={{ width: 330, height: 200, marginBottom: 40, marginLeft: 20, }} />
            <Text style={styles.texto} >Copyright © 2024 by CIA do Livro.</Text>
        </View>

    )
};
const styles = StyleSheet.create({
    info: {
        backgroundColor: CORES.COR_FUNDO_CLARO,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    texto: {
        color: 'black',
        fontSize:20,
        fontWeight:600,

    }
});