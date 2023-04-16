import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <div className="contentContainer">
        <div className="NavContent">
          <div className="NavLogo">
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
    </nav>
  );
}
