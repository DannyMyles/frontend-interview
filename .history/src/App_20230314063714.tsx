import UsersList from "./components/UserList";
import { useGetUsersQuery,useEditUserMutation } from "./services/userApi";
function App() {
  const { data: users, isLoading, isError } = useGetUsersQuery();
  const [editUser, { isLoading: isEditing }] = useEditUserMutation();
  return (
    <div className="App">
      <UsersList />
    </div>
  );
}

export default App;
