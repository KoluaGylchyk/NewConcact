import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactItem = ({ item }) => {
  console.log(item);
  return (
    <div className="flex flex-col p-3 gap-2 border-2 ">
      <h3 >{item.name}</h3>
      <p>{item.phoneNumber}</p>
      <Link to={`/Contact/${item.id}`}>INFO</Link>
    </div>
  );
};

export default ContactItem;
