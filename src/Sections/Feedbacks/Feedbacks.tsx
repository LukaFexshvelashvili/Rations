import Customer from "../../Images/Profile/Profile.png";
import ArrowLeft from "../../Images/Icons/ArrowLeft.png";
import ArrowRight from "../../Images/Icons/ArrowRight.png";
import "./Feedbacks.css";
export default function Feedbacks() {
  return (
    <div className="Feedbacks">
      <div className="SplitRow">
        <div className="UserImage g-6">
          <img src={Customer} alt="Customer" />
        </div>
        <div className="UserFeedback g-6">
          <div className="FeedbackContent">
            <h2>What Our Clients Say About Us.</h2>
            <p className="p2">
              “They are the best people. And this is the suitable platform to
              ordering food online. I have enjoyed a lot to order with them.
              They are very helpful and faster people.”
            </p>
            <h4>Kyle Mills</h4>
            <div className="ButtonsRow">
              <button>
                <img src={ArrowLeft} alt="ArrowLeft" />
              </button>
              <button className="ArrowActive">
                <img src={ArrowRight} alt="ArrowRight" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
