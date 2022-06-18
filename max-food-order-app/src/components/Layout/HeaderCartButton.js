import { BsFillCartFill } from "react-icons/bs";
import modules from "./HeaderCartButton.module.css";
import CartContext from "../store/cart-context";
import { useContext } from "react";

const HeaderCartButton = (props) => {

	const cartCtx = useContext(CartContext)

	const numberOfCartItems = cartCtx.item.reduce(
		(currentNumber, cartitem) => {
			return currentNumber + cartitem.amount;
		},
		0
	);

	return (
		<button className={modules.button} onClick={props.onClick}>
			<span className={modules.icon}>
				<BsFillCartFill />
			</span>
			<span>Your Cart</span>
			<span className={modules.badge}>{numberOfCartItems}</span>
		</button>
	);
};
export default HeaderCartButton;
