import "./Footer.css";
import Facebook from "../../Images/Icons/soc/Facebook.png";
import LinkedIn from "../../Images/Icons/soc/LinkedIn.png";
import Twitter from "../../Images/Icons/soc/Twitter.png";

export default function Footer() {
  return (
    <footer>
      <div className="contentContainer">
        <div className="OrderFood SplitRow">
          <div className="Namer g-6">
            <h2>Ready to order your favourite food?</h2>
          </div>
          <div className="Orderer g-6">
            <button className="DButton">Order Now</button>
            <button className="DButton LButton">Learn More</button>
          </div>
        </div>

        <div className="FooterContent">
          <div className="FCol FGL">
            <div className="FS">
              <div className="LogoText">
                Rati<span>ons.</span>
              </div>
            </div>
            <div className="FD FDD">
              <p>
                Food order now super easy for everyone. Let’s order your food
                through our website and enjoy your ordering.
              </p>
            </div>
          </div>
          <div className="FCol">
            <div className="FS">
              <h2>Company</h2>
            </div>
            <div className="FD">
              <p>Home</p>
            </div>
            <div className="FD">
              <p>About us</p>
            </div>
            <div className="FD">
              <p>Contact Us</p>
            </div>
          </div>
          <div className="FCol">
            <div className="FS">
              <h2>Feautures</h2>
            </div>
            <div className="FD">
              <p>Blog</p>
            </div>
            <div className="FD">
              <p>Support</p>
            </div>
            <div className="FD">
              <p>Privacy</p>
            </div>
            <div className="FD">
              <p>Security</p>
            </div>
          </div>
          <div className="FCol">
            <div className="FS">
              <h2>Support</h2>
            </div>
            <div className="FD">
              <p>+880 1706 499 216</p>
            </div>
            <div className="FD">
              <p>email@gmail.com</p>
            </div>
            <div className="FD">
              <p>4/5 Seddon Park, Hamilton New Zealand.</p>
            </div>
          </div>
        </div>
        <div className="FooterLine"></div>
        <div className="UnderLine">
          <p>© Copyright 2022 webdesign.gdn All Rights Reserved</p>
          <div className="SocButtons">
            <button className="activeSoc">
              <img src={Facebook} alt="Facebook" />
            </button>
            <button>
              <img src={LinkedIn} alt="LinkedIn" />
            </button>
            <button>
              <img src={Twitter} alt="Twitter" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
