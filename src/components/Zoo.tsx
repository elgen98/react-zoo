import { useEffect, useState, createContext } from "react";
import IAnimal from "../models/IAnimal";
import AnimalService from "../services/AnimalService";
import Animals  from "./routes/Animals";
import { AnimalsWrapper } from "./StyledComponents/Wrappers";

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
      <AnimalsWrapper>
        <Animals />
      </AnimalsWrapper>
    </ZooContext.Provider>
  );
}
