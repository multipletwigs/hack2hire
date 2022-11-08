import { useQuery } from "@tanstack/react-query";
import { User } from "@prisma/client";
import React, { createContext, useEffect, useState } from "react";

export const AllUserContext = createContext<User[] | null>(null);

const fetchAllUsers = async () => {
  const response: Response = await fetch("/api/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

/**
 * useContext behaves differently for next.js file components. 
 * I will have to create a provider here and then use the provider in the _app.tsx file
 */
const UserProvider = ({ children }: any) => {
  const [allUsers, setUsers] = useState<User[]>([]);

  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: fetchAllUsers,
  });

  useEffect(() => {
    console.log("This ran")
    if (data) {
      const allUserData = data.response as User[];
      setUsers(allUserData);
    }
  }, [data]);

  return (
    <AllUserContext.Provider value={allUsers}>
        {children}
    </AllUserContext.Provider>
  );
};

export default UserProvider;
