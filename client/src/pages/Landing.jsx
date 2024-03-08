import React from "react";
import "../styles/Landing.css";
import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import Footer from "../Components/footer";
const Landing = () => {
  return (
    <>
      <div className="landing-main">
        <Navbar />
        <div className="mainPage">
          <div className="mainSlowgan">
            Your trusted guide to <br /> mental health & wellness
          </div>
          <div className="subSlowgan">
            Start improving your mental health and well-being today.
            FeelFree.Org shows you how
          </div>
          <div className="learnBtn">
            <button>Learn More</button>
          </div>
        </div>
        <div className="col2">
          <div className="mission">Our Mission</div>
          <div className="col2Slow">
            We empower you with the knowledge and skills you need to strengthen
            your mental health & well-being
          </div>
        </div>
      </div>
      <div className="col3">
        <div className="col3Card">
          <img src={img1} alt="" />
          <div className="head">Guidance you can trust</div>
          <div className="info">
            Build skills to manage your emotions, strengthen your relationships,
            and cope with difficult situations.
          </div>
        </div>
        <div className="col3Card">
          <img src={img2} alt="" />
          <div className="head">Skills for life success</div>
          <div className="info">
            Learn how to improve your mental health and well-being—and help your
            friends and family do the same.
          </div>
        </div>
        <div className="col3Card">
          <img src={img3} alt="" />
          <div className="head">Strategies to feel better</div>
          <div className="info">
            As a free online resource, we’re here for you, day or night,
            whenever you need guidance, encouragement, or support.
          </div>
        </div>
        <div className="col3Card">
          <img src={img4} alt="" />
          <div className="head">Support you can rely on</div>
          <div className="info">
            Find trustworthy information about mental health and wellness that
            you can use to make better decisions.
          </div>
        </div>
      </div>
      <div className="col4">
        <div className="clo4Container">
          <div className="clo4header">Select problem</div>
          <div className="problems">
            <div className="problem">Addiction</div>
            <div className="problem">Anxiety</div>
            <div className="problem">Communication</div>
            <div className="problem">Depression</div>
            <div className="problem">Love and Friendship</div>
            <div className="problem">Meditation</div>
            <div className="problem">Pets</div>
            <div className="problem">Stress</div>
            <div className="problem">Suicide</div>
            <div className="problem">PTSD and Trauma</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
