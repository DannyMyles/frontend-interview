import React, { useState } from "react";
import { useUpdateUserMutation } from "../../services/userApi";
import "./popup.css";

type PopupProps = {
  setOpenModal: Function;
  selectedUser: any;
};

const Popup = ({ setOpenModal, selectedUser }: PopupProps) => {
  // console.log("Selected user", selectedUser)

  const [userData, setUserData] = useState({
    ...selectedUser,
  });

  const [updateUser] = useUpdateUserMutation() || [];
  const { name, email, bio, occupation } = userData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("User id", userData._id)
    const result = await updateUser(userData);
    console.log("Result", result)
    setOpenModal(false)
  };
  return (
    <form className="edit-form-wrapper">
      {/* <h3>EDIT USER</h3> */}
      <div className="input-group">
        <label htmlFor="">Name</label>
        <input type="text" value={name} name="name" onChange={handleChange} />
      </div>
      <div className="input-group">
        <label htmlFor="">Email</label>
        <input type="text" name="email" value={email} onChange={handleChange} />
      </div>
      <div className="input-group">
        <label htmlFor="">Bio</label>
        <textarea name="bio" value={bio} onChange={handleChange}></textarea>
      </div>
      <div className="input-group">
        <label htmlFor="">Occupation</label>
        <input
          type="text"
          name="occupation"
          value={occupation}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="submit-button" onClick={handleUpdate}>
        <p>Update</p>
      </button>
    </form>
  );
};

export default Popup;
