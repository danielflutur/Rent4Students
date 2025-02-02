import React, { createContext, useState, useEffect } from "react";
import ApiService from "../services/ApiService";
import { useUser } from "../context/AuthDetailsProvider";


export const CompatibleStudentsContext = createContext();

export function CompatibleStudentsProvider({ children }) {
  const [students, setStudents] = useState([]);
  const {user} = useUser();

  useEffect(() => {
    ApiService.get(`Students/matching/${user?.id}`)
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  return (
    <CompatibleStudentsContext.Provider value={students}>
      {children}
    </CompatibleStudentsContext.Provider>
  );
}
