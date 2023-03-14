import UsersList from "./components/UserList";
import { useGetUsersQuery,useEditUserMutation } from "./services/userApi";
function App() {
  const { data: users, isLoading, isError } = useGetUsersQuery();
  const [editUser, { isLoading: isEditing }] = useEditUserMutation();
  const handleEditUser = async (userId: string, updatedUserData: User) => {
    const updatedUser = { ...userModels.user, ...updatedUserData };
    await editUser({ id: userId, updatedUserData: updatedUser }).unwrap();
  };

  return (
    <div className="App">
      <UsersList />
    </div>
  );
}

export default App;
