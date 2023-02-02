import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactItem = ({ item, handleToggleFavorite }) => {
  
  return (
    <div className="flex flex-col p-3 gap-2 border-2 text-xl">
      <h3>
        <span className="">{item.name}</span>
        <span onClick={()=>handleToggleFavorite(item.id)}>{item.favorite ? " *" : " -"}</span>
        
      </h3>
      <p>{item.phoneNumber}</p>
      <Link to={`/Contact/${item.id}`}>INFO</Link>
    </div>
  );
};

export default ContactItem;
