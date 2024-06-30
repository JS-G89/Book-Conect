import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import MeuInput from '../../components/MeuInput';
import MeuButton from '../../components/MeuButton';
import { CORES } from '../../constants/cores';
import Logo from '../../../img/logo.png';

export const App = () => {
    return <Image source={Logo} style={{ width: 330, height: 200 }} />;
};

function Login({ navigation }) {
    const logar = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.boxLogin}>
            <Image source={Logo} style={{ width: 330, height: 200, marginBottom: 8, marginLeft: 8 }} />

            <MeuInput label="E-mail:" placeHolder="usuario@gmail.com" comMascara={true} username={true} />
            <MeuInput label="Senha:" placeHolder="********" comMascara={true} />

            <Text style={styles.link}>Esqueci minha senha!</Text>

            <MeuButton value="LOGIN" callback={logar} />

            <Text style={styles.link}>
                Ainda não tem cadastro?
                {'\n'}
                Crie sua conta clicando aqui!
            </Text>
        </View>
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
        fontWeight: '800',
        marginBottom: 1,
        textShadowRadius: 20,
        textShadowColor: 'black',
    },
    link: {
        textAlign: 'center',
        fontSize: 16,
        color: '#0B2D4B',
        fontWeight: '800',
        marginBottom: 8,
        textShadowRadius: 20,
        textShadowColor: 'black',
    },
});

export default Login;
