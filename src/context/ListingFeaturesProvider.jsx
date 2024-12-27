import React, { createContext, useContext, useMemo } from "react";

const ListingFeaturesContext = createContext();

const ListingFeaturesProvider = ({ children }) => {
  const features = [
    { id: 1, name: "Status Mobilare", value: "Mobilat" },
    { id: 2, name: "Status Mobilare", value: "Partial Mobilat" },
    { id: 3, name: "Status Mobilare", value: "Nemobilat" },
    { id: 4, name: "Nr. Camere", value: "1" },
    { id: 5, name: "Nr. Camere", value: "2" },
    { id: 6, name: "Nr. Camere", value: "3" },
    { id: 7, name: "Nr. Camere", value: "4" },
    { id: 8, name: "Aranjamentul Apartamentului", value: "Decomandat" },
    { id: 9, name: "Aranjamentul Apartamentului", value: "Semi-Decomandat" },
    { id: 10, name: "Aranjamentul Apartamentului", value: "Comandat" },
    { id: 11, name: "Incalzire", value: "Centrala" },
    { id: 12, name: "Incalzire", value: "Electrica" },
    { id: 13, name: "Incalzire", value: "De la oras" },
    { id: 14, name: "Lift", value: "Da" },
    { id: 15, name: "Lift", value: "Nu" },
    { id: 16, name: "Etaj", value: "Parter" },
    { id: 17, name: "Etaj", value: "1" },
    { id: 18, name: "Etaj", value: "2" },
    { id: 19, name: "Etaj", value: "3" },
    { id: 20, name: "Etaj", value: "4" },
    { id: 21, name: "Etaj", value: "5" },
    { id: 22, name: "Etaj", value: "6" },
    { id: 23, name: "Etaj", value: "7" },
    { id: 24, name: "Etaj", value: "8" },
    { id: 25, name: "Etaj", value: "9" },
    { id: 26, name: "Etaj", value: "10" },
    { id: 27, name: "Etaj", value: "11" },
    { id: 28, name: "Etaj", value: "12" },
    { id: 29, name: "Etaj", value: "13" },
    { id: 30, name: "Etaj", value: "14" },
    { id: 31, name: "Etaj", value: "15" },
    { id: 32, name: "Etaj", value: "16" },
    { id: 33, name: "Etaj", value: "17" },
    { id: 34, name: "Etaj", value: "18" },
    { id: 35, name: "Etaj", value: "19" },
    { id: 36, name: "Etaj", value: "20" },
    { id: 37, name: "Animale de companie", value: "Permis" },
    { id: 38, name: "Animale de companie", value: "Interzis" },
    { id: 39, name: "Politica Fumat", value: "Permis" },
    { id: 40, name: "Politica Fumat", value: "Interzis" },
    { id: 41, name: "Flexibilitate Chirie", value: "Flexibil" },
    { id: 42, name: "Flexibilitate Chirie", value: "Perioada Fixa" },
    { id: 43, name: "Perioada Minima de Inchiriere", value: "6 luni" },
    { id: 44, name: "Perioada Minima de Inchiriere", value: "12 luni" },
    { id: 45, name: "Facilitati", value: "Frigider" },
    { id: 46, name: "Facilitati", value: "Cuptor cu microunde" },
    { id: 47, name: "Facilitati", value: "Cuptor" },
    { id: 48, name: "Facilitati", value: "Aragaz/Plita" },
    { id: 49, name: "Facilitati", value: "Masina de spalat vase" },
    { id: 50, name: "Facilitati", value: "Aparat de cafea" },
    { id: 51, name: "Facilitati", value: "Prajitor de paine" },
    { id: 52, name: "Facilitati", value: "Fierbator de apa" },
    { id: 53, name: "Facilitati", value: "Masina de spalat" },
    { id: 54, name: "Facilitati", value: "Uscator haine" },
    { id: 55, name: "Facilitati", value: "Fier de calcat" },
    { id: 56, name: "Facilitati", value: "TV" },
    { id: 57, name: "Facilitati", value: "Mobila" },
    { id: 58, name: "Facilitati", value: "Interfon" },
    { id: 59, name: "Facilitati", value: "Jaluzele" },
    { id: 60, name: "Facilitati", value: "Internet" },
    { id: 61, name: "Facilitati", value: "Usa metalica la intrare" },
    { id: 62, name: "Facilitati", value: "Aer Conditionat" },
    { id: 63, name: "Facilitati", value: "Loc parcare" },
    { id: 64, name: "Material Constructie", value: "Caramida" },
    { id: 65, name: "Material Constructie", value: "BCA" },
    { id: 66, name: "Material Ferestre", value: "Plastic" },
    { id: 67, name: "Material Ferestre", value: "Lemn" },
    { id: 68, name: "Balcon", value: "Fara" },
    { id: 69, name: "Balcon", value: "1" },
    { id: 70, name: "Balcon", value: "2" },
    { id: 71, name: "Balcon", value: "3" },
    { id: 72, name: "Balcon", value: "4" },
    { id: 73, name: "Depozitare Aditionala", value: "Fara" },
    { id: 74, name: "Depozitare Aditionala", value: "Beci" },
    { id: 75, name: "Depozitare Aditionala", value: "Debara" }
  ];

  const getById = (id) => features.find((item) => item.id === id);

  const contextValue = useMemo(() => ({ features, getById }), [features]);

  return <ListingFeaturesContext.Provider value={contextValue}>{children}</ListingFeaturesContext.Provider>;
};

const useData = () => useContext(ListingFeaturesContext);

export { ListingFeaturesProvider, useData };
