import { useEffect, useState } from "react";
import IAnimal from "../models/IAnimal";
import AnimalService from "../services/AnimalService";

export default function Zoo() {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    if (animals.length !== 0) return;

    let service = new AnimalService();

    service.getAnimals().then((response) => {
      console.log("Resulat från service", response);
      setAnimals(response);
    });
  });

  let html = animals.map((animal) => {
    return (
      <div key={animal.id}>
        <h2>{animal.name}</h2>
        <img src={animal.imageUrl} alt={animal.name} />
        <p>{animal.shortDescription}</p>
      </div>
    );
  });

  return <>{html}</>;
}
