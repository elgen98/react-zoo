import { useEffect, useState } from "react";
import IAnimal from "../models/IAnimal";
import AnimalService from "../services/AnimalService";
import { NameHeading } from "./StyledComponents/Headings";
import { StyledImage } from "./StyledComponents/Images";
import {
  AnimalWrapper,
  AppWrapper,
  ImageWrapperSmall,
} from "./StyledComponents/Wrappers";

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
        <NameHeading>{animal.name}</NameHeading>
        <ImageWrapperSmall>
          <StyledImage src={animal.imageUrl} alt={animal.name} />
        </ImageWrapperSmall>
        <p>{animal.shortDescription}</p>
      </AnimalWrapper>
    );
  });

  return <AppWrapper>{html}</AppWrapper>;
}
