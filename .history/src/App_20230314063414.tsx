import UsersList from "./components/UserList";
import { useGetUsersQuery, useEditUserMutation } from "./usersApi";
import {}
function App() {
  return (
    <div className="App">
      <UsersList />
    </div>
  );
}

export default App;
