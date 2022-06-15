import React from "react";
import skills from "../data/skills";
import "../styles/skills.css";

function Skills() {
  return (
    <div>
      {skills.map((skill, index) => {
        const { name, image, percent } = skill;
        return (
          <div className="skills-container" key={index}>
            <img src={image} alt="skill image" />
            <p>{name}</p>
            <div className="percent-holder">
              <div className="percent" style={{ width: percent }}></div>
              <p className="value">{percent}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
