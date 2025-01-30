import React, { createContext, useContext, useMemo } from "react";

const StudentAttributesContext = createContext();

const StudentAttributesProvider = ({ children }) => {
  const features = [
    { id: 1, name: "Hobby-uri", value: "Desen" },
    { id: 2, name: "Hobby-uri", value: "Pictură" },
    { id: 3, name: "Hobby-uri", value: "Cântat" },
    { id: 4, name: "Hobby-uri", value: "Caligrafie" },
    { id: 5, name: "Hobby-uri", value: "Fotografie" },
    { id: 6, name: "Hobby-uri", value: "Design Grafic" },
    { id: 7, name: "Hobby-uri", value: "Cântat la un Instrument" },
    { id: 8, name: "Hobby-uri", value: "Tricotat/Croșetat" },
    { id: 9, name: "Hobby-uri", value: "Cusut/Design Vestimentar" },
    { id: 10, name: "Hobby-uri", value: "Dans" },
    { id: 11, name: "Hobby-uri", value: "Stand-up Comedy" },
    { id: 12, name: "Hobby-uri", value: "Trucuri de Magie" },
    { id: 13, name: "Hobby-uri", value: "Scris" },
    { id: 14, name: "Hobby-uri", value: "Citit" },
    { id: 15, name: "Hobby-uri", value: "Blogging" },
    { id: 16, name: "Hobby-uri", value: "Alergat/Jogging" },
    { id: 17, name: "Hobby-uri", value: "Yoga" },
    { id: 18, name: "Hobby-uri", value: "Pilates" },
    { id: 19, name: "Hobby-uri", value: "Înot" },
    { id: 20, name: "Hobby-uri", value: "Drumeții" },
    { id: 21, name: "Hobby-uri", value: "Ciclism" },
    { id: 22, name: "Hobby-uri", value: "Arte Marțiale" },
    { id: 23, name: "Hobby-uri", value: "Fotbal" },
    { id: 24, name: "Hobby-uri", value: "Baschet" },
    { id: 25, name: "Hobby-uri", value: "Volei" },
    { id: 26, name: "Hobby-uri", value: "Handbal" },
    { id: 27, name: "Hobby-uri", value: "Cățărat pe Stânci" },
    { id: 28, name: "Hobby-uri", value: "Gimnastică" },
    { id: 29, name: "Hobby-uri", value: "Gaming" },
    { id: 30, name: "Hobby-uri", value: "Programare/Codare" },
    { id: 31, name: "Hobby-uri", value: "Robotică" },
    { id: 32, name: "Hobby-uri", value: "VR" },
    { id: 33, name: "Hobby-uri", value: "Printare 3D" },
    { id: 34, name: "Hobby-uri", value: "Zbor cu Drone" },
    { id: 35, name: "Hobby-uri", value: "Gătit" },
    { id: 36, name: "Hobby-uri", value: "Copt" },
    { id: 37, name: "Hobby-uri", value: "Preparare Cafea" },
    { id: 38, name: "Hobby-uri", value: "Decorare Torturi" },
    { id: 39, name: "Hobby-uri", value: "Grădinărit" },
    { id: 40, name: "Hobby-uri", value: "Observare Păsări" },
    { id: 41, name: "Hobby-uri", value: "Camping" },
    { id: 42, name: "Hobby-uri", value: "Pescuit" },
    { id: 43, name: "Hobby-uri", value: "Geocaching" },
    { id: 44, name: "Hobby-uri", value: "Observare Stele" },
    { id: 45, name: "Hobby-uri", value: "Colecționare Timbre" },
    { id: 46, name: "Hobby-uri", value: "Colecționare Monede" },
    { id: 47, name: "Hobby-uri", value: "Colecționare Figuri de Acțiune" },
    { id: 48, name: "Hobby-uri", value: "Colecționare Viniluri" },
    { id: 49, name: "Hobby-uri", value: "Colecționare Fosile sau Roci" },
    { id: 50, name: "Hobby-uri", value: "Construcție de Modele" },
    { id: 51, name: "Hobby-uri", value: "Origami" },
    { id: 52, name: "Hobby-uri", value: "Mărgelit" },
    { id: 53, name: "Hobby-uri", value: "Puzzle-uri" },
    { id: 54, name: "Hobby-uri", value: "Șah" },
    { id: 55, name: "Hobby-uri", value: "Sudoku" },
    { id: 56, name: "Hobby-uri", value: "Călătorii" },
    { id: 57, name: "Hobby-uri", value: "Excursii cu Mașina" },
    { id: 58, name: "Hobby-uri", value: "Drumeții cu Rucsacul" },
    { id: 59, name: "Hobby-uri", value: "Vizionare de Filme" },
    { id: 60, name: "Hobby-uri", value: "Podcasting" },
    { id: 61, name: "Hobby-uri", value: "Creare de Conținut/Streaming" },
    { id: 62, name: "Hobby-uri", value: "Astrologie" },
    { id: 63, name: "Hobby-uri", value: "Cosplaying" },
    { id: 64, name: "Hobby-uri", value: "Parkour" },
    { id: 65, name: "Hobby-uri", value: "Altul" }
  ];

  const getById = (id) => features.find((item) => item.id === id);

  const contextValue = useMemo(() => ({ features, getById }), [features]);

  return <StudentAttributesContext.Provider value={contextValue}>{children}</StudentAttributesContext.Provider>;
};

const useData = () => useContext(StudentAttributesContext);

export { StudentAttributesProvider, useData };
