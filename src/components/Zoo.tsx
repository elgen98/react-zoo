import { useEffect, useState, createContext } from "react";
import IAnimal from "../models/IAnimal";
import AnimalService from "../services/AnimalService";
import { Animals } from "./Animals";
import { AppWrapper } from "./StyledComponents/Wrappers";

const animalArray: IAnimal[] = [];

export const ZooContext = createContext(animalArray);

export default function Zoo() {
  const [animals, setAnimals] = useState(animalArray);

  useEffect(() => {
    if (animals.length !== 0) return;

    let service = new AnimalService();

    service.getAnimals().then((response) => {
      console.log("Resulat från service", response);
      setAnimals(response);
    });
  });

  //localStorage.setItem("animals", JSON.stringify(animals));

  return (
    <ZooContext.Provider value={animals}>
      <AppWrapper>
        <Animals />
      </AppWrapper>
    </ZooContext.Provider>
  );
}
