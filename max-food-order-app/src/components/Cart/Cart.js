import Modal from "../UI/Modal";
import modules from "./Cart.module.css";

export default function Cart(props) {
	const cartitems = (
		<ul className={modules["cart-items"]}>
			{[
				{
					id: "c1",
					name: "Sushi",
					amount: 2,
					price: 150,
				},
			].map(items => <li>{items.name}</li>)}			
		</ul>
	);
	return (
		<Modal>
			{cartitems}
			<div className={modules.total}>
				<span>Total amount</span>
				<span>5465</span>
			</div>
			<div className={modules.actions}>
				<button className={modules["button--alt"]}>Close</button>
				<button className={modules.button}>Order</button>
			</div>
		</Modal>
	);
}
