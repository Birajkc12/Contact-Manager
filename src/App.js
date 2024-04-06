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
    {
      name: "Hari",
      number: "9231230775",
      location: "Jhapa",
    },
  ];
  const addContactData = (contactData) => {
    ContactDetails.push(contactData);
    console.log(ContactDetails);
  };
  return (
    <>
      <div className="contact_adder">
        <ContactAdder onContactAdded={addContactData} />
      </div>
      <div className="contact_list">
        <h3>Contact List: </h3>
        {ContactDetails.map((data) => (
          <Contact data={data}></Contact>
        ))}
      </div>
    </>
  );
};

export default App;
