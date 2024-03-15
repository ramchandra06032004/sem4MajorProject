import React from "react";
import "../styles/docCard.css";
import { Link } from "react-router-dom";
const DoctorCard = (props) => {
  return (
    <div className="docCardContainer">
      <img src={props.image} alt="" className="docImage" />
      <div className="name">Name :- {props.name}</div>
      <div className="education">Education :-{props.speciality}</div>
      <div className="fees_per_session">Fees per session :{props.fees}</div>
      <div className="address">Address :- {props.address}</div>
      <Link to={`/bookppoinment/${props.id}/${props.userId}`}>
        <button className="logout-button btn">Book Appointment</button>
      </Link>
    </div>
  );
};

export default DoctorCard;
