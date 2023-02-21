import React from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';


function App() {

  return (
    <div>
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
