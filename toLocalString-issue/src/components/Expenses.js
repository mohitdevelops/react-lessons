import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import FilterExpense from "./NewExpense/FilterExpense/FilterExpense";
import { useState } from "react";

export default function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2020");
	const getDateValue = (newFilterDate) => {
		setFilteredYear(newFilterDate);
	};

	return (
		<div>
			<Card className="expenses">
				<FilterExpense
					defaultYear={filteredYear}
					onDateUserHandler={getDateValue}
				/>
				{props.expenseItems.map(function (element) {
					return (
						<ExpenseItem
							expenseKey={element.id}
							expenseTitle={element.title}
							expenseAmount={element.amount}
							expenseDate={element.date}
						/>
					);
				})}								
			</Card>
		</div>
	);
}


/*<ExpenseItem
expenseTitle={props.expenseItems[0].title}
expenseAmount={props.expenseItems[0].amount}
expenseDate={props.expenseItems[0].date}
/>*/