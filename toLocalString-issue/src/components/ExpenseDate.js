import './ExpenseDate.css';
import Card from './Card';

export default function ExpenseDate(props) {
	const month = props.expenseDate.toLocaleString("en-US", { month: "long" });
	const day = props.expenseDate.toLocaleString("en-US", { day: "2-digit" });
	const year = props.expenseDate.getFullYear();
	return (
		<Card className="expense-date">
			<div className="expense-date__month">{month}</div>
			<div className="expense-date__year">{year}</div>
			<div className="expense-date__day">{day}</div>			
		</Card>		
	);
	
}


