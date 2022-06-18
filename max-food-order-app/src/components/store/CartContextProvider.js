import { useReducer } from "react";
import CartContext from "./cart-context";

const initialCartState = {
	items: [],
	totalAmount: 0,
};

const CartContextProvider = (props) => {
	const [cartState, dispatchCartState] = useReducer((prevState, action) => {
		if (action.name === "ADD") {
			const updatedTotalAmount =
				prevState.totalAmount + action.cartItem.price * action.cartItem.amount;

			const existingCartItemIndex = prevState.items.findIndex(
				(item) => item.id === action.cartItemId
			);

			const existingCartItem = prevState.items[existingCartItemIndex];

			let updatedItem;
			let updatedItems;

			if (existingCartItem) {
				updatedItem = {
					...existingCartItem,
					amount: existingCartItem.amount + action.cartItem.amount,
				};
				updatedItems = [...prevState.items];
				updatedItems[existingCartItemIndex] = updatedItem;
			} else {
				updatedItem = { ...action.cartItem };
				updatedItems = prevState.items.concat(action.cartItem);
			}

			return {
				items: updatedItems,
				totalAmount: updatedTotalAmount,
			};
		}

		if (action.name === "REMOVE") {
			const existingCartItemIndex = prevState.items.findIndex(
				(item) => item.id === action.cartItemId
			);
			const existingItem = prevState.items[existingCartItemIndex];
			const updatedTotalAmount = prevState.totalAmount - existingItem.price;
			let updatedItems;
			if (existingItem.amount === 1) {
				updatedItems = prevState.items.filter(
					(item) => item.id !== action.cartItemId
				);
			} else {
				const updatedItem = {...existingItem, amount: existingItem.amount - 1};
				updatedItem = [...prevState.cartItem];
				updatedItems[existingCartItemIndex] = updatedItem;
			}
			return{
				cartItem: updatedItems,
				totalAmount: updatedTotalAmount
			}
		}
		return initialCartState;
	}, initialCartState);

	const addItemToCartHandler = (item) => {
		dispatchCartState({ name: "ADD", cartItem: item });
	};

	const removeItemFromCartHandler = (id) => {
		dispatchCartState({ name: "REMOVE", cartItemId: id });
	};

	const cartCtx = {
		item: cartState.items,
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
