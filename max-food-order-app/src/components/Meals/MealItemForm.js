import { useRef, useState } from "react";
import { BsPlus } from "react-icons/bs";
import Inputs from "../UI/Inputs";
import modules from "./MealItemForm.module.css";

export default function MealItemForm(props) {
	const amountInputRef = useRef();
	
	const [amountIsValid, setAmountIsValid] = useState(true);

	const formSubmit = (event) => {
		event.preventDefault();

		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;

		if (
			enteredAmount.trim().length === 0 ||
			enteredAmountNumber < 1 ||
			enteredAmountNumber > 5
		) {
			setAmountIsValid(false);
			return;
		}
		props.onAddtoCart(enteredAmountNumber);
	};

	return (
		<form className={modules.form} onSubmit={formSubmit}>
			<Inputs
				ref={amountInputRef}
				label="Amout"
				input={{
					id: "amount_" + props.id,
					type: "number",
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1",
				}}
			/>
			<button>
				<BsPlus /> Add
			</button>
			{!amountIsValid && <p>Please enter valid amount (1-5)</p>}
		</form>
	);
}
