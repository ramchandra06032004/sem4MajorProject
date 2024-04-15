import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ApoinmentCard.css";

const ApoinmentCard = (props) => {
  const [status, setStatus] = useState("");
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    setStatus(props.appointment.status);
  }, [props.appointment.status]);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/user/${props.appointment.patient}`
        );
        setPatient(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPatient();
  }, [props.appointment.patient]);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSave = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/v1/appointment/status`,
        {
          id: props.appointment._id,
          status: status,
        }
      );
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const date = new Date(props.appointment.createdAt).toLocaleDateString();

  return (
    <div className="ApoinmentCard">
      <div className="ele">
        Name :- <br /> {patient ? patient.name : "Loading..."}
      </div>
      <div className="ele">
        Suffering from :- <br /> {props.appointment.problem}
      </div>
      <div className="ele">
        Date :- <br /> {date}
      </div>
      <div className="ele">
        Status :- <br />
        {status && (
          <select value={status} onChange={handleStatusChange}>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        )}
        <button className="saveBtn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default ApoinmentCard;
