import { useContext } from "react";
import CartContext from "../store/cart-context";
import Modal from "../UI/Modal";
import modules from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {

	const cartCtx = useContext(CartContext);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

	const hasItems = cartCtx.item.length > 0;

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({
			...item,
			amount: 0,
		})
	};

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartitems = (
		<ul className={modules["cart-items"]}>
			{cartCtx.item.map((items) => (
				<CartItem
					key={items.id}
					name={items.name}
					amount={items.amount}
					price={items.price}
					onAdd={cartItemAddHandler.bind(null, items.id)}
					onRemove={cartItemRemoveHandler.bind(null, items)}
				/>
			))}
		</ul>
	);
	return (
		<Modal onClose={props.onClose}>
			{cartitems}
			<div className={modules.total}>
				<span>Total amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={modules.actions}>
				
				<button className={modules["button--alt"]} onClick={props.onClose}>Close</button>

				{hasItems && <button className={modules.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
