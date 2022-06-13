import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import IAnimal from "../models/IAnimal";
import { NameHeadingBig } from "./StyledComponents/Headings";
import { StyledImage } from "./StyledComponents/Images";
import {
  AnimalWrapper,
  ImageWrapperBig,
  NameWrapper,
} from "./StyledComponents/Wrappers";
import { ZooContext } from "../contexts/ZooContext";
import FeedButton from "./FeedButton";

interface IParams {
  id: string;
}

interface IAnimalProps {
  setAnimals(animals: IAnimal[]): void;
}

export default function Animal(props: IAnimalProps) {
  const animals: IAnimal[] = useContext(ZooContext);
  const { id }: any = useParams<Partial<IParams>>();
  // Ta bort any

  const [currentAnimal, setCurrentAnimal] = useState(animals[id]);
  // Skicka currentAnimal till feedbutton sen lifting state up hit som sedan uppdateras state i zoo.

  function updateState(a: IAnimal) {
    if (a.isFed === false) a.isFed = true;
    a.lastFed = new Date().toUTCString();
    setCurrentAnimal({ ...currentAnimal, isFed: a.isFed, lastFed: a.lastFed });
    animals[id] = currentAnimal;
    props.setAnimals(animals);
  }

  return (
    <>
      <header>
        <Link to="/">Hem</Link>
      </header>
      <AnimalWrapper>
        <NameWrapper>
          <NameHeadingBig>{currentAnimal.name}</NameHeadingBig>
          <small>({currentAnimal.latinName})</small>
        </NameWrapper>
        <ImageWrapperBig>
          <StyledImage src={currentAnimal.imageUrl} alt={currentAnimal.name} />
        </ImageWrapperBig>
        <p>
          Född: {currentAnimal.yearOfBirth}
          <br />
          {currentAnimal.shortDescription}
        </p>
        <details>
          <summary>Utökad information</summary>
          <p>{currentAnimal.longDescription}</p>
        </details>
        <div>
          {currentAnimal.isFed ? (
            <div>Jag är mätt.</div>
          ) : (
            <div>Jag är hungrig.</div>
          )}
          <FeedButton recievedAnimal={currentAnimal} feedAnimal={updateState} />
          <small> Senaste matningen: {currentAnimal.lastFed}</small>
        </div>
      </AnimalWrapper>
    </>
  );
}
