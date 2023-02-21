import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';


function App() {
  const [usersData, setUsersData] = useState([]);

  const addUserHandler = user => {
    setUsersData(prevData => {
      return [...prevData, {id: user.id, name: user.name, age: user.age}];
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersData} />
    </div>
  );
}

export default App;
