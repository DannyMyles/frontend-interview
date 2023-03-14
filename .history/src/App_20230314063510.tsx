import UsersList from "./components/UserList";
import { useGetUsersQuery, useEditUserMutation } from "./usersApi";
import { User} from "./models"
function App() {
  return (
    <div className="App">
      <UsersList />
    </div>
  );
}

export default App;
