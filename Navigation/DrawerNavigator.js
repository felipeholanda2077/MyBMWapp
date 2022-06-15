import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../src/Screens/Home';
import Pagamentos from '../src/Screens/Localizador';
import Categorias from '../src/Screens/Recall';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MyBMW" component={Home} />
      <Drawer.Screen name="Recall" component={Categorias} />
      <Drawer.Screen name="Localizador" component={Pagamentos} />

    </Drawer.Navigator>
  );
};
export default DrawerNavigator;