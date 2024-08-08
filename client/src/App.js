import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NotFound from './Pages/404/NotFound';
import Layout from './ThemeLayout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PackageInformation from './Pages/Packages/PackageInformation';
import CreatePackage from './Pages/Packages/CreatePackage';
import Account from './Pages/Packages/Account';
import Login from './Pages/Authentication/Login';
import Signup from './Pages/Authentication/Signup';
import FinishSignup from './Pages/Authentication/FinishSignup';
import ForgotPassword from './Pages/Authentication/ForgotPassword';
import VerifyCode from './Pages/Authentication/VerifyCode';
import ConfirmPassword from './Pages/Authentication/ConfirmPassword';
import AdminDashboard from './Pages/Dashboard/Admin/AdminDashboard';
import UserDashboard from './Pages/Dashboard/User/UserDashboard';
import UserManagement from './Pages/Dashboard/Admin/UserManagement';
import AllCategories from './Pages/Categories/AllCategories';
import CreateCategory from './Pages/Categories/CreateCategory';
import EditCategory from './Pages/Categories/EditCategory';
import AllMatches from './Pages/Matches/AllMatches';
import CreateMatch from './Pages/Matches/CreateMatch';
import AllTeams from './Pages/Teams/AllTeams';
import AllPackages from './Pages/Packages/AllPackages';
import NewPackage from './Pages/Packages/NewPackage';
import ProtectedRoute from './ProtectedRoutes';
import { AdminProfile } from './Pages/Profile/AdminProfile';

const routes = [
  { path: "/", element: <Navigate to="/login" replace />, type: "public" },
  { path: "/login", element: <Login />, type: "public" },
  { path: "/signup", element: <Signup />, type: "public" },
  { path: "/finish-signup", element: <FinishSignup />, type: "public" },
  { path: "/forgot-password", element: <ForgotPassword />, type: "public" },
  { path: "/verify-code", element: <VerifyCode />, type: "public" },
  { path: "/confirm-password", element: <ConfirmPassword />, type: "public" },
  {
    path: "/",
    element: <Layout />,
    type: "protected",
    children: [
      { path: "dashboard", element: <AdminDashboard />, type: "admin" },
      { path: "all-users", element: <UserManagement />, type: "admin" },
      { path: "package", element: <PackageInformation />, type: "admin" },
      { path: "create-package", element: <CreatePackage />, type: "admin" },
      { path: "admin-account", element: <Account />, type: "admin" },
      { path: "all-events", element: <AllCategories />, type: "admin" },
      { path: "create-category", element: <CreateCategory />, type: "admin" },
      { path: "edit-category", element: <EditCategory />, type: "admin" },
      { path: "all-matches", element: <AllMatches />, type: "admin" },
      { path: "match/:action", element: <CreateMatch />, type: "admin" },
      { path: "all-teams", element: <AllTeams />, type: "admin" },
      { path: "all-packages", element: <AllPackages />, type: "admin" },
      { path: "package/:action", element: <NewPackage />, type: "admin" },
      { path: "user-dashboard", element: <UserDashboard />, type: "user" },
      { path: "admin-profile", element: <AdminProfile />, type: "admin" },
    ],
  },
  { path: "/*", element: <NotFound />, type: "public" },
];

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element, type, children }) => {
          if (children) {
            return (
              <Route
                key={path}
                path={path}
                element={<ProtectedRoute type={type}>{element}</ProtectedRoute>}
              >
                {children.map(({ path, element, type }) => (
                  <Route
                    key={path}
                    path={path}
                    element={<ProtectedRoute type={type}>{element}</ProtectedRoute>}
                  />
                ))}
              </Route>
            );
          }

          return (
            <Route
              key={path}
              path={path}
              element={<ProtectedRoute type={type}>{element}</ProtectedRoute>}
            />
          );
        })}
      </Routes>
      <ToastContainer autoClose={1500} theme="dark" hideProgressBar={true} />
    </BrowserRouter>
  );
};

export default App;
