import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator'
import Categorias from '../src/Screens/Recall';
import Localizador from '../src/Screens/Localizador';
import Icon from 'react-native-vector-icons/Ionicons';

const Tabs = createBottomTabNavigator();
const TabsNavigator = () => {
  return (
    <Tabs.Navigator

    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        // Configuramos os icones que irão aparecer caso a tela esteja selecionada ou não
        if (route.name === 'MyBMW') {
          iconName = focused
            ? 'car'
            : 'car-outline';
        } else if (route.name === 'Recall') {
          iconName = focused
          ? 'list'
          : 'list-outline';
        } else if (route.name === 'Localizador') {
          iconName = focused
          ? 'map'
          : 'map-outline';
        }

        // Retornamos o ícone
        return <Icon name={iconName} size={size} color={color} />;
      },
      // Definimos as cores dos ícones
      tabBarActiveTintColor: '#0d6efd',
      tabBarInactiveTintColor: 'gray',
    })}    

    >
      <Tabs.Screen 
        name="MyBMW" 
        component={StackNavigator} 
        options={{headerShown: false}} 
      />
      <Tabs.Screen 
        name="Recall" 
        component={Categorias}  
      />
      <Tabs.Screen 
        name="Localizador" 
        component={Localizador}      
      />
    </Tabs.Navigator>
  );
};
export default TabsNavigator;