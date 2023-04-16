import MenuAPI from "../../API/MenuAPI";
import MenuCard from "../../Components/MenuCard/MenuCard";
import Title from "../../Components/Title/Title";
import "./Menu.css";

export default function Menu() {
  interface MenuInterface {
    image: string;
    rating: number;
    name: string;
    price: number;
  }
  return (
    <div className="Menu">
      <div className="contentContainer">
        <Title
          title="Explore Our Best Menu"
          description="Explore our best menu and order the suitable one. We are here to provide all the delicious dishes."
        />

        <div className="MenuCards">
          {MenuAPI.map((e: MenuInterface, i: number) => (
            <MenuCard
              key={i}
              image={e.image}
              rating={e.rating}
              name={e.name}
              price={e.price}
            />
          ))}
        </div>
        <div className="ExploreMore">
          <button className="DButton">Explore More</button>
        </div>
      </div>
    </div>
  );
}
