import React from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function RestrictedRoute() {
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const localStorageUserId = localStorage.getItem("userId");

  return localStorageUserId ?? user.data.id ? (
    <Navigate to="/lists" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
}

export default RestrictedRoute;
