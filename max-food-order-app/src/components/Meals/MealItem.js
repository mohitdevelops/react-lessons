import { useContext } from 'react';
import CartContext from '../store/cart-context';
import modules from './MealItem.module.css';
import MealItemForm from './MealItemForm';

export default function MealItem (props){

    const cartCtxt = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const onAddtoCartHandler = amount => {
        cartCtxt.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        })
    }

    return <li className={modules.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={modules.description}>{props.description}</div>
            <div className={modules.price}>{price}</div>
        </div>
        <div>
            <MealItemForm onAddtoCart={onAddtoCartHandler}/>
        </div>
    </li>
}