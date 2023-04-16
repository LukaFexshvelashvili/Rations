import Nav from "../Components/Navbar/Nav";
import Stats from "../Components/Stats/Stats";
import Feedbacks from "../Sections/Feedbacks/Feedbacks";
import Menu from "../Sections/Menu/Menu";
import Services from "../Sections/Services/Services";
import Starter from "../Sections/Starter/Starter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Starter />
      <div className="contentContainer">
        <Stats />
        <Services />
      </div>
      <Menu />
      <div className="contentContainer">
        <Feedbacks />
      </div>
    </div>
  );
}

export default App;
