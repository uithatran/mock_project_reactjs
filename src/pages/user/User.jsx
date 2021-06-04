import React, { useState } from 'react';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import UserList from './components/UserList';
import data from '../../data';

const User = (props) => {
  const initUser = {
    id: null,
    name: '',
    username: ''
  };
  const [users, setUsers] = useState(data);
  const [userCurr, setUserCurr] = useState(initUser);
  const [edit, setEdit] = useState(false);

  const handleAddUser = (user) => {
    const newUser = {
      ...user,
      id: new Date().valueOf()
    }

    setUsers([
      ...users,
      newUser
    ])
  }

  const handleDeleteUser = (index) => {
    setUsers([
      ...users.slice(0, index),
      ...users.slice(index + 1)
    ])
  }

  const handleEditUser = (idx) => {
    const user = users.find((user, index) => index === idx)
    setUserCurr(user);
    setEdit(true);
  }

  const handleUpdate = (userUpdate) => {
    const index = users.findIndex(user => user.id === userUpdate.id);
    setUsers([
      ...users.slice(0, index),
      {
        ...userUpdate
      },
      ...users.slice(index + 1)
    ])
  }

  return (
    <div className="UserComponent container">
      <h2>React CRUD App with Hooks</h2>
      <div className="container-fluid">
        <div className="row">
          {
            edit ? (
              <div className="col">
                <h3>Edit User</h3>
                <EditUser userCurr={userCurr} setEdit={setEdit} updateUser={handleUpdate}></EditUser>
              </div>
            ) : (
              <div className="col">
                <h3>Add User</h3>
                <AddUser addUser={handleAddUser}></AddUser>
              </div>
            )
          }
          <div className="col">
            <h3>View users</h3>
            <UserList users={users} deleteUser={handleDeleteUser} editUser={handleEditUser} ></UserList>
          </div>
        </div>
      </div>
    </div >
  );
}

export default User