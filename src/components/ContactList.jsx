import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({ allContacts, setAllContacts }) => {
  return (
    <div className="w-full">
      {allContacts.length
        ? allContacts.map((item) => (
            <ContactItem item={item} key={item.id} allContacts={allContacts} />
          ))
        : "EMPTY"}
    </div>
  );
};

export default ContactList;
