import React from "react";
import "../styles/problemSolution.css";
import addictionImage from "../assets/addiction2.jpg";
import { FaChevronCircleRight } from "react-icons/fa";

const problemSolution = (props) => {
  return (
    <div className="problemSolution">
      <div className="pcInfo">
        <div className="pcTitle"> {props.title}</div>
        <div className="pcSolution">
          <FaChevronCircleRight className="icon" />
          {props.col1Info1}
          <br />
          <br />
          <FaChevronCircleRight className="icon" />
          {props.col1Info2}
          <br />
          <br />
          <FaChevronCircleRight className="icon" />
          {props.col1Info3}
        </div>
      </div>
      <div className="pcImage">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};
export default problemSolution;
