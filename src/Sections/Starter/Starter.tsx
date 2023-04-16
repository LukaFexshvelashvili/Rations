import "./Starter.css";
import PlayIcon from "../../Images/Icons/Play.png";
import Bg1 from "../../Images/Background/Bg1.png";

export default function Starter() {
  return (
    <div className="Starter">
      <div className="contentContainer">
        <div className="SplitRow">
          <div className="InfoSide g-6">
            <h1>Delivering Happiness.</h1>
            <p>
              Just order and wait for a while we’ll be there at your door.
              Delivering the best foods for you. We are deliverying the best
              foods.
            </p>
            <div className="BRow">
              <button className="DButton">Explore Menu</button>
              <button className="PlayButton">
                <img src={PlayIcon} alt="PlayIcon" />
              </button>
            </div>
          </div>
          <div className="ImageSide g-6">
            <img src={Bg1} alt="BurgerImage" />
          </div>
        </div>
      </div>
    </div>
  );
}
