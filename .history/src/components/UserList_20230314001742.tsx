// import SyncLoader from "react-spinners/SyncLoader";
import { useGetUsersQuery, useEditUserMutation } from "../services/userApi";
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
  const { data: users, isLoading, isError } = useGetUsersQuery(0);
  const [editUser, { isLoading: isEditing }] = useEditUserMutation();

  const handleEditUser = async (userId:any, updatedUserData:any) => {
    await editUser(userId).unwrap();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }
    
  return (
    <div>
    {users.map(((user:any) => (
      <div key={user.id}>
        <span>{user.name}</span>
        <button onClick={() => handleEditUser(user.id, { name: "New Name" })}>Edit</button>
      </div>
    )))}
  </div>
  )
}

export default UsersList
