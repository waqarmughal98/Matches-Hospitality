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
  const [categoryData, setCategoryData] = useState([])
  const [PackageData, setPackageData] = useState([])
  const [MatchesData, setMatchesData] = useState([])
  const [signUpDetails, setSignUpDetails] = useState({
    email: "",
    password: ""
  })
  const [selectedEditCategory, setSelectedEditCategory] = useState({})
  const [selectedEditMatch, setSelectedEditMatch] = useState({})
  const [selectedEditPackage, setSelectedEditPackage] = useState({})
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

  const handleErrors=(error)=>{
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

  function convertToAmPm(timestamp) {
    const date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${formattedMinutes} ${amPm}`;
}

function convertToDateFormat(isoString) {
  const date = new Date(isoString);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${month}-${day}-${year}`;
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
        handleErrors,
        setSelectedEditCategory,
        selectedEditCategory,
        categoryData,
        setCategoryData,
        PackageData,
        setPackageData,
        convertToAmPm,
        convertToDateFormat,
        selectedEditMatch,
        setSelectedEditMatch,
        MatchesData,
        setMatchesData,
        selectedEditPackage,
        setSelectedEditPackage
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);