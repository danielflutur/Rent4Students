import React, { createContext, useState, useEffect } from "react";
import ApiService from "../services/ApiService";
import { useAuth } from "./AuthProvider";

export const FacultyContext = createContext();

export function FacultyProvider({ children }) {
  const [faculties, setFaculties] = useState([]);
  const {auth} = useAuth();

  useEffect(() => {
    ApiService.get(`Faculties/allByUniversity/${auth?.id}`)
      .then((response) => setFaculties(response.data))
      .catch((error) => console.error("Error fetching faculties:", error));
  }, []);

  return (
    <FacultyContext.Provider value={faculties}>
      {children}
    </FacultyContext.Provider>
  );
}
