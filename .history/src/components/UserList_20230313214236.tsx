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
  const {data, isloading,isSuccess} = u
    
  return (
    <div>
    <h2>User List</h2>
    {
      isloading && <h2><SyncLoader color="#0161a4" cssOverride={override} /></h2>
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
