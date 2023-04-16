import "./Title.css";

export default function Title(props: { title: string; description: string }) {
  return (
    <div className="Title">
      <h2>{props.title}</h2>
      <p className="p2">{props.description}</p>
    </div>
  );
}
