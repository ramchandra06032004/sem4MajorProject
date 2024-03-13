import React from "react";
import "../styles/problemHeroDiv.css";
import AddictionImage from "../assets/addiction.jpg";

const problemHeroDiv = (props) => {
  return (
    <div className="peoblemHeroDivContainer">
      <div className="problemInfo">
        <div className="subSentence">Mental Health</div>
        <div className="problemName">{props.name}</div>
        <div className="problemDiscription">{props.info}</div>
        <button>Read More</button>
      </div>
      <div className="problemImage">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};

export default problemHeroDiv;
