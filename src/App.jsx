import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import AddNewContact from "./pages/AddNewContact/AddNewContact";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";

const App = () => {
  const [allContacts, setAllContacts] = useState([
    {
      name: "MyPhone",
      phoneNumber: "+380635063724",
      id: `${Math.random()}`.split(".")[1],
      favorite: false,
    },
    {
      name: "Bohdan",
      phoneNumber: "+380631063921",
      id: `${Math.random()}`.split(".")[1],
      favorite: false,
    },
    {
      name: "Maryna",
      phoneNumber: "+380123335544",
      id: `${Math.random()}`.split(".")[1],
      favorite: false,
    },
    {
      name: "Mather",
      phoneNumber: "+380635063724",
      id: `${Math.random()}`.split(".")[1],
      favorite: false,
    },
  ]);
  return (
    <div className=" bg-gradient-to-r from-sky-500 to-indigo-600 text-xl">
      <div>
        <nav className="flex underline  gap-2 p-2 item-end h-full">
          <ul className="">
            <li>
              <Link to="/AddNewContact">AddNewContact</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route
          index
          element={
            <Home allContacts={allContacts} setAllContacts={setAllContacts} />
          }
        />
        <Route
          path="/AddNewContact"
          element={
            <AddNewContact
              allContacts={allContacts}
              setAllContacts={setAllContacts}
            />
          }
        />
        <Route
          path="/Contact/:id"
          element={
            <Contact
              allContacts={allContacts}
              setAllContacts={setAllContacts}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
