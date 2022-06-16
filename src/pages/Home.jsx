import React, { useState } from "react";
import contacts from "../data/contacts";
import "../styles/home.css";
import message from "../data/message";
import Accounts from "../components/accounts";

function Home() {
  const [index, setIndex] = useState(0);

  return (
    <div className="home">
      <div className="home-container">
        <div className="about-me">
          <img src={require("../picture/profile.png")} alt="" />
          <div className="message">
            <h1>{message.title}</h1>
            <p>{message.details}</p>
            <div className="accounts">
              {contacts.map((contact, i) => {
                return <Accounts key={i} {...contact} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
