// import SyncLoader from "react-spinners/SyncLoader";
import { useUsersQuery } from "../services/userApi";
import "./users.css"
// import { Users } from "../../models/;

// const override: CSSProperties = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   marginTop: "10rem",
//   marginBottom: "10rem",
// };
const UsersList = () => {
  const {data, isLoading, isSuccess, error} = useUsersQuery(0)
    
  return (
    <div className="main-container">
    <h2> Display for Users List</h2>
    {
      isLoading && <h2>... Loading</h2>
    }
    {
      error && <h2>Something went wrong</h2>
    }
    {
      isSuccess && (
        <div>
          {
            data.map((user: any) =>{
              return <ul className="users" key={user.id}>
                <li>Name: {user.name}</li>
                <li>Email: {user.email}</li>
                <li>Ocuupation: {user.occupation}</li>
                <li>Bio: {user.bio}</li>
              </ul>
              <button>{}</button>
            })
          }
        </div>
      )
    }
  </div>
  )
}

export default UsersList
