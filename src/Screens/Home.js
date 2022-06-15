import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

import Modal from '../Components/Modal';

export default function Home() {

    let Banner1 = "https://www.megaisencoes.com.br/img/slider/banner-bmw.jpg";

    let imagens = []
    for (let i = 0; i < 1; i++) {
      imagens.push(<Image style={{ alignSelf: 'center', width: 540, height: 195, margin: 10, borderRadius: 10}}  source={{ uri: Banner1 }} />)
    }

    let BmwF = "https://3.bp.blogspot.com/-HLgkRnKOyUg/VurscqAfNUI/AAAAAAAAfLw/KPvQk94OKNcRagNzOOMa1LLuFkQ43xf1A/s1600/BMW-Vision-Next-100-12.jpg";

    let CarroF = []
    for (let i = 0; i < 1; i++) {
      CarroF.push(<Image style={{alignSelf: 'center', width: 395, height: 250, margin: 10, borderRadius: 5 }} source={{ uri: BmwF }} />)
    }

    let BmwF2 = "https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/NEXTGen/Visionsfahrzeuge/035_Highlight_Teaser_720x720_VisonM_Next_02_mobil.jpg.grp-transform/small/035_Highlight_Teaser_720x720_VisonM_Next_02_mobil.jpg";

    let CarroF2 = []
    for (let i = 0; i < 1; i++) {
      CarroF2.push(<Image style={{alignSelf: 'center', width: 395, height: 350,margin: 10, borderRadius: 5 }} source={{ uri: BmwF2 }} />)
    }

    let Esta1 = "https://images.trustinnews.pt/uploads/sites/5/2020/12/myBMW_i3_All_Good-499x1080.png";
    let Esta2 = "https://play-lh.googleusercontent.com/C0h-n3Nkn9ojvlV-9IvK936qm280MAKFK0pco2uflO-umPzYdi0UGEQC1CpWnW4Jvys";
    


    let Estatisticas = []
    for (let i = 0; i < 1; i++) {
        Estatisticas.push(<Image style={{ width: 240, height: 350, margin: 10, borderRadius: 5 }} source={{ uri: Esta1}} />)
      }
    for (let i = 0; i < 1; i++) {
      Estatisticas.push(<Image style={{ width: 250, height: 150,margin: 10, borderRadius: 5 }} source={{ uri: Esta2 }} />)
    }
        
        

    

    return(
      <ScrollView style={style.container}>
           <Text style={{fontSize: 25, textAlign: 'center', paddingBottom: 10, color: 'white', backgroundColor: 'black', height:42}}>MY BMY - VOCÊ NO CONTROLE</Text>

          {imagens}
            
            

            <View style={{flex: 1, marginBottom: 15}}>
                <Text style={style.titulo}>Estatisticas</Text>
                <ScrollView horizontal={true}>
                {Estatisticas}
                </ScrollView>
            </View>

            <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', paddingTop: 40 }}>NOTICIAS</Text>
          <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', paddingTop: 10, paddingBottom: 20 }}>Nossos modelos do futuro</Text>

          {CarroF}
          {CarroF2}

          <Text style={{ color: 'black', fontSize: 16, textAlign: 'center', margin: 40 }}>-----------------------------------------------------------------------</Text>

          <Text style={{ color: 'black', fontSize: 16, textAlign: 'left', margin: 40 }}>O novo My BMW App{'\n'}{'\n'}{'\n'}Se adapta a você tão perfeitamente quanto o seu BMW.
          {'\n'}É a ligação direta ao veículo e ao mundo da BMW, mesmo se você não estiver dentro do seu BMW.{'\n'}O My BMW App irá se tornar o seu companheiro de mobilidade diária com o seu design moderno, interface intuitiva e muitas funcionalidades.{'\n'}{'\n'}Planeje as suas viagens,envie o seu próximo destino diretamente para o seu BMW no conforto do seu sofá, verifique a autonomia antes de iniciar a viagem ou climatize o interior do automóvel facilmente.{'\n'}{'\n'} Não tem certeza se trancou o seu veículo? Verifique no aplicativo e tranque o veículo com apenas um toque.{'\n'}{'\n'}O My BMW App tem funcionalidades muito úteis e específicas para o seu veículo elétrico BMW ou veículo híbrido plug-in BMW.{'\n'}Otimize o consumo e os custos de energia com o temporizador de carregamento e do ar-condicionado.{'\n'}{'\n'} O My BMW App garante uma mobilidade sem preocupações e um prazer de conduzir o veículo elétrico ainda maior – em qualquer momento, em qualquer lugar. Your World. My BMW.</Text>
          
          <Text style={{ color: 'black', fontSize: 16, textAlign: 'center', margin: 40 }}>-----------------------------------------------------------------------</Text>


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