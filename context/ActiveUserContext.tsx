import { User } from "@prisma/client";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface UserContext {
  activeUser: User | undefined;
  setActiveUser: Dispatch<SetStateAction<UserContext | undefined>>;
}

export const ActiveUserContext = createContext<UserContext>({
  activeUser: undefined,
  setActiveUser: () => {},
});

/**
 * useContext behaves differently for next.js file components.
 * I will have to create a provider here and then use the provider in the _app.tsx file
 */
const ActiveUserProvider = ({ children }: any) => {
  const [activeUser, setUser] = useState<UserContext>();

  return (
    <ActiveUserContext.Provider
      value={{
        activeUser: activeUser?.activeUser,
        setActiveUser: setUser,
      }}
    >
      {children}
    </ActiveUserContext.Provider>
  );
};

export default ActiveUserProvider;
