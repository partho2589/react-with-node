import { useEffect, useState } from 'react';
import './App.css';



function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div className="App">
      <h1> My first node website.{users.length}</h1>
      <ul>
        {
          users.map(user => <li key={user.id} > Name: {user.name}, Email: {user.email}</li>)
        }
      </ul>

    </div>
  );
}

export default App;
