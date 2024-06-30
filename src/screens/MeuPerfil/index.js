import React from "react";
import { StyleSheet, View, Text, Alert, ScrollView } from "react-native";
import MeuInput from "../../components/MeuInput";
import { CORES } from "../../constants/cores";
import ButtonCadastrar from "../../components/ButtonCadastrar";
import { Image } from "react-native";
import Logo from "../../../img/logo.png"
import { FontAwesome } from '@expo/vector-icons';


export const App = () => {
    return (
        <Image source={Logo} style={{ width: 330, height: 200 }} />
    );
};

function Perfil({ navigation }) {


    const cadastar = () => {
        navigation.navigate('Home');
    };



    return (
        <ScrollView>
        <View style={styles.boxLogin}>

            <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10, marginBottom: 5, marginTop: 5 }}>
                <FontAwesome name="user-circle-o" size={150} color={CORES.COR_PRIMARIA} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: CORES.COR_PRIMARIA, marginTop: 5 }}>
                    Editar Foto Perfil
                </Text>
            </View>

            {/* Componete Personalizado */}
            <MeuInput
                label="Nome:"
                placeHolder="João da Silva"
                comMascara={true}

            />
            <MeuInput
                label="Email:"
                placeHolder="joão_da_silva@gmail.com"
                comMascara={true}
            />
            <MeuInput
                label="Data de Nascimento:"
                placeHolder="06/05/1980"
                comMascara={true}
            />
            <MeuInput
                label="Senha:"
                placeHolder="***********"
                comMascara={true}
            />

            <ButtonCadastrar
                value="CADASTRAR"
                callback={cadastar}
       
            />

            <Image source={Logo} style={{ width: 100, height: 60, marginLeft: 8,marginBottom:50 }} />

        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    boxLogin: {
        backgroundColor: CORES.COR_FUNDO_CLARO,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    titulo: {
        fontSize: 45,
        color: CORES.COR_PRIMARIA,
        fontWeight: 800,
        marginBottom: 1,
        textShadowRadius: 20,
        textShadowColor: 'black',

    },

});
export default Perfil;