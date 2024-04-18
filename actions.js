export const UPDATE_CART = 'UPDATE_CART';

export const updateCart = (cartItems) => ({
  type: UPDATE_CART,
  payload: cartItems,
});
