// useState lets us declare state that changes over time
import React, { useState } from "react";
import "./styles.css";

const defaultUsers = [
  { id: 1, name: "Cory", email: "c@ag.com", role: "Admin" },
  { id: 2, name: "Wahid", email: "w@ag.com", role: "User" },
  { id: 3, name: "Frey", email: "f@ag.com", role: "Admin" }
];

const emptyUser = {
  name: "",
  email: "",
  role: ""
};

function App() {
  //Declare state because this info changes over time
  // and we want React to redraw the screen when this data changes.
  const [users, setUsers] = useState(defaultUsers);
  const [user, setUser] = useState(emptyUser);

  //Note that browser passing event //

  function deleteUser(userId) {
    const newUsers = users.filter(user => user.id !== userId);
    setUsers(newUsers);
  }

  function onEmailChange(event) {
    const newUser = { ...user }; // copy user object
    newUser.email = event.target.value;
    setUser(newUser);
  }

  function onChange(event) {
    // This is the calue just typed in
    // event.target.value

    //The input someone typed in
    //event.target.name
    debugger;
  }

  function renderUser(user) {
    return (
      <tr>
        <td>
          {/* Wrapping deleteUser in arrow to avoid immediate execution */}
          <button
            aria-label={"Delete " + user.name}
            onClick={() => deleteUser(user.id)}
          >
            Delete
          </button>
        </td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
      </tr>
    );
  }

  return (
    <>
      <h1>Users</h1>
      <h2>Add User</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input id="name" type="text" onChange={onChange} value={user.name} />
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <br />
          <input id="role" type="text" onChange={onChange} value={user.role} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            type="text"
            onChange={onEmailChange}
            value={user.email}
          />
        </div>
        <input type="submit" value="Add User" />
        <br />
      </form>
      <div />
      <table>
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        {/* using a point free style. JS automatically injects the user param*/}
        <tbody>{users.map(renderUser)}</tbody>
      </table>
    </>
  );
}

export default App;
