import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users/`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    // console.log(name,email);
    const user = { name, email };
    //Post data to server.
    fetch("http://localhost:5000/users/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        const newUser=[...users,data];
        setUsers(newUser);
        // console.log("Success:", data);
      });
  };
  return (
    <div className="App">
      <h1>User data:{users.length}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="submit" value="Submit" />
      </form>
      {users.map((user) => (
        <li key={user.id}>id:{user.id}
          Name:{user.name} email:{user.email}
        </li>
      ))}
    </div>
  );
}

export default App;
