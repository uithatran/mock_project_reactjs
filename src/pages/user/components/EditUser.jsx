import React, { useState, useEffect } from 'react';

const EditUser = (props) => {
  const [user, setUser] = useState(props.userCurr);

  useEffect(() => {
    setUser(props.userCurr)
  }, [props]);

  const onChangeUser = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateUser(user);
    props.setEdit(false);
  }

  const handleCancel = (e) => {
    e.preventDefault();
    props.setEdit(false);
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
      <div className=""></div>
      <button type="submit" className="btn btn-primary mt-4" onClick={handleSubmit}>Submit</button>
      <button type="submit" className="btn btn-secondary mt-4 px-3 ml" onClick={handleCancel}>Cancel</button >
    </form >
  )
}

export default EditUser;