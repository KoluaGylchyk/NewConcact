import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import AddNewContact from "./pages/AddNewContact/AddNewContact";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";

const App = () => {
  const [allContacts, setAllContacts] = useState([
    { name: "MyPhone", phoneNumber: "+380635063724", id: `${Math.random()}`.split('.')[1] },
    { name: "Bohdan", phoneNumber: "+380635063724", id: `${Math.random()}`.split('.')[1] },
    { name: "Bohdan2", phoneNumber: "+3806350637242", id: `${Math.random()}`.split('.')[1] },
  ]);
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li><Link to="/AddNewContact">AddNewContact</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
       <Route index element={<Home allContacts={allContacts} setAllContacts={setAllContacts} />}/>
       <Route path="/AddNewContact" element={<AddNewContact allContacts={allContacts} setAllContacts={setAllContacts}/>}/>
       <Route  path="/Contact/:id" element={<Contact allContacts={allContacts}setAllContacts={setAllContacts} />}/>
      </Routes>
      
    </div>
  );
};

export default App;
