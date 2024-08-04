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
import { ProtectedRoute, AdminRoute, UserRoute, PublicRoute } from './ProtectedRoutes';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
        <Route path="/finish-signup" element={<PublicRoute><FinishSignup /></PublicRoute>} />
        <Route path="/forgot-password" element={<PublicRoute><ForgotPassword /></PublicRoute>} />
        <Route path="/verify-code" element={<PublicRoute><VerifyCode /></PublicRoute>} />
        <Route path="/confirm-password" element={<PublicRoute><ConfirmPassword /></PublicRoute>} />
        
        {/* Inner Layout */}
        <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          {/* Admin Routes */}
          <Route path="dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path="user-management" element={<AdminRoute><UserManagement /></AdminRoute>} />
          <Route path="package" element={<AdminRoute><PackageInformation /></AdminRoute>} />
          <Route path="create-package" element={<AdminRoute><CreatePackage /></AdminRoute>} />
          <Route path="admin-account" element={<AdminRoute><Account /></AdminRoute>} />
          <Route path="all-categories" element={<AdminRoute><AllCategories /></AdminRoute>} />
          <Route path="create-category" element={<AdminRoute><CreateCategory /></AdminRoute>} />
          <Route path="edit-category" element={<AdminRoute><EditCategory /></AdminRoute>} />
          <Route path="all-matches" element={<AdminRoute><AllMatches /></AdminRoute>} />
          <Route path="match/:action" element={<AdminRoute><CreateMatch /></AdminRoute>} />
          <Route path="all-teams" element={<AdminRoute><AllTeams /></AdminRoute>} />
          <Route path="all-packages" element={<AdminRoute><AllPackages /></AdminRoute>} />
          <Route path="package/:action" element={<AdminRoute><NewPackage /></AdminRoute>} />
          
          {/* User Routes */}
          <Route path="user-dashboard" element={<UserRoute><UserDashboard /></UserRoute>} />
        </Route>
        
        {/* 404 */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={1500} theme="dark" hideProgressBar={true} />
    </BrowserRouter>
  );
};

export default App;
