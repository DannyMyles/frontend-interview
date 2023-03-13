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
    <div>
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
              return <div className="users" key={user.id}>
                <span>{user.name}</span>
                <span>{user.email}</span>
                <span>{user.occupation}</span>
                <span>{user.bio}</span>
              </div>
            })
          }
        </div>
      )
    }
  </div>
  )
}

export default UsersList
