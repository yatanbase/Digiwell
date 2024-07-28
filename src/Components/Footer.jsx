import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="foot">
          <div>
            <span>Quick Links</span>
            <span>Home</span>
            <span>Features</span>
            <span>Resources</span>
            <span>Community</span>
            <span>About Us</span>
          </div>
          <div>
            <span>Legal Links</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
          <div>
            <span>Newsletter Signup</span>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Enter Email" required />
            <button>Signup</button>
          </div>
          <div>
            <span>1337/09, Mars, Happy Crater.</span>
            <span>+25 251 981 3562</span>
            <span>digiwell@wellbeing.com</span>
          </div>
          <div>
            <span></span>
            <span>Follow us on our socials</span>
          </div>
        </div>
        <p>©️ 2024 DigiWell. All Right Reserved</p>
      </div>
    </>
  );
}
