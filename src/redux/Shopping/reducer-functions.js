// ADD A PRODUCT TO THE CART >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const addToTheCart = (state, action) => {
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
};

// REMOVE AN ITEM FROM THE CART >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const removeFromTheCart = (state, action) => {
	return {
		...state,
		cart: state.cart.filter((item) => item.id !== action.payload.id),
	};
};

// ADJUST QUANTITY OF AN ITEM IN THE CART >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const adjustProductQty = (state, action) => {
	return {
		...state,
		cart: state.cart.map((item) => (item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item)),
	};
};

// GET THE CURRENT ITEM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const setCurrentItem = (state, action) => {
	return { ...state, currentItem: action.payload };
};
