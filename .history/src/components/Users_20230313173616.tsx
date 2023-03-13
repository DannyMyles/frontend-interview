import { useState } from "react";
import "./users.css"

interface User {
    id: number;
    name: string;
    email: string;
    "occupation": "Geological Engineer",
    "bio":
  
  }
const Users = () => {
    const [users, setUsers] = useState<User[]>([]);
    
  return (
    <div>
    <h2>User List</h2>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <span>{user.name}</span>
          <span>{user.email}</span>
          <button className="edit-btn">Edit</button>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Users
