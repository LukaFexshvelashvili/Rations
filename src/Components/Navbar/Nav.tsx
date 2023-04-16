import { useState } from "react";
import "./Nav.css";

export default function Nav() {
  const [navActive, setNavActive] = useState(false);
  return (
    <nav>
      <div className="contentContainer">
        <div className={`NavContent${navActive ? " NavGet" : ""}`}>
          <div className="LogoText">
            Rati<span>ons.</span>
          </div>
          <ul>
            <li className="liActive">Home</li>
            <li>About Us</li>
            <li>Menu</li>
            <li>Review</li>
            <li>Contact Us</li>
          </ul>
          <div className="NavSign">
            <button className="CButton">Log in</button>
            <button className="DButton">Sign Up</button>
          </div>
        </div>
      </div>
      <div
        className={`navToggle${navActive ? " navToggleActive" : ""}`}
        onClick={() => setNavActive(!navActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
