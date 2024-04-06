import React, { useState } from "react";

const ContactAdder = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");

  const onClickHandler = () => {
    const contactData = { name: name, location: location, number: number };
  };

  return (
    <div className="contact_adder">
      <h2>Contact Adder:</h2>
      <div className="field">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contact"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <button onClick={onClickHandler}>Add Contact</button>
    </div>
  );
};

export default ContactAdder;
