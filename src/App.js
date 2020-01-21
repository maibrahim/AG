// useState lets us declare state that changes over time
import React, { useState } from "react";
import "./styles.css";

const defaultUsers = [
  { id: 1, name: "Cory", email: "c@ag.com", role: "Admin" },
  { id: 2, name: "Wahid", email: "w@ag.com", role: "User" },
  { id: 3, name: "Frey", email: "f@ag.com", role: "Admin" }
];

function App() {
  //Declare state because this info changes over time
  // and we want React to redraw the screen when this data changes.
  const [users, setUsers] = useState(defaultUsers);

  //Note that browser passing event //

  function deleteUser(userId) {
    const newUsers = users.filter(user => user.id !== userId);
    setUsers(newUsers);
  }

  function renderUser(user) {
    return (
      <tr>
        <td>
          {/* Wrapping deleteUser in arrow to avoid immediate execution */}
          <button onClick={() => deleteUser(user.id)}>Delete</button>
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
