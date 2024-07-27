import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './Pages/404/NotFound';
import Layout from './ThemeLayout/Layout';
import Login from './Pages/Authentication/User/Login';
import Signup from './Pages/Authentication/User/Signup';
import UserDashboard from './Pages/Dashboard/UserDashboard';
import FinishSignup from './Pages/Authentication/User/FinishSignup';
import ForgotPassword from './Pages/Authentication/User/ForgotPassword';
import VerifyCode from './Pages/Authentication/User/VerifyCode';
import ConfirmPassword from './Pages/Authentication/User/ConfirmPassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<UserDashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/finish-signup" element={<FinishSignup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/confirm-password" element={<ConfirmPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={2000} theme="dark"  hideProgressBar={true} />
    </BrowserRouter>
  );
};

export default App;
