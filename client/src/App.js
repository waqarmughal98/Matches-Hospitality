import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './Pages/404/NotFound';
import Layout from './ThemeLayout/Layout';
import Login from './Pages/Authentication/User/Login';
import Signup from './Pages/Authentication/User/Signup';
import FinishSignup from './Pages/Authentication/User/FinishSignup';
import ForgotPassword from './Pages/Authentication/User/ForgotPassword';
import VerifyCode from './Pages/Authentication/User/VerifyCode';
import ConfirmPassword from './Pages/Authentication/User/ConfirmPassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from './Pages/Dashboard/AdminDashboard';
import UserManagement from './Pages/Dashboard/UserManagement';
import PackageInformation from './Pages/Packages/PackageInformation';

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
        </Route>
        {/* auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/finish-signup" element={<FinishSignup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/confirm-password" element={<ConfirmPassword />} />
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={3000} theme="dark"  hideProgressBar={true} />
    </BrowserRouter>
  );
};

export default App;
