import React, { useState, useEffect } from "react";
import Navbar from "../Components/navbar.jsx";
import Footer from "../Components/Footer.jsx";
import "../styles/AppoinmentForm.css";
import { useParams } from "react-router-dom";

const AppoinmentForm = ({}) => {
  const [docData, setDocData] = useState({});
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [facedProblem, setFacedProblem] = useState("");
  const [email, setEmail] = useState("");
  const { id, userId } = useParams();
  const getSingleDoctor = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/doctors/${id}`
      );
      const result = await response.json();

      setDocData(result);
    } catch (error) {}
  };
  useEffect(() => {
    getSingleDoctor();
  }, []);

  const handleAppoinment = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/appointments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            doctor: id, // Send the doctor's _id as the doctorId
            userId: userId,
            mobile: mobile,
            problem: facedProblem,
            email: email,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not book appointment.");
      }

      // Clear the form
      setFullName("");
      setMobile("");
      setFacedProblem("");

      // Show a success message
      alert("Appointment booked successfully!");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };
  return (
    <div>
      <Navbar />

      <form className="AppoinmentForm" onSubmit={handleAppoinment}>
        <input
          className="input"
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="Enter mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input problemm"
          type="text"
          placeholder="Which Problem you are facing Describe in breif"
          value={facedProblem}
          onChange={(e) => setFacedProblem(e.target.value)}
        />
        <button className="input submitbtn" type="submit">
          Book Appoinment
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default AppoinmentForm;
