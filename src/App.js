import React from "react";
import Contact from "./components/Contact";
import "./styles/app.css";
import ContactAdder from "./components/ContactAdder";

const App = () => {
  const ContactDetails = [
    {
      name: "Biraj",
      number: "9841000775",
      location: "Kathmandu",
    },
    {
      name: "Rashmi",
      number: "9841686914",
      location: "Korea",
    },
    {
      name: "Rabin",
      number: "9841230775",
      location: "Nuwakot",
    },
  ];
  return (
    <>
      <div className="contact_adder">
        <ContactAdder />
      </div>
      <div className="contact_list">
        <h3>Contact List: </h3>
        <Contact data={ContactDetails[0]} />
        <Contact data={ContactDetails[1]} />
        <Contact data={ContactDetails[2]} />
      </div>
    </>
  );
};

export default App;
