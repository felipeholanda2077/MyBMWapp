import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator'
import Pagamentos from '../src/Screens/Localizador';
const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home - MyBMW"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Localizador" component={Pagamentos}  />

    </Stack.Navigator>
  );
};
export default StackNavigator;