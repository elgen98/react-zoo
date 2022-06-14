import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IAnimal, defaultValue } from "../models/IAnimal";
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
  const [currentAnimal, setCurrentAnimal] = useState(defaultValue);
  // Ta bort any

  useEffect(() => {
    if (id) {
      setCurrentAnimal(animals[id]);
    }
  }, []);

  // Skicka currentAnimal till feedbutton sen lifting state up hit som sedan uppdateras state i zoo.

  function updateState(animal: IAnimal) {
    setCurrentAnimal({ ...animal });
    animals[id] = currentAnimal;
    props.setAnimals(animals);
    console.log(currentAnimal);
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
