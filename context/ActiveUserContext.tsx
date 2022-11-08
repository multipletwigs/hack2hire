import { useQuery } from "@tanstack/react-query";
import { User } from "@prisma/client";
import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { AllUserContext } from "./UserContext";

interface UserContext{
    activeUser: User;
    setActiveUser: Dispatch<SetStateAction<UserContext | undefined>>;
}

export const ActiveUserContext = createContext<UserContext | undefined>(undefined);

/**
 * useContext behaves differently for next.js file components. 
 * I will have to create a provider here and then use the provider in the _app.tsx file
 */
const ActiveUserProvider = ({ children }: any) => {
  const allUsers = useContext(AllUserContext);
  const [activeUser, setUser] = useState<UserContext>();

  useEffect(() => {
    if (allUsers) {
      setUser({
        activeUser: allUsers[0],
        setActiveUser: setUser
      });
    }
  }, [allUsers]);

  return (
    <ActiveUserContext.Provider value={activeUser}>
        {children}
    </ActiveUserContext.Provider>
  );
};

export default ActiveUserProvider;
