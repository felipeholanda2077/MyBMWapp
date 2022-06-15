import React, { Component, useState } from 'react';
import {  View, Text, StyleSheet, Image, FlatList, ScrollView, Button } from 'react-native'

export default function Recall() { 

  let BmwR = "https://www.iesamotorrad.com.br/assets/uploads/nt_servicos_galeria/05372-RECALL-BMW-MOBILE.png?v=0.4";

  let CarroR = []
  for (let i = 0; i < 1; i++) {
    CarroR.push(<Image style={{alignSelf: 'center', width: 395, height: 360, margin: 10, borderRadius: 5 }} source={{ uri: BmwR }} />)
  }

    
    return(
      <ScrollView style={style.container}>
          <Text style={{fontSize: 25, textAlign: 'center', paddingBottom: 10, color: 'white', backgroundColor: 'black', height:42}}>RECALL</Text>

        {CarroR}
          
          <Text style={{color: 'black',  textAlign: 'center'}}>O BMW GROUP BRASIL, zelando pela máxima segurança de seus consumidores, promove campanhas de recall com o objetivo de convocar os proprietários dos veículos afetados a entrar em contato com Concessionário autorizado para agendar o reparo gratuito de determinado defeito que o mesmo possa apresentar.{'\n'}{'\n'}

É importante destacar que as campanhas de recall têm caráter preventivo e acautelatório, sendo resultado do constante acompanhamento do BMW GROUP acerca da performance dos seus veículos.{'\n'}{'\n'}

O BMW GROUP BRASIL destaca a importância do imediato atendimento à campanha de recall, pois assim assegura-se a segurança do condutor, ocupantes e terceiros do veículo.{'\n'}{'\n'}SOLICITE ABAIXO SEU RECALL PRIORITARIO{'\n'}</Text>

         <Button onPress={() => alert('Recall Solicitado com Sucesso...\n\nO periodo de espera é de 2 Dias úteis')} title='Solicitar Recall'></Button>
         <Text style={{ color: 'black', fontSize: 13, textAlign: 'center', paddingTop: 20, paddingBottom: 20 }}>© Felipe Holanda - BMW Brasil 2022</Text>
      </ScrollView>
    )
}

const style = StyleSheet.create({
  container: {
      padding: 10,
      flex: 1,
      
  },
  titulo: {
      fontSize: 26,
      fontWeight: 'bold',
      color: 'black'
  }
})