import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

export default function ExpenseItem(props){
    
    return(
        <Card className='expense-item'>
            <ExpenseDate expenseDate={props.expenseDate}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.expenseTitle}</h2>
                <div className='expense-item__price'>
                    &#8377;{props.expenseAmount}
                </div>
            </div>            
        </Card>
    );    
}