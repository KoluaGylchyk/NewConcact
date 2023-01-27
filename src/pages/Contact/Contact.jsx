import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import MyButton from "../../components/MyButton/MyButton";
import Modal from "../../components/Modal/Modal";

const Contact = ({ allContacts, setAllContacts }) => {
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [newContact, setNewContact] = useState(null);
  const [inputValues, setInputValues] = useState({
    inputNameValue: "",
    inputPhoneValue: "",
  });

  useEffect(() => {
    console.log("+");
    const NewContactItem = allContacts.find((item) => item.id == params.id);
    setNewContact(NewContactItem);
  }, []);

  const handleToggleModal = () => {
    setIsOpen(true);
    setInputValues({
      inputNameValue: "",
      inputPhoneValue: "",
    });
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOnChange = (e) => {
    setInputValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSaveContact = (e) => {
    e.preventDefault();

    setAllContacts((prev) => {
      const newContacts = [...prev].map((con) => {
        if (con.id == newContact?.id) {
          con.name = inputValues.inputNameValue;
          con.phoneNumber = inputValues.inputPhoneValue;
        }
        return con;
      });
      return newContacts;
    });
    handleCloseModal();
  };

  return (
    <div>
      <div className="flex p-3">
        {newContact?.name}
        {newContact?.phoneNumber}
      </div>
      <div>
        <MyButton onClick={handleToggleModal} title="Edit" />
        <MyButton title="Delete" />
      </div>
      {isOpen ? (
        <Modal isOpen={isOpen} setIsOpen={handleToggleModal}>
          <div>
            <button
              className="border-2 p-2 border-yellow-100 rounded-lg shadow-lg"
              onClick={handleCloseModal}
            >
              Close
            </button>
            <h3>Edit Contact</h3>
            <form onSubmit={handleSaveContact}>
              <div>
                <label htmlFor="editInputName">Name</label>
                <input
                  type="text"
                  id="editInputName"
                  name="inputNameValue"
                  value={inputValues.inputNameValue}
                  onChange={handleOnChange}
                />
                <div></div>
              </div>
              <div>
                <label htmlFor="editInputNumber">Number</label>
                <input
                  type="text"
                  id="editInputNumber"
                  name="inputPhoneValue"
                  value={inputValues.inputPhoneValue}
                  onChange={handleOnChange}
                />
                <div></div>
              </div>
              <MyButton onClick={handleSaveContact} title="Save" />
            </form>
          </div>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default Contact;
