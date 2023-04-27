import { Buttons } from "@testing-library/user-event/dist/types/system/pointer/buttons";
import AddModule from "./AddModule/AddModule";
import DayView from "./DayView/DayView";
import GoalTypes from "./GoalTypes/GoalTypes";
import "./Home.scss";
import TestingComp from "./TestingComp";

const Home = () => {
  return (
    <div className="home">
      {/* implement day / week / month view */}
      <DayView />
      <GoalTypes />
      <AddModule />
      <TestingComp />
    </div>
  );
};

export default Home;
