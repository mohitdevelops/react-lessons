import Card from "../UI/Card";
import AddUserClass from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

export default function AddUser(props) {
	const [userNameInput, setUserNameInput] = useState("");
	const [userAgeInput, setUserAgeInput] = useState("");
	const [error, setError] = useState();

	const userNameInputHandler = (event) => {
		setUserNameInput(event.target.value);
	};
	const userAgeInputHandler = (event) => {
		setUserAgeInput(event.target.value);
	};

	const addUserHandler = function (event) {
		event.preventDefault();

		if (userNameInput.trim().length === 0 || userAgeInput.trim().length === 0) {
			setError({
				title: "Empty Input",
				message: "Please enter valid name and age!",
			});
		}
		if (parseInt(userAgeInput) < 1) {
			setError({
				title: "Invalid age!",
				message: "Please enter valid age!",
			});
			return;
		}

		props.onAddUser(userNameInput, userAgeInput);
		setUserAgeInput("");
		setUserNameInput("");
	};

	const errorHandler = () =>{
		setError(null);
	}

	return (
		<div>
			{error && <ErrorModal modalTitle={error.title} modalMessage={error.message} errorAction={errorHandler}/>}
			<Card className={AddUserClass.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						value={userNameInput}
						onChange={userNameInputHandler}
					></input>
					<label htmlFor="age">Age (Years)</label>
					<input
						type="number"
						id="age"
						value={userAgeInput}
						onChange={userAgeInputHandler}
					></input>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
}
