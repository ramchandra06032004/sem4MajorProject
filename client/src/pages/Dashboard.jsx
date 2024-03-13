import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Navbar from "../Components/navbar";
import dashImage from "../assets/dashbordImage.webp";
import Doctors from "../assets/Doctors.jpg";
import Footer from "../Components/Footer";
const Dashboard = () => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("auth")) || ""
  );
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const fetchLuckyNumber = async () => {
    let axiosConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/dashboard",
        axiosConfig
      );
      setData({ msg: response.data.msg, luckyNumber: response.data.secret });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchLuckyNumber();
    if (token === "") {
      navigate("/login");
      toast.warn("Please login first to access dashboard");
    }
  }, [token]);

  return (
    <div className="dashboard-main">
      <Navbar />
      <div className="dashBoardContainer">
        <div className="column1">
          <div className="col1Right">
            <div className="col1Head">Start your mental health journey</div>
            <div className="col1SubHead">
              Know more about our paid plans and paid resorces that will
              definitely help you to improve your mental health.
            </div>
            <Link to={"/docInfo"} className="knowMore">
              <div className="logout-button knowMore">Know More</div>
            </Link>
          </div>
          <div className="col1Left">
            <img src={dashImage} alt="" />
          </div>
        </div>
        <div className="column2">
          <div className="col2right">
            <img src={Doctors} alt="" />
          </div>
          <div className="col2Left">
            <div className="col2Header">Our Expert Team</div>
            <div className="col2SubHead1">
              We are a health technology company guiding people towards
              self-understanding and connection. Our platform offers reliable
              resources, accessible services, and nurturing communities that
              educate, support, and empower people in their pursuit of
              well-being
            </div>
            <div className="col2SubHead1">
              Our people-first culture is reflected in our team of top-notch
              business executives, accomplished tech entrepreneurs, and highly
              regarded healthcare professionals.
            </div>
          </div>
        </div>
        <div className="col4">
          <div className="clo4Container">
            <div className="clo4header">Topics</div>
            <div className="problems">
              <Link className="problem" to="/addiction">
                Addiction
              </Link>
              <Link className="problem" to="/anxiety">
                Anxiety
              </Link>

              <Link className="problem" to="/depression">
                Depression
              </Link>
              <Link className="problem" to="/love-and-friendship">
                Love and Friendship
              </Link>
              <Link className="problem" to="/meditation">
                Meditation
              </Link>
              <Link className="problem" to="/pets">
                Pets
              </Link>
              <Link className="problem" to="/stress">
                Stress
              </Link>
              <Link className="problem" to="/suicide">
                Suicide
              </Link>
              <Link className="problem" to="/ptsd-and-trauma">
                PTSD and Trauma
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
