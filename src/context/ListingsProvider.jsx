import React, { createContext, useState, useEffect } from "react";
import ApiService from "../services/ApiService";

export const ListingsContext = createContext();

export function ListingsProvider({ children }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    ApiService.get("Listings")
      .then((response) => setListings(response.data))
      .catch((error) => console.error("Error fetching listings:", error));
  }, []);

  return (
    <ListingsContext.Provider value={listings}>
      {children}
    </ListingsContext.Provider>
  );
}
