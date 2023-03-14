// import SyncLoader from "react-spinners/SyncLoader";
import { useGetUsersQuery, useEditUserMutation } from "./usersApi";
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
  const { data: users, isLoading, isError } = useGetUsersQuery();
  const [editUser, { isLoading: isEditing }] = useEditUserMutation();

  const handleEditUser = async (userId, updatedUserData) => {
    await editUser(userId, updatedUserData).unwrap();
  };
    
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
            })
          }
        </div>
      )
    }
  </div>
  )
}

export default UsersList
