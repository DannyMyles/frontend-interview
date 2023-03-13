import SyncLoader from "react-spinners/SyncLoader";
import "./users.css"
// import { Users } from "../../models/;

const override: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10rem",
  marginBottom: "10rem",
};
const UsersList = () => {
  
    
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

export default UsersList
