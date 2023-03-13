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
    {
      isloading && <h2>...Loading</h2>
    }
    {
      error 
    }
  </div>
  )
}

export default UsersList
