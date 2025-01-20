import React, { createContext, useContext, useMemo } from "react";

const ListingTypeContext = createContext();

const ListingTypeProvider = ({ children }) => {
  const types = [
    { id: 1, name:"Tip Apartament", value: "Apartament" },
    { id: 2, name:"Tip Apartament", value: "Micro Apartament" },
    { id: 3, name:"Tip Apartament", value: "Garsoniera" },
    { id: 4, name:"Tip Apartament", value: "Gazda" }
  ];

  const getById = (id) => types.find((item) => item.id === id);

  const contextValue = useMemo(() => ({ types, getById }), [types]);

  return <ListingTypeContext.Provider value={contextValue}>{children}</ListingTypeContext.Provider>;
};

const useTypeData = () => useContext(ListingTypeContext);

export { ListingTypeProvider, useTypeData };
