import react from "react";
import { SafeAreaView, TextInput, StyleSheet, Text } from "react-native";
import { CORES } from "../../constants/cores";


const MeuInput = (props) => {
    return (
        <SafeAreaView>

            <Text style={styles.label}>{props.label}</Text>
           

            <TextInput
                style={styles.input}
                placeholder={props.placeHolder}
                secureTextEntry={props.comMascara}
                />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom:15,
        // marginTop: 1,
        padding: 8,
        width: 310,
        borderRadius: 4,
        // borderWidth: false,
        color: '#9F8D93',
        fontSize: 15,
        borderColor: CORES.COR_PRIMARIA,
        backgroundColor:'white',
        shadowRadius:10,
        shadowColor:'black',

    },
    label: {
        color:'#0B2D4B', // Aqui você define a cor da label
        marginBottom: 4,
        fontWeight: 800,
       
    },
});


export default MeuInput;