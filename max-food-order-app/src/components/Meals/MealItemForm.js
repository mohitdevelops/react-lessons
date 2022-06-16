import { BsPlus } from "react-icons/bs";
import Inputs from "../UI/Inputs";
import modules from "./MealItemForm.module.css";

export default function MealItemForm(props) {
	return (
		<form className={modules.form}>
			<Inputs label="Amout" input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}/>
			<button><BsPlus /> Add</button>
		</form>
	);
}
