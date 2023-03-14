import UsersList from "./components/UserList";
import { useGetUsersQuery, useEditUserMutation } from ".";
function App() {
  return (
    <div className="App">
      <UsersList />
    </div>
  );
}

export default App;
