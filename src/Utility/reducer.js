import { Type } from "./action.types";

export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      // Check if the item already exists in the basket
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );

      if (!existingItem) {
        // If the item does not exist, add it to the basket with an initial amount of 1
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else {
        // If the item exists, update the amount
        const updatedBasket = state.basket.map((item) =>
          item.id === action.item.id
            ? { ...item, amount: item.amount + 1 } // Increment amount
            : item
        );

        return {
          ...state,
          basket: updatedBasket,
        };
      }

    case Type.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];

      if (index >= 0) {
        if (newBasket[index].amount > 1) {
          // If the amount is more than 1, decrement the amount
          newBasket[index] = {
            ...newBasket[index],
            amount: newBasket[index].amount - 1,
          };
        } else {
          // If the amount is 1, remove the item from the basket
          newBasket.splice(index, 1);
        }
      }
      return {
        ...state,
        basket: newBasket,
      };

    case Type.EMPTY_BASKET:
      // Empty the basket
      return {
        ...state,
        basket: [],
      };

    case Type.SET_USER:
      // Set the user
      return {
        ...state,
        user: action.user,
      };

    default:
      // Return the current state if the action type is unrecognized
      return state;
  }
};
