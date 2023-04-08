import AddModule from "./DayView/AddModule/AddModule";
import DayView from "./DayView/DayView";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      {/* implement day / week / month view */}
      <DayView />
      <AddModule />
    </div>
  );
};

export default Home;
