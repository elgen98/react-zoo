import { createContext } from "vm";
import IAnimal from "../models/IAnimal";

export const animalArray: IAnimal[] = [];

export const ZooContext = createContext(animalArray);
