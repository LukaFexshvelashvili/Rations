import "./ServiceCard.css";

export default function ServiceCard(props: {
  icon: string;
  title: string;
  description: string;
  active: boolean;
}) {
  return (
    <div className={`ServiceCard${props.active ? " ActivedService" : ""}`}>
      <div className="CardIcon">
        <img src={props.icon} alt="truck" />
      </div>
      <h3>{props.title}</h3>
      <p className="p2">{props.description}</p>
    </div>
  );
}
