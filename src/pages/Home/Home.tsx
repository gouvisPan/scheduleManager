import AddModule from "./AddModule/AddModule";
import DayView from "./DayView/DayView";
import GoalTypes from "./GoalTypes/GoalTypes";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      {/* implement day / week / month view */}
      <DayView />
      <GoalTypes />
      <AddModule />
    </div>
  );
};

export default Home;
