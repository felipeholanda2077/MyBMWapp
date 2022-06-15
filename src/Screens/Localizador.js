import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, Button} from 'react-native'

import Modal from '../Components/Modal';


export default function Localizador() {

  let Maps = "https://www.researchgate.net/profile/Jorge-Campos-6/publication/220913292/figure/fig3/AS:393943268249611@1470934802727/Figura-3-Diversas-representacoes-em-mapas-estaticas-do-movimento-de-um-veiculo-em-um.png";

  let Info1 = "https://appassets.mvtdev.com/map/131/s/1882/19262421.jpg";

  let Mapa = []
  for (let i = 0; i < 1; i++) {
    Mapa.push(<Image style={{ alignSelf: 'center', width: 420, height: 305, margin: 10, borderRadius: 20}}  source={{ uri: Maps }} />)
  }

  let Info = []
  for (let i = 0; i < 1; i++) {
    Info.push(<Image style={{ alignSelf: 'center', width: 420, height: 305, margin: 10, borderRadius: 20}}  source={{ uri: Info1 }} />)
  }



 return(
  <ScrollView style={style.container}>
       <Text style={{fontSize: 25, textAlign: 'center', paddingBottom: 10, color: 'white', backgroundColor: 'black', height:42}}>Localizador Veicular</Text>

      {Mapa}
        
      <Text style={{fontSize: 25, textAlign: 'center', paddingBottom: 10, height:42}}>INFORMAÇÕES</Text>

      {Info}


      <Button title='SOLICITAR AJUDA' onPress={() => alert('A ajuda está a caminho até sua posição')} borderRadius={20} paddingTop={10}></Button>


      <Text style={{ color: 'black', fontSize: 13, textAlign: 'center', paddingTop: 10, paddingBottom: 20 }}>© Felipe Holanda - BMW Brasil 2022</Text>
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