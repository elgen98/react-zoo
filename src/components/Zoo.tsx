import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimalService from "../services/AnimalService";
import { ZooContext, animalArray } from "../contexts/ZooContext";
import Animals from "./Animals";
import Animal from "./Animal";
import { IAnimal } from "../models/IAnimal";
import PageNotFound from "./PageNotFound";

export default function Zoo() {
  const [animals, setAnimals] = useState(animalArray);

  useEffect(() => {
    if (animals.length !== 0) return;

    let service = new AnimalService();

    service.getAnimals().then((response) => {
      setAnimals(response);
      localStorage.setItem("animals", JSON.stringify(response));
    });
  });

  function checkState(animals: IAnimal[]) {
    setAnimals(animals);
    localStorage.setItem("animals", JSON.stringify(animals));
  }

  return (
    <ZooContext.Provider value={animals}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Animals />} />
          <Route
            path="animal/:id"
            element={<Animal setAnimals={checkState} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ZooContext.Provider>
  );
}
