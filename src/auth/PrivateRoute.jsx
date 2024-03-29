import React from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute() {
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const sessionStorageUserId = JSON.parse(
    JSON.stringify(sessionStorage.getItem("userId"))
  );

  return sessionStorageUserId ?? user.data._id ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default PrivateRoute;
