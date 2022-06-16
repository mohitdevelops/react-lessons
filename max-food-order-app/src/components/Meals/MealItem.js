import modules from './MealItem.module.css';
import MealItemForm from './MealItemForm';

export default function MealItem (props){

    const price = `$${props.price.toFixed(2)}`

    return <li className={modules.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={modules.description}>{props.description}</div>
            <div className={modules.price}>{price}</div>
        </div>
        <div>
            <MealItemForm />
        </div>
    </li>
}