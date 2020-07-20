import React, { useState } from 'react';
import {StyleSheet, view, text, textinput, TouchableOpacity, Alert } from 'rectv-native';
import { Text } from 'react-native';
const Calculos = () => {

    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [resultado, setResultado] = useState('informe os dois numeros!'); 

    const _somar = () => {

        if (!n1 == '' &&  !n2 == '') {
            setResultado( Number(n1) + Number(n2) ); 
        }else{
            setResultado('Preenchimento obrigatorio');
        }
    }

    const _limpar = () => {
        setN1('');
        setN2('');
        setResultado('informe dois numeros! ');
    }
    return (
        <View style={styles.container}>
            
            <Text style={styles.titulo}>Somar</Text>
             
             <TextInput
             style={styles.campo}
             placeholder="Digite o primeiro número"
             onChangeText={n1 => setN1(n1)}
             value={String(n1)}
             />

             <TextInput
             style={styles.campo}
             placeholder="Digite o segundo nome número"
             onChangeText={n2 => setN2(n2)}
             value={String(n2)}
             />

             <Text style={styles.botoaTexto}>Resultado:</Text>
             <Text style={styles.campo}>{resultado}</Text>

             <TouchableOpacity style={styles.botaoContainer} onPress={_somar}>
             <Text style={styles.botaoTexto}>Calcular</Text>
             </TouchableOpacity>

             <TouchableOpacity styles={styles.botaoContainer} onPress={_limpar}>
             <Text style={styles.botaoTexto}>Limpar</Text>
             </TouchableOpacity>
             
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#103525',
        width: 300,
        borderRadius: 5,
        padding: 10,
        margin: 10  
    },
    titulo: {
        fontsize: 16,
        color: '#FFFFFF',
        fontweight: 'bold',
        textAlign: 'center',
    },
    campo:{
        backgroundColor:'#b4f2d6',
        fontsize:14,
        height: 35,
        marginbottom: 5,
        margintop: 5,
        borderRadius: 5,
        textAlign: 'center',
    },
    botaoContainer: {
        marginbottom: 5,
        margintop: 5,
        borderRadius: 5,
        height: 40,
        borderwidth: 2, 
        bordercolor: '#e8f2e9',
        justifycontent: 'center',
        alignitems: 'center',        
    },
    botaoTexto: {
        fontsize: 14,
        color: '#FFFFFF',
    },
});

export default Calculos;
