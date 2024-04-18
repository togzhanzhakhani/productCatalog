import { combineReducers } from 'redux';
import { UPDATE_CART } from './actions';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  cart: cartReducer,
});
