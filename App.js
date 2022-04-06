import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View} from 'react-native';
import styled from 'styled-components';
import Botao  from './src/Components/Botao';
import  { useState } from "react";

const Texto = styled.Text`
  color: #eee;
  fontSize: 30px;
`;

const Container = styled.SafeAreaView`
  backgroundColor: #111d4a;
  justifyContent: center;
  alignItems: center;
  textAlign: center;
  marginTop: 150px;
  height: 500px;
  flexDirection: column;
`;

const Caixa = styled.TextInput`
  border: 1px;
  borderColor: #eee;
  borderRadius: 5px;
  backgroundColor: transparent;
  width: 250px;
  color: #eee;
`;

const Texto2 = styled.Text`
  fontSize: 25px;
  color: #eee;
  textAlign: center;
`;

const Clicar = styled.Button`
  backgroundColor: #111da5;
`;

export default function App() {

  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(0);

const Calcular = () => {
  console.log("teste")
  let nPeso = parseFloat(peso)
  let nAltura = parseFloat(altura)  //seria passado um número que pode ser decimal, por isso o comando 'parseFloat'

  if (nPeso,nAltura) {
     setImc(nPeso/(nAltura*nAltura)) 
  }
  console.log(imc)
}

  return (
    <Container>
      <Texto>Calculadora de IMC</Texto>
      <View>
      <Texto2>
        Altura
      </Texto2>
        <Caixa value={altura} onChangeText={a => setAltura(a)} />
      <Texto2>
        Peso
      </Texto2>
        <Caixa value={peso} onChangeText={p => setPeso(p)} />
      </View>
      <View >
        <Clicar title='calcular' onPress={Calcular} />
      </View>
      {imc > 0 && 
        <>
          <Texto>seu IMC é:</Texto>
          <Texto>{parseFloat(imc).toFixed(2)}</Texto>
        </>
      }
      <StatusBar style="auto" />
    </Container>
  );
}

