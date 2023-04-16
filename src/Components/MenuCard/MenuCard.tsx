import "./MenuCard.css";
import StarIcon from "../../Images/Icons/Star.png";

export default function MenuCard(props: {
  image: string;
  rating: number;
  name: string;
  price: number;
}) {
  return (
    <div className="MenuCard">
      <div className="MenuImg">
        <img src={props.image} alt="dish" />
      </div>
      <div className="Rating">
        <img src={StarIcon} alt="star" />
        {props.rating}
      </div>
      <h4>{props.name}</h4>
      <div className="OrderRow">
        <button className="Order">Order now</button>
        <div className="Price">
          <span>$</span>
          {props.price.toFixed(2)}
        </div>
      </div>
    </div>
  );
}
