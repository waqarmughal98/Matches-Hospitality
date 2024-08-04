import React from 'react';
import { Navigate } from 'react-router-dom';

const getUserData = () => JSON.parse(localStorage.getItem('userData'));

export const ProtectedRoute = ({ children }) => {
  const user = getUserData()
  if (!user?.token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export const AdminRoute = ({ children }) => {
  const user = getUserData();
  if (!user?.token) {
    return <Navigate to="/login" replace />;
  }
  if (user?.userType !== 'ap%4k45a5sd') {
    return <Navigate to="/user-dashboard" replace />;
  }
  return children;
};

export const UserRoute = ({ children }) => {
  const user = getUserData();
  if (!user?.token) {
    return <Navigate to="/login" replace />;
  }
  if (user?.userType !== 'a2d%lsakd4A') {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

export const PublicRoute = ({ children }) => {
  const user = getUserData();
  if (user?.token) {
    return <Navigate to={user?.userType === 'ap%4k45a5sd' ? "/dashboard" : "/user-dashboard"} replace />;
  }
  return children;
};
