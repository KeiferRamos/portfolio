import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import contacts from "../../helper/data/contacts";
import "../../styles/home.css";

function Home() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="home">
      <div>
        <div className="about-me">
          <img src={require("../../picture/profile.png")} alt="" />
          <div>
            <h1> Hello world!</h1>
            <h3>Keifer Ramos is my name.</h3>
            <p>
              Thank you for taking the time to look over my portfolio. This
              portfolio was created to demonstrate my abilities. This portfolio
              contains my most successful projects, so be sure to check it out.
            </p>
          </div>
          <button onClick={() => navigate("/projects")}>Click here</button>
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
