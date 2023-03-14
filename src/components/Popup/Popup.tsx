import React from "react";

type PopupProps = {
  setOpenModal: Function;
  selectedUser: any;
};

const Popup = ({ setOpenModal, selectedUser }: PopupProps) => {
  // console.log("Selected user", selectedUser)
  return (
    <form>
      <div>
        <label htmlFor="">Name</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input type="text" />
      </div>
    </form>
  );
};

export default Popup;
