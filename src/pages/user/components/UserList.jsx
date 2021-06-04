import React from 'react';

const UserList = (props) => {
  const deleteUser = (index) => {
    props.deleteUser(index);
  }

  const editUser = (index) => {
    props.editUser(index);
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">UserName</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ?
          (props.users.map((user, index) => {
            const { id, name, username } = user;
            return (<tr key={id}>
              <th>{id}</th>
              <th>{name}</th>
              <th>{username}</th>
              <th>
                <button className="btn btn-secondary mx-1 mt-0" onClick={() => deleteUser(index)}>Delete</button>
                <button className="btn btn-primary" onClick={() => editUser(index)}>Edit</button>
              </th>
            </tr>)
          })) : (
            <tr>
              <td>No users found</td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export default UserList;