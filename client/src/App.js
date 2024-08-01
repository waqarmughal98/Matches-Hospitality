import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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
import EditMatch from './Pages/Matches/EditMatch';
import AllTeams from './Pages/Teams/AllTeams';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      {/* inner layout */}
        <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="user-management" element={<UserManagement />} />
        <Route path="package" element={<PackageInformation />} />
        <Route path="create-package" element={<CreatePackage />} />
        <Route path="admin-account" element={<Account />} />
        {/* category */}
        <Route path="all-categories" element={<AllCategories />} />
        <Route path="create-category" element={<CreateCategory />} />
        <Route path="edit-category" element={<EditCategory />} />
        {/* matches */}
        <Route path="all-matches" element={<AllMatches />} />
        <Route path="create-match" element={<CreateMatch />} />
        <Route path="edit-match" element={<EditMatch />} />
        {/* temas */}
        <Route path="all-teams" element={<AllTeams />} />
        {/* user dashboard */}
        <Route path="user-dashboard" element={<UserDashboard />} />
        </Route>
        {/* auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/finish-signup" element={<FinishSignup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/confirm-password" element={<ConfirmPassword />} />
        {/* 404 */} 
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={1500} theme="dark"  hideProgressBar={true} />
    </BrowserRouter>
  );
};

export default App;
