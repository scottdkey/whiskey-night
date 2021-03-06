import React, { useState, useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { UserContext } from "../../App";
import "../scss/BringModal.scss";
import "../scss/Modal.scss";

const BringAllModal = ({ name, toggleShow, handleSubmit, show }) => {
  const [user, setUser] = useContext(UserContext);
  const [names, setNames] = useState("");

  const handleChange = e => {
    setNames(e.target.value);
  };

  const contextSubmit = e => {
    e.preventDefault();
    setUser(names);
    handleSubmit(names);
    toggleShow();
  };

  useEffect(() =>{
    setNames(user)
  },[user])

  return (
    <>
      <Modal show={show} onHide={toggleShow} backdrop="static">
        <form className="custom-modal" onSubmit={contextSubmit}>
          <div className="header">
            <div className="title">Bringing</div>
            <button
              className="bttn cancel"
              type="button"
              onClick={toggleShow}
            />
          </div>
          <div className="body">
            <div className="bringing">
              <div className="question">Who is bringing {name}?</div>
              <div className="name-input-container">
                <input
                  style={{ textAlign: "center" }}
                  className="name-input"
                  name="bringing-field"
                  type="text"
                  value={names}
                  onChange={handleChange}
                  placeholder="Name(s)"
                  required
                  autoFocus
                />
              </div>
              <div className="name-support">Supports comma seperated names</div>
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="bttn submit">
              Add Name
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default BringAllModal;
