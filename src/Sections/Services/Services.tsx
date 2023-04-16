import ServicesAPI from "../../API/ServicesAPI";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import Title from "../../Components/Title/Title";
import "./Services.css";

export default function Services() {
  interface ServiceInterface {
    icon: string;
    title: string;
    description: string;
    active: boolean;
  }
  return (
    <div className="Services">
      <Title
        title="Our Services"
        description="All the features you want. Rations makes it easy to build and manage your food order."
      />
      <div className="ServiceRow">
        {ServicesAPI.map((e: ServiceInterface, i: number) => (
          <ServiceCard
            key={i}
            icon={e.icon}
            title={e.title}
            description={e.description}
            active={e.active}
          />
        ))}
      </div>
    </div>
  );
}
