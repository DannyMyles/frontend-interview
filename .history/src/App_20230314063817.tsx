import UsersList from "./components/UserList";
import { useGetUsersQuery, useEditUserMutation } from "./services/userApi";
function App() {
  const { data: users, isLoading, isError } = useGetUsersQuery();
  const [editUser, { isLoading: isEditing }] = useEditUserMutation();
  const handleEditUser = async (userId: string, updatedUserData: User) => {
    const updatedUser = { ...userModels.user, ...updatedUserData };
    await editUser({ id: userId, updatedUserData: updatedUser }).unwrap();
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="App">
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <span>{user.name}</span>
            <button
              onClick={() =>
                handleEditUser(user.id, {
                  name: "New Name",
                  email: "newemail@example.com",
                })
              }
            >
              Edit
            </button>
          </div>
        ))}
      </div>
      {/* <UsersList /> */}
    </div>
  );
}

export default App;
