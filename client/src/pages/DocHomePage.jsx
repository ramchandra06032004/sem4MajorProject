import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/HomePage.css";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import ApoinmentCard from "../Components/ApoinmentCard";

const DocHomePage = () => {
  const { name } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/doctor/${name}`
        );

        setDoctor(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDoctor();
  }, [name]);

  useEffect(() => {
    if (doctor) {
      const fetchAppointments = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/api/v1/appointments/${doctor._id}`
          );

          setAppointments(response.data);
        } catch (err) {
          console.error(err);
        }
      };

      fetchAppointments();
    }
  }, [doctor]);

  return (
    <div className="docHomepage">
      <Navbar />
      <></>
      <div className="apoinmentContainer">
        {appointments.map((appointment, indx) => (
          <ApoinmentCard key={indx} appointment={appointment} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default DocHomePage;
