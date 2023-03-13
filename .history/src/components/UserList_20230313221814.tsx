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
    <h2> Display for User List</h2>
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
                <li>Name:{user.name}</li>
                Email:<li>{user.email}</li>
                Ocuupation:<li>{user.occupation}</li>
                Bio:<li>{user.bio}</li>
              </ul>
            })
          }
        </div>
      )
    }
  </div>
  )
}

export default UsersList
