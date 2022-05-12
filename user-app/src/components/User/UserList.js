import Card from "../UI/Card";
import UserListClass from './UserList.module.css';

export default function UserList(props) {
	return (
		<Card className={UserListClass.users}>
			<ul>
				{props.allUsers.map((user) => {
					return (
						<li key={user.id}>
							{user.name} ({user.age} years old)
						</li>
					);
				})}
			</ul>
		</Card>
	);
}
