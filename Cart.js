import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import CartItem from './CartItem';

const CartScreen = ({ navigation, route }) => {
  const [cartItems, setCartItems] = useState(route.params.cartItems);
  const [microwaveNeeded, setMicrowaveNeeded] = useState(false);
  
  const toggleMicrowaveNeeded = () => {
    setMicrowaveNeeded(!microwaveNeeded);
  };


  const handleIncrement = (itemId) => {
    const updatedItems = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
    navigation.setParams({ cartItems: updatedItems });
  };

  const handleDecrement = (itemId) => {
    const updatedItems = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
    );
    setCartItems(updatedItems);
    navigation.setParams({ cartItems: updatedItems });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Ваша корзина</Text>
        <View style={styles.itemsContainer}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              handleIncrement={() => handleIncrement(item.id)}
              handleDecrement={() => handleDecrement(item.id)}
            />
          ))}
        </View>
        <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Нужна микроволновая печь?</Text>
        <Switch
          trackColor={{ false: "#CCCCCC", true: "#9ACD32" }}
          thumbColor={microwaveNeeded ? "#9ACD32" : "#FFFFFF"}          
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleMicrowaveNeeded}
          value={microwaveNeeded}
        />
      </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>ВСЕГО:</Text>
          <Text style={styles.totalPrice}>
            {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} KZT
          </Text>
        </View>
      </ScrollView>
      <View style={styles.bc}>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>Оплатить через kaspi.kz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 10,
  },
  itemsContainer: {
    width: '100%',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 10
  },
  optionText: {
    fontSize: 18,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  payButton: {
    backgroundColor: '#7BAE10',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 13,
    borderRadius: 9,
    width: 260,
  },
  payButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bc: {
    alignItems: 'center',
  }
});

export default CartScreen;
