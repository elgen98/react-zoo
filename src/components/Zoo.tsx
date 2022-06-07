import { useEffect, useState } from "react";
import IAnimal from "../models/IAnimal";
import AnimalService from "../services/AnimalService";
import { StyledImage } from "./StyledComponents/Images";
import { AnimalWrapper, ImageWrapper } from "./StyledComponents/Wrappers";

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

  //localStorage.setItem("animals", JSON.stringify(animals));

  let html = animals.map((animal) => {
    return (
      <AnimalWrapper key={animal.id}>
        <h2>{animal.name}</h2>
        <ImageWrapper>
          <StyledImage src={animal.imageUrl} alt={animal.name} />
        </ImageWrapper>
        <p>{animal.shortDescription}</p>
      </AnimalWrapper>
    );
  });

  return <>{html}</>;
}
