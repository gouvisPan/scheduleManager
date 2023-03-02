import { useAppSelector } from "../../hooks/hooks";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import useWindowSize from "../../hooks/useWindowSize";
import SideBar from "../../components/Sider/SideBar";

const RequireAuth = () => {
  const isAuthenticated = true;
  const location = useLocation();
  const [height, width] = useWindowSize();

  return isAuthenticated ? (
    <div>
      {/* <Header /> */}
      <SideBar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
