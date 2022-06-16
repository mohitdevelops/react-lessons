import { BsFillCartFill } from "react-icons/bs";
import modules from "./HeaderCartButton.module.css";
import { CartShow } from "../../App";

const HeaderCartButton = (props) => {
	return (
		<CartShow.Consumer>
			{(show) => {
				return (
					<button className={modules.button} onClick={show.show}>
						<span className={modules.icon}>
							<BsFillCartFill />
						</span>
						<span>Your Cart</span>
						<span className={modules.badge}>3</span>
					</button>
				);
			}}
		</CartShow.Consumer>
	);
};
export default HeaderCartButton;
