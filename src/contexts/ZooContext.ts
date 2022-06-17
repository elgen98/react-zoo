import { createContext } from "react";
import { IAnimal } from "../models/IAnimal";

export const animalArray: IAnimal[] = JSON.parse(
  localStorage.getItem("animals") || "[]"
);

export const ZooContext = createContext(animalArray);
