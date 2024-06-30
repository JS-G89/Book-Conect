import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CORES } from "../../constants/cores";
import ButtonCadastrar from "../../components/ButtonCadastrar";

function Avaliações({ navigation }) {
    const cadastrar = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.telaFundo}>
            <MaterialCommunityIcons
                name="star-off-outline"
                size={200}
                color={CORES.COR_PRIMARIA}
                width={800} 
            />
            <Text style={styles.texto}>Você ainda não avaliou nenhum item!</Text>

            <ButtonCadastrar
                value="VOLTAR"
                callback={cadastrar}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    telaFundo: {
        backgroundColor: CORES.COR_FUNDO_CLARO,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    texto: {
        fontSize: 20,
        fontWeight: "800",
        marginTop: 20,
        marginBottom: 20,
    },
});

export default Avaliações;