import './ExpenseForm.css';
import { useState } from 'react';

export default function ExpenseForm(props){   
    const [enteredValue, executeEnteredValue] = useState('');
    const [enteredAmount, executeEnteredAmount] = useState('');
    const [enteredDate, executeEnteredDate] = useState('');

    function userInputValue(event){
        executeEnteredValue(event.target.value);
    }
    function userInputAmount(event){
        executeEnteredAmount(event.target.value);
    }
    function userInputDate(event){
        executeEnteredDate(event.target.value);
    }

    // const [userInput, execute] = useState({
    //     enteredValue: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    // const userInputValue = (event) =>{        
    //     execute({
    //         enteredValue: event.target.value,
    //     })
    // }
    // const userInputAmount = (event) =>{
    //     execute({
    //         enteredAmount: event.target.value,
    //     })
    // }
    // const userInputDate = (event) => {
    //     execute({
    //         enteredDate: event.target.value,
    //     })
    // }

    const expenseSubmitFormHandler = function(event){
        event.preventDefault();

        const expenseData = {
            inputValue: enteredValue,
            inputAmount: enteredAmount,
            inputDate: new Date(enteredDate)
        }                
        props.onExpenseFromSubmit(expenseData);
        executeEnteredValue('');
        executeEnteredAmount('');
        executeEnteredDate('');
    }

    return(
        <div className='new-expense'>
            <form onSubmit={expenseSubmitFormHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' value={enteredValue} onChange={userInputValue}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={userInputAmount}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' value={enteredDate} min="2019-01-01" onChange={userInputDate}/>
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add expense</button>
                </div>
            </form>
        </div>
    )
}