import React from 'react';
import { Navigate } from 'react-router-dom';

const getUserData = () => JSON.parse(localStorage.getItem('userData'));

const ProtectedRoute = ({ type, children }) => {
  const user = getUserData();

  if (type === "public") {
    if (user?.token) {
      return <Navigate to={user?.userType === 'ap%4k45a5sd' ? "/dashboard" : "/user-dashboard"} replace />;
    }
    return children;
  }

  if (!user?.token) {
    return <Navigate to="/login" replace />;
  }

  if (type === "admin" && user?.userType !== 'ap%4k45a5sd') {
    return <Navigate to="/user-dashboard" replace />;
  }

  if (type === "user" && user?.userType !== 'a2d%lsakd4A') {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;
