import { SafeAreaView, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ProductItem from './ProductItem';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCart } from './actions';

const products = {
  'Напитки': [
    { id: 1, name: 'Coca-Cola 0,5 л', description: 'Газированный напиток', price: 600, image: require('./assets/cola.jpg') },
    { id: 2, name: 'Sprite 0,5 л', description: 'Газированный напиток', price: 550, image: require('./assets/sprite.jpg') },
    { id: 3, name: 'Bonaqua 0,5 л', description: 'Вода', price: 500, image: require('./assets/bonaqua.jpg') },
  ],
  'Снеки': [
    { id: 4, name: 'Snickers', description: 'Шоколадный батончик', price: 550, image: require('./assets/snickers.png') },
    { id: 5, name: 'Twix', description: 'Шоколадный батончик', price: 550, image: require('./assets/twix.png') },
  ],
  'Сендвичи': [
    { id: 6, name: 'Клаб-сендвич с ветчиной', description: 'Клаб-сендвич', price: 950, image: require('./assets/sandwich.jpg') },
  ],
  'Комплексные обеды': [
    { id: 7, name: 'Мясо по-французский с рисом', description: 'Второе блюдо', price: 1350, image: require('./assets/meat-rice.jpg') },
  ],
};


export default function StoreScreen({ navigation, route }) {
  //const dispatch = useDispatch();
  const { cartItems: routeCartItems } = route.params || {};

    const handleOpenCart = () => {
      navigation.navigate('Корзина', { cartItems }) 
      };    
  const [totalPrice, setTotalPrice] = useState(0); 
  const [quantities, setQuantities] = useState(0);

  
  const updateTotalPrice = (price) => {
    setTotalPrice(prevTotalPrice => prevTotalPrice + price);
  };

  const updateQuantities = (quantity) => {
    setQuantities(prevQuantities => prevQuantities + quantity);
  };

  const [cartItems, setCartItems] = useState(routeCartItems || []);

  const handleUpdateCart = (item) => {
    const existingItemIndex = cartItems.findIndex(i => i.id === item.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity = item.quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
        />
        {Object.keys(products).map(category => (
          <SafeAreaView key={category}>
            <Text style={styles.categoryTitle}>{category}</Text>
            {products[category].map(product => (
              <ProductItem
              key={product.id}
              product={product}
              updateTotalPrice={updateTotalPrice}
              updateQuantities={updateQuantities}
              onUpdateCart={handleUpdateCart}
            />            
            ))}
          </SafeAreaView>
        ))}
      </ScrollView>
      <SafeAreaView style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buyButton} onPress={handleOpenCart} >
          <Text style={styles.buyButtonText}>{quantities} за {totalPrice} KZT</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: 20,
  },
  categoryTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 15,
    marginLeft: 25,
  },
  buyButton: {
    backgroundColor: '#7BAE10',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 13,
    borderRadius: 9,
    width: 220,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center', 
  },

});
