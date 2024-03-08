import React from "react";
import "../styles/footer.css";

const footer = () => {
  return (
    <div className="footer">
      <div className="emailContainer">
        <div className="contact">Contact Us</div>
        <>
          <input type="text" placeholder="Enter Your Email" className="input" />
          <button className="submit">Submit</button>
        </>
      </div>
      <div className="footerLinks">
        <div className="footerLink">About Us</div>
        <div className="footerLink">Contact Us</div>
        <div className="footerLink">Privacy Policy</div>
        <div className="footerLink">Terms of Use</div>
      </div>
      <div className="copyright">© 2021 FeelFree.Org. All rights reserved</div>
    </div>
  );
};

export default footer;
