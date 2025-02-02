import { createContext, useContext, useEffect, useState } from "react";

const AuthDetailsContext = createContext();

export const AuthDetailsProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthDetailsContext.Provider value={{ user, setUser }}>
      {children}
    </AuthDetailsContext.Provider>
  );
};

export const useUser = () => useContext(AuthDetailsContext);
