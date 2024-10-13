import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ user, redirect = '/login' }) => {
  // If the user is not authenticated, redirect to the login page
  if (!user) {
    return <Navigate to={redirect} />;
  }

  // If authenticated, render the nested routes (Outlet) or children
  return <Outlet />;
};

export default ProtectRoute;
