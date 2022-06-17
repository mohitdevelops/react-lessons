import { useReducer } from "react";
import CartContext from "./cart-context";

const initialCartState = {
	item: [],
	totalAmount: 0,
};

const CartContextProvider = (props) => {
	const [cartState, dispatchCartState] = useReducer((prevState, action) => {
		if (action.name === "ADD") {
			const updatedItem = prevState.item.concat(action.cartItem);
			const updatedTotalAmount = prevState.totalAmount + action.cartItem.price;
		}
		return initialCartState;
	}, initialCartState);

	const addItemToCartHandler = (item) => {
		dispatchCartState({ name: "ADD", cartItem: item });
	};

	const removeItemFromCartHandler = (id) => {
        dispatchCartState({ name: "REMOVE", cartItemId: id,});
    };

	const cartCtx = {
		item: cartState.item,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};

	return (
		<CartContext.Provider value={cartCtx}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
