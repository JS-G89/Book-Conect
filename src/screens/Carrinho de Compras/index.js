import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { AntDesign} from '@expo/vector-icons';
import { CORES } from "../../constants/cores";
import ButtonCadastrar from "../../components/ButtonCadastrar";

function Carrinho({ navigation }) {
    const cadastrar = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.telaFundo}>
            <AntDesign
                name="shoppingcart"
                size={200}
                color={CORES.COR_PRIMARIA}
                width={800} // Corrigido o nome da prop
            />
            <Text style={styles.texto}>Que pena! Seu carrinho está vazio!</Text>

            <ButtonCadastrar
                value="CONTINUAR COMPRANDO"
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
        marginTop:20,
        marginBottom:20,
    },
});

export default Carrinho;