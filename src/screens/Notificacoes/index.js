import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { CORES } from "../../constants/cores";
import ButtonCadastrar from "../../components/ButtonCadastrar";

function Notifications({ navigation }) {
    const cadastrar = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.telaFundo}>
            <Ionicons
                name="notifications-off-outline"
                size={200}
                color={CORES.COR_PRIMARIA}
                width={800} // Corrigido o nome da prop
            />
            <Text style={styles.texto}>No momento não há Notificações</Text>

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
        marginTop:20,
        marginBottom:20,
    },
});

export default Notifications;