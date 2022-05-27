import React, { useState } from "react";
import contacts from "../../helper/data/contacts";
import "../../styles/home.css";

function Home() {
  const [index, setIndex] = useState(0);

  return (
    <div className="home">
      <div>
        <div className="about-me">
          <img
            src="https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis vero qui, sequi quia explicabo, facilis consequatur
            voluptatum voluptas commodi, quae nostrum velit? Maiores facilis
            neque obcaecati exercitationem ratione quidem harum quae dolorem.
          </p>
          <button>KNOW MORE</button>
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
