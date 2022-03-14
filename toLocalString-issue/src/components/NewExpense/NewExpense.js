import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

export default function NewExpense(props){
    
    const expenseFormData = (expense) =>{       
        props.onNewExpenseDataSubmit(expense);
    }    

    return(
        <div>
            <ExpenseForm onExpenseFromSubmit={expenseFormData}/>
        </div>
    )
}