import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../../components/MyButton/MyButton";

const AddNewContact = ({ allContacts, setAllContacts }) => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({
    name: "",
    phoneNumber: "",
    id: "",
  });

  const [errors,setErrors]= useState({
    nameError:"",
    phoneNumberError:"",
  })

  const handleOnChange =(e)=>{
    setInputValue((prev)=>{
      return {...prev,[e.target.name]: e.target.value}
    })
  }

  const handleSavePhone = (e)=>{
    e.preventDefault();
    if(inputValue.name.length <=0){
      setErrors((prev)=>{
        return {...prev, nameError:"Min length 1 literi"};
      });
      return;
    }else{
      if(errors.nameError.length > 0){
        setErrors((prev)=>{
          return{...prev, nameError:""};
        })
      }
    }

    if(inputValue.phoneNumber.length <=0){
      setErrors((prev)=>{
        return{...prev, phoneNumberError:"Min length 1 literi"};
      });
      return;
    }else{
      if(errors.phoneNumberError.length > 0){
        setErrors((prev)=>{
          return{...prev,phoneNumberError:""}
        })
      }
    }
    setAllContacts((prev)=>{
      console.log('ok')
      return [
        ...prev,{
          name:inputValue.name,
          phoneNumber:inputValue.phoneNumber,
          id:`${Math.random()}`.split('.')[1],
        }
      ]
    })
    navigate('/');
  }
  
  return (
    <div>
      <form onSubmit={handleSavePhone}>
        <div>
          <label htmlFor="InputNameNewContact">Name</label>
          <input type="text" id="InputNameNewContact" name="name" value={inputValue.name} onChange={handleOnChange} />
        </div>
        <div>{errors.nameError}</div>
        <div>
          <label htmlFor="InputPhomeNumberNewContact">Number</label>
          <input type="text" id="InputPhomeNumberNewContact" name="phoneNumber" value={inputValue.phoneNumber} onChange={handleOnChange} />
        </div>
        <div>{errors.phoneNumberError}</div>
        <MyButton type="submit" title="Save"/>
      </form>
    </div>
  );
};

export default AddNewContact;
