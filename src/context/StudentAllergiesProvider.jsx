import React, { createContext, useContext, useMemo } from "react";

const StudentAttributesContext = createContext();

const StudentAttributesProvider = ({ children }) => {
  const features = [
    { id: 1, name: "Alergii", value: "Fără Alergii" },
    { id: 2, name: "Alergii", value: "Alune/Nuci" },
    { id: 3, name: "Alergii", value: "Lactate" },
    { id: 4, name: "Alergii", value: "Ouă" },
    { id: 5, name: "Alergii", value: "Grâu" },
    { id: 6, name: "Alergii", value: "Soia" },
    { id: 7, name: "Alergii", value: "Pește" },
    { id: 8, name: "Alergii", value: "Polen" },
    { id: 9, name: "Alergii", value: "Acarieni" },
    { id: 10, name: "Alergii", value: "Mucegai" },
    { id: 11, name: "Alergii", value: "Pisici" },
    { id: 12, name: "Alergii", value: "Câini" },
    { id: 13, name: "Alergii", value: "Latex" },
    { id: 14, name: "Alergii", value: "Parfumuri" },
    { id: 15, name: "Alergii", value: "Produse Cosmetice" },
    { id: 16, name: "Alergii", value: "Detergenți și Săpunuri" },
    { id: 17, name: "Alergii", value: "Înțepături de Albine" },
    { id: 18, name: "Alergii", value: "Înțepături de Viespe" },
    { id: 19, name: "Alergii", value: "Înțepături de Furnici" },
    { id: 20, name: "Alergii", value: "Medicamente" },
    { id: 21, name: "Alergii", value: "Altul" }
  ];

  const getById = (id) => features.find((item) => item.id === id);

  const contextValue = useMemo(() => ({ features, getById }), [features]);

  return <StudentAttributesContext.Provider value={contextValue}>{children}</StudentAttributesContext.Provider>;
};

const useData = () => useContext(StudentAttributesContext);

export { StudentAttributesProvider, useData };
