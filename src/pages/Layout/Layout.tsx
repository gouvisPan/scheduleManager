import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Spinner from "./Spinner";
import Notification from "../../components/UI/Notification/Notification";
import { useState } from "react";

const Layout = () => {

  const error = useAppSelector((state) => state.auth.error);
  const [isErrorDisplaying, setIsErrorDisplaying] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <div>
      {/* {(isAuthLoading || isUserLoading || isHabitLoading) && <Spinner />} */}
      {error && isErrorDisplaying && (
        <Notification message={error} type="error" />
      )}
      <Outlet />
    </div>
  );
};

export default Layout;
