import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StoreScreen from './StoreScreen';
import CartScreen from './Cart';
import store from './store';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Продукты" component={StoreScreen} />
          <Stack.Screen name="Корзина" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
