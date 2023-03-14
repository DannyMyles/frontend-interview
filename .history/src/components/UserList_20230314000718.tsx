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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }
    
  return (
    {users.map(((:)) => (

  )
}

export default UsersList
