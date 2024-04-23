import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const CartItem = ({ item, handleIncrement, handleDecrement }) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price} KZT</Text>
      </View>
      <View style={styles.quantityContainer}>
        <Pressable onPress={handleDecrement} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <Pressable onPress={handleIncrement} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  details: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  description: {
    color: '#888',
    fontSize: 17,
  },
  price: {
    fontSize: 17,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: { 
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#ccc',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 7,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 18,
  },
});

export default CartItem;
