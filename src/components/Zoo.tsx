import { useEffect, useState, createContext } from "react";
import { Link, Outlet } from "react-router-dom";
import IAnimal from "../models/IAnimal";
import AnimalService from "../services/AnimalService";

const animalArray: IAnimal[] = [];

export const ZooContext = createContext(animalArray);

export default function Zoo() {
  const [animals, setAnimals] = useState(animalArray);

  useEffect(() => {
    if (animals.length !== 0) return;

    let service = new AnimalService();

    service.getAnimals().then((response) => {
      setAnimals(response);
    });
  });

  //localStorage.setItem("animals", JSON.stringify(animals));
  // Behöver Outlet och en Layout
  // Kika Context till Animal.tsx

  return (
    <ZooContext.Provider value={animals}>
      <header>
        <Link to="/">Home</Link>
      </header>
      <Outlet />
    </ZooContext.Provider>
  );
}
