import { CSSProperties, useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import { User } from "../models/users.model";
import { useUsersQuery } from "../services/userApi";
import Modal from "./Modal/Modal";
import Popup from "./Popup/Popup";
// import SingleUser from "./User";
import "./users.css";

const override: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10rem",
  marginBottom: "10rem",
};
const UsersList = () => {
  const { data, isLoading, isSuccess, error } = useUsersQuery();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>();
  
  // console.log("Data", data);
  // console.log("Open", openModal)

  return (
    <div className="main-container">
      <h2> Display for Users List</h2>
      {isLoading && <SyncLoader color="#ff0000" cssOverride={override} />}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <div>
          {data.map((user) => {
            return (
              <ul className="users" key={user._id}>
                <button
                  className="my-button"
                  onClick={()=>{ setOpenModal(true); setSelectedUser(user)}}
                >
                  Edit
                </button>
                <li className="special">Name: {user.name}</li>
                <li>Email: {user.email}</li>
                <li>Ocuupation: {user.occupation}</li>
                <li>Bio: {user.bio}</li>
              </ul>
            );
          })}
          {openModal && (
          <Modal setOpenModal={setOpenModal}>
            <Popup
              selectedUser={selectedUser}
              setOpenModal={setOpenModal}
            />
          </Modal>
        )}
        </div>
      )}
    </div>
  );
};

export default UsersList;
