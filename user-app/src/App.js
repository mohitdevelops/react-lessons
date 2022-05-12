import React, { useState } from 'react';

import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';


function App() {

  const [usersList, setUsersList] = useState([])

  const addUserHandler = function(userName, userAge){
    setUsersList(prevList => {    
      return [...prevList, {name:userName, age:userAge, id: Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList allUsers={usersList}/>
    </div>
  );
}

export default App;
