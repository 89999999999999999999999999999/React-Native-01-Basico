import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

function BoasVindas(props) {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useStates('');
  const [mensagem, setMensagem] = useState('Seja bem-vindo(a)!');
  const [,mostraMensagem, setMostraMensagem] = useState(false);

 const _apresentarMensagem = () => {
     if (!nome == '' && !sobrenome == '') {
         setMostraMensagem(true);
     } else {
       Alert.alert(
           'Preenchimento obrigatório', 
           'Informe o nome e o sobrenome! ',
           [
               {text: 'ok' },
           ],
       );       
     }
 }
}

 const _limpar = () => {
     setNome('');
     setSobrenome('');
     setMostraMensagem(false);
 }
return (
    <View style={styles.container}>

        <text style={styles.titulo}>indentifique-se</text>
         
         <TextInput
           style={styles.campo}
           placeholder="digite seu nome"
           onChangeText={nome => setNome(nome)}
           value={nome}
           />

           <TextInput
              style={styles.campo}
              placeholder="digite seu sobrenome"
              onChangeText={sobrenome => setSobrenome(sobrenome)}
              value={sobrenome}
              />
              
              <View style={styles.botaoContainer}>
                  <Button
                    onPress={_apresentarMensagem}
                    title="Ok"
                    />
              </View>
           
             {mostraMensagem && (
                 <View>
                     <Text style={styles.textos}>Olá, {nome} {sobrenome}! {props.saudacao}</Text>
                     <Text style={styles.textos}>{mensagem}</Text>
                 </View>
             )}
    
          <View style={styles.botaoContainer}>
              <Button
                 onPress={_limpar}
                 title="Limpar"
              /> 
          </View>
    </View>
)
const styles = StyleSheet.create({
  container: {
     backgroundColor: '#081a31',
     width: 300,
     borderRadius: 5,
     padding: 10,
     margin: 10
  },
  titulo: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: "center",
  },

  texto: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: "center",
  },
  campo: {
      backgroundColor: '#dcedff',
      fontSize: 14,
      marginBottom: 5,
      marginTop: 5,
      borderRadius: 5,
      height: 35, 
  },
  botaoContainer: {
      marginBottom: 5,
      marginTop: 5,
      borderRadius: 5,
  },

});


export default BoasVindas;
