import * as actionTypes from "./shopping-types";

// Dummy data
import { products } from "dummyData";

const INITIAL_STATE = {
	products, // array of object  each product {id, name, image, category, price}
	cart: [], // {id, name, image, category, price, qty}
	currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		// ADD A PRODUCT TO THE CART >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
		case actionTypes.ADD_TO_CART:
			// Get the item data from product arrau
			const item = state.products.find((prod) => prod.id === action.payload.id);
			// Check if items is in cart already
			const inCart = state.cart.find((prod) => (prod.id === action.payload.id ? true : false));
			return {
				...state,
				cart: inCart
					? state.cart.map((item) => (item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item))
					: [...state.cart, { ...item, qty: 1 }],
			};

		// REMOVE AN ITEM FROM THE CART >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
		case actionTypes.REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload.id),
			};

		// ADJUST QUANTITY OF AN ITEM IN THE CART >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
		case actionTypes.ADJUST_QTY:
			return {
				...state,
				cart: state.cart.map((item) => (item.id === asction.id ? { ...item, qty: action.payload.qty } : item)),
			};

		// GET THE CURRENT ITEM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
		case actionTypes.LOAD_CURRENT_ITEM:
			return { ...state, currentItem: action.payload };

		default:
			return state;
	}
};

export default shopReducer;
