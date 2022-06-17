import { BsFillCartFill } from "react-icons/bs";
import modules from "./HeaderCartButton.module.css";
import { CartShow } from "../../App";
import CartContext from "../../cart-context";
import { useContext } from "react";

const HeaderCartButton = (props) => {
	const cartItemContext = useContext(CartContext);

	const numberOfCartItems = cartItemContext.item.reduce(
		(currentNumber, item) => {
			return currentNumber + item.totalAmount;
		},
		0
	);

	return (
		<CartShow.Consumer>
			{(show) => {
				return (
					<button className={modules.button} onClick={show.show}>
						<span className={modules.icon}>
							<BsFillCartFill />
						</span>
						<span>Your Cart</span>
						<span className={modules.badge}>{numberOfCartItems}</span>
					</button>
				);
			}}
		</CartShow.Consumer>
	);
};
export default HeaderCartButton;
