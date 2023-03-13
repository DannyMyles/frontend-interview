import { useUpdateUserMutation } from "../services/userApi";

const UpdateUser = () => {
const [updateUser, { isLoading, isError }] = useUpdateUserMutation();

const handleUpdate = (userId: any, newData: any) => {
    updateUser({ userId, userData: newData });
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

export default UpdateUser
