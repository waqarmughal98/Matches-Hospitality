import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ signUpDetails, setSignUpDetails] = useState({
    email : "",
    password : ""
  })


  const signUpDetailsSetter = (e) =>{
    const { name , value } = e.target
    setSignUpDetails((pre)=>({...pre,[name]:value}))
 }
  

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
        signUpDetailsSetter
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
