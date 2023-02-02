import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import MyButton from "../../components/MyButton/MyButton";
import Modal from "../../components/Modal/Modal";
import ConfirmModal from "../../components/Modal/ConfirmModal";

const Contact = ({ allContacts, setAllContacts }) => {
  const navigate = useNavigate()
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [newContact, setNewContact] = useState(null);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [errors, setErrors] = useState({
    nameError: "",
    phoneError: "",
  });

  const [inputValues, setInputValues] = useState({
    inputNameValue: "",
    inputPhoneValue: "",
  });

  useEffect(() => {
    console.log("+");
    const NewContactItem = allContacts.find((item) => item.id == params.id);
    if(NewContactItem == undefined){
      navigate('/');
      return
    }
    setNewContact(NewContactItem);
    setInputValues({
      inputNameValue:NewContactItem.name,
      inputPhoneValue:NewContactItem.phoneNumber,
    })
  }, []);

  const handleOpenModal = () => {
    setIsOpen(true);
    
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setInputValues({
      inputNameValue:newContact.name,
      inputPhoneValue:newContact.phoneNumber,
    })
    
  };

  const handleOnChange = (e) => {
    setInputValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleConfirmDeleteContact = () => {
    setAllContacts((prev) => {
      const filterdContact = [...prev].filter((item)=>item.id !== newContact?.id);
      return filterdContact
      
    });
    setIsConfirmModalOpen(false)
    navigate('/')
  };
  const handleDiscardDeleteContact = () => {
    setIsConfirmModalOpen(false);
  };
  const handleOpenConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  const handleSaveContact = (e) => {
    e.preventDefault();
    if (inputValues.inputNameValue.length == 0) {
      setErrors((prev) => {
        return { ...prev, nameError: "min lenght 1 simvol" };
      });
      return;
    } else {
      if (errors.nameError.length > 0) {
        setErrors((prev) => {
          return { ...prev, nameError: "" };
        });
      }
    }

    if (inputValues.inputPhoneValue.length == 0) {
      setErrors((prev) => {
        return { ...prev, phoneError: "min lenght 1 simvol" };
      });
      return;
    } else {
      if (errors.phoneError.length > 0) {
        setErrors((prev) => {
          return { ...prev, phoneError: "" };
        });
      }
    }

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
        <MyButton onClick={handleOpenModal} title="Edit" />
        <MyButton onClick={handleOpenConfirmModal} title="Delete" />
      </div>
      {isOpen ? (
        <Modal isOpen={isOpen} setIsOpen={handleOpenModal}>
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
                <div>{errors.nameError}</div>
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
                <div>{errors.phoneError}</div>
              </div>
              <MyButton onClick={handleSaveContact} title="Save" />
            </form>
          </div>
        </Modal>
      ) : (
        ""
      )}
      {isConfirmModalOpen ? (
        <ConfirmModal
          isOpen={isConfirmModalOpen}
          title={"Впевнений,що хочеш удалити контакт?"}
        >
          <button onClick={handleConfirmDeleteContact}>Так</button>
          <button onClick={handleDiscardDeleteContact}>Ні</button>
        </ConfirmModal>
      ) : (
        ""
      )}
    </div>
  );
};

export default Contact;
