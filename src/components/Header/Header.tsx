import SpinningButton from "./SpinningButton/SpinningButton";
import "./Header.scss";
import { BiLogOutCircle } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { logoutUser } from "../../store/actions/auth-actions";
import { useLocation } from "react-router";
import Nav from "./Nav/Nav";

const Header = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const colorCSS = !pathname.includes("profile") ? "white" : "";

  const signOutClickHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="header-container">
      <Nav />
    </div>
  );
};

export default Header;
