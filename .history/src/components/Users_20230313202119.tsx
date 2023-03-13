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
      error && <h2>Something went wrong</h2>
    }
    {
      isSuccess && (
        <div>
          {
            data.map((user: any) =>{
              return <div className="users"></div>
            })
          }
        </div>
      )
    }
  </div>
  )
}

export default UsersList
