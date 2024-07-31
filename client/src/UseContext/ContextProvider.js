import React, { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';
const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [backdropContent, setBackdropContent] = useState(null);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [isOpen, setIsOpen,] = useState(false);
  const showBackdropWithContent = (content) => {
    setBackdropContent(content);
    openModal();
  };
  const [signUpDetails, setSignUpDetails] = useState({
    email: "",
    password: ""
  })
  const [selectedEditCategory, setSelectedEditCategory] = useState({})
  const [forgetPassworddata, setforgetPassworddata] = useState({
    email: "",
    otp: "",
    new_password: ""
  })
  const [selectedMatch, setSelectedMatch] = useState(null);

  const signUpDetailsSetter = (e) => {
    const { name, value } = e.target
    setSignUpDetails((pre) => ({ ...pre, [name]: value }))
  }

  const forgetPasswordsSetter = (e) => {
    const { name, value } = e.target
    setforgetPassworddata((pre) => ({ ...pre, [name]: value }))
  }

  const isEmailValidate = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const result = emailRegex.test(email);
    if (!result) {
      toast.error("Invalid email format.")
    }
    return result
  };

  const handeErrors=(error)=>{
    const errors=error?.response?.data?.errors
    if (typeof errors == 'string') {
        toast.error(errors);
    } else if (errors && Array.isArray(errors)) {
        errors.forEach((err) => {
            toast.error(err.msg);
        });
    } else {
        toast.error('An unknown error occurred.');
    }
  }

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        signUpDetails,
        setSignUpDetails,
        signUpDetailsSetter,
        isEmailValidate,
        forgetPassworddata,
        setforgetPassworddata,
        forgetPasswordsSetter,
        showBackdropWithContent,
        backdropContent,
        isOpen,
        setIsOpen,
        setSelectedMatch,
        selectedMatch,
        handeErrors,
        setSelectedEditCategory,
        selectedEditCategory
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);