import React, { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signUpDetails, setSignUpDetails] = useState({
    email: "",
    password: ""
  })


  const signUpDetailsSetter = (e) => {
    const { name, value } = e.target
    setSignUpDetails((pre) => ({ ...pre, [name]: value }))
  }

  const isEmailValidate = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const result = emailRegex.test(email);
    if (!result) {
      toast.error("Invalid email format.")
    }
    return result
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        signUpDetails,
        setSignUpDetails,
        signUpDetailsSetter,
        isEmailValidate
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
