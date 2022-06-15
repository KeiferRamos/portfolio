import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import contacts from "../../data/contacts";
import "../../styles/home.css";
import message from "../../data/message";

function Home() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="home">
      <div>
        <div className="about-me">
          <img src={require("../../picture/profile.png")} alt="" />
          <div>
            <h1>{message.title}</h1>
            <p>{message.details}</p>
          </div>
        </div>
        <div className="contacts">
          <div className="logo-container">
            {contacts.map((contact, i) => (
              <p
                key={i}
                onClick={() => setIndex(i)}
                style={{ color: `${i == index ? "#1c3e44" : "#dfeff2"}` }}
              >
                {contact.logo}
              </p>
            ))}
          </div>
          <p>{contacts[index].name}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
