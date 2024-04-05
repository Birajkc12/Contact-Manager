import React, { useState } from "react";

const ContactAdder = () => {
  const [name, setName] = useState("Raj");
  const onClickHandler = () => {
    setName("Biraj");
  };
  return (
    <>
      <div className="simpleAdder">
        Contact Adder:
        <button onClick={onClickHandler}>Click Me !</button>
        <div>
          My Name is {name}.{name === "Biraj" ? "I live in Kathmandu" : ""}
        </div>
      </div>
    </>
  );
};

export default ContactAdder;
