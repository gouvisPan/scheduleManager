import DayView from "./DayView/DayView";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      {/* implement day / week / month view */}
      <DayView />
    </div>
  );
};

export default Home;
