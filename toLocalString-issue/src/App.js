import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const TEST_EXP_DATA = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 250,
		date: new Date(2020, 7, 14),
	},
	{
		id: "e2",
		title: "New TV",
		amount: 50000,
		date: new Date(2021, 2, 12),
	},
	{
		id: "e3",
		title: "Car Insurance",
		amount: 1500,
		date: new Date(2021, 2, 28),
	},
	{
		id: "e4",
		title: "New Desk (Wooden)",
		amount: 2500,
		date: new Date(2021, 5, 12),
	},
];

export default function App() {	

	const [expenses, setExpenses] = useState(TEST_EXP_DATA);

	const newExpenseData = (expense) => {
		setExpenses(testFunction => {
			return [expense, ...testFunction];
		});
	}


	// return React.createElement("div",
	// {},
	// React.createElement(NewExpense, {}, ExpenseForm),
	// React.createElement(Expenses, {expenseItems: expenses} )	
	// );

	return <div>
		<NewExpense onNewExpenseDataSubmit={newExpenseData}/>
		<Expenses expenseItems={expenses}/>
	</div>
}

