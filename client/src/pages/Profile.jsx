import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/footer.jsx";
import "../styles/Profile.css";
import userImage from "../assets/img4.webp";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const [appointment, setAppointment] = useState("");
  const [doctor, setDoctor] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user
        let response = await fetch(`http://localhost:3000/api/v1/user`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });
        let data = await response.json();
        setUser(data);

        // Fetch appointment
        response = await fetch(`http://localhost:3000/api/v1/appointment`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });
        data = await response.json();
        console.log(data);
        setAppointment(data);

        // Fetch doctor
        response = await fetch(`http://localhost:3000/api/v1/doctor`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: data[0].doctor }),
        });
        data = await response.json();
        setDoctor(data);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchData();
  }, [id]);
  return (
    <div>
      <Navbar />

      <div className="userRow">
        <div className="userLeft">
          <img src={userImage} alt="" />
        </div>
        <div className="usereight">
          <div className="name">{user.name}</div>
          <div className="Email">{user.email}</div>
        </div>
      </div>
      <div className="appoinmentContainer">
        {appointment &&
          appointment.map((item, indx) => {
            return (
              <div className="appoinments">
                <p>
                  <span>Status of Appointment:</span> <br />
                  <span> {item.status}</span>
                </p>
                <p>
                  <span>Doctor Name:</span> <br />
                  <span>{doctor.name}</span>
                </p>
                <p>
                  <span>Clinic Address:</span> <br />
                  <span>{doctor.address}</span>
                </p>
                <p>
                  <span>Suffering From:</span> <br />
                  <span>{item.problem}</span>
                </p>
                <p>
                  <span>Appointment Date:</span> <br />
                  <span>{item.createdAt}</span>
                </p>
              </div>
            );
          })}
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
