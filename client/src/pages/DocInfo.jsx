import React, { useEffect, useState } from "react";
import "../styles/DocInfo.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";
import DoctorCard from "../Components/DoctorCard.jsx";
import { useLocation } from "react-router-dom";

const DocInfo = () => {
  const location = useLocation();
  const userId = location.state?.userId;
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/doctors")
      .then((response) => response.json())
      .then((data) => setDoctors(data.doctors))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <Navbar />
      {console.log(userId)}
      <div className="DocContainer">
        {doctors.map((item, index) => {
          return (
            <DoctorCard
              key={index}
              name={item.name}
              id={item._id}
              speciality={item.education}
              fees={item.fees_per_session}
              address={item.address}
              image={item.image_url}
              userId={userId}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default DocInfo;
