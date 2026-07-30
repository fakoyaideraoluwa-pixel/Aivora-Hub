import React, { createContext, useState, useEffect } from "react";


export const AuthContext = createContext();


const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);


  useEffect(()=>{

    const savedUser = localStorage.getItem("loggedInUser");

    if(savedUser){
      setUser(JSON.parse(savedUser));
    }

  },[]);



  const login = (user)=>{

 localStorage.setItem(
  "loggedInUser",
  JSON.stringify(user)
);

    setUser(user);

  };



  const logout = ()=>{

    localStorage.removeItem("loggedInUser");

    setUser(null);

  };


  return (

    <AuthContext.Provider
value={{
 user,
 setUser,
 login,
 logout
}}
    >

      {children}

    </AuthContext.Provider>

  );

};


export default AuthProvider;