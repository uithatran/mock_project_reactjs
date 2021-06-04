import React, { useState } from 'react';

const AddUser = (props) => {
  const initUser = {
    id: null,
    name: "",
    username: ""
  }
  const [user, setUser] = useState(initUser);

  const resetForm = () => {
    setUser({ ...initUser })
  }

  const onChangeUser = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (user.name && user.username) {
      props.addUser(user);
    } else {
      console.info("Please enter all information in the form!!!");
    }
    resetForm();
  }


  return (
    <form className="mt-3">
      <div className="form-group mt-2">
        <label>Name</label>
        <input type="text" className="form-control" name="name" placeholder="Enter name" value={user.name} onChange={onChangeUser} />
      </div>
      <div className="form-group mt-2">
        <label>Username</label>
        <input type="text" className="form-control" name="username" placeholder="Enter Username" value={user.username} onChange={onChangeUser} />
      </div>
      <button type="submit" className="btn btn-primary mt-4" onClick={handleSubmit}>Add user</button>
    </form>
  )
}

export default AddUser;