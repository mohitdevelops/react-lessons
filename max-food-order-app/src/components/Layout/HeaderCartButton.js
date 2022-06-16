import { BsFillCartFill } from "react-icons/bs";
import modules from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
	return (
		<button className={modules.button}>
			<span className={modules.icon}>
                <BsFillCartFill />
            </span>
			<span>Your Cart</span>
            <span className={modules.badge}>3</span>
		</button>
	);
};
export default HeaderCartButton;
