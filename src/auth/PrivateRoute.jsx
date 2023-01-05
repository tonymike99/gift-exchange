import React from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute() {
  const user = useSelector((state) => state.user);
  const location = useLocation();

  console.log(user.data.id);

  return user.data.id ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default PrivateRoute;
