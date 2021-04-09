import * as actionTypes from "./shopping-types";
import { HYDRATE } from "next-redux-wrapper";
import { addToTheCart, removeFromTheCart, adjustProductQty, setCurrentItem } from "./reducer-functions";

// Dummy data
import { products } from "dummyData";

const INITIAL_STATE = {
	products, // array of object  each product {id, name, image, category, price}
	cart: [], // {id, name, image, category, price, qty}
	currentItem: null,
};

export default function shopReducer (state = INITIAL_STATE, action) {
	switch (action.type) {
		case HYDRATE:
			return { ...state, ...action.payload };

		// ADD A PRODUCT TO THE CART >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
		case actionTypes.ADD_TO_CART:
			return addToTheCart(state, action);

		// REMOVE AN ITEM FROM THE CART >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
		case actionTypes.REMOVE_FROM_CART:
			return removeFromTheCart(state, action);

		// ADJUST QUANTITY OF AN ITEM IN THE CART >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
		case actionTypes.ADJUST_QTY:
			return adjustProductQty(state, action);

		default:
			return state;
	}
};

 
