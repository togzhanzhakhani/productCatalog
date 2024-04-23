import React, { useState } from 'react';
import { Pressable, Image, View, Text, StyleSheet } from 'react-native';

export default function ProductItem({ product, updateTotalPrice, updateQuantities, onUpdateCart }) {
  const [quantity, setQuantity] = useState(0);
  //const dispatch = useDispatch();


  const handleIncrement = () => {
    setQuantity(quantity + 1);
    updateTotalPrice(product.price); 
    updateQuantities(1);
    onUpdateCart({ ...product, quantity: quantity + 1 });
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      updateTotalPrice(-product.price); 
      updateQuantities(-1);
      onUpdateCart({ ...product, quantity: quantity - 1 });
    }
  };

  /*const handleAddToCart = () => {
    dispatch(addToCart(product));
    setQuantity(quantity + 1);
  };*/


  return (
    <Pressable style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>{product.price} KZT</Text>
      </View>
      <View style={styles.quantityContainer}>
        <Pressable onPress={handleDecrement} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text style={styles.quantity}>{quantity}</Text>
        <Pressable onPress={handleIncrement} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    height: 100,
    width: 70,
    marginRight: 15,
  },
  details: {
    flex: 1,
    marginRight: 20,
  },
  name: {
    //fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    color: '#888',
    marginBottom: 5,
  },
  price: {
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
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
