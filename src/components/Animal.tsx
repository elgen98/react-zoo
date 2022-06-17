import { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IAnimal, defaultValue } from "../models/IAnimal";
import { NameHeadingBig } from "./StyledComponents/Headings";
import { StyledImage } from "./StyledComponents/Images";
import {
  AnimalFoodWrapper,
  AnimalInfoWrapper,
  AnimalPageWrapper,
  BigAnimalWrapper,
  ImageWrapperBig,
  NameWrapper,
} from "./StyledComponents/Wrappers";
import { ZooContext } from "../contexts/ZooContext";
import FeedButton from "./FeedButton";
import { imageOnErrorHandler } from "../utils/ImageErrorHandler";
import { HomeLink, StyledDetails } from "./StyledComponents/MiscTags";

interface IParams {
  id: string;
}

interface IAnimalProps {
  setAnimals(animals: IAnimal[]): void;
}

//const errorImage = "../assets/imageNotFound.png";

export default function Animal(props: IAnimalProps) {
  const animals: IAnimal[] = useContext(ZooContext);
  const { id } = useParams<Partial<IParams>>();
  let index = useRef(0);
  const [currentAnimal, setCurrentAnimal] = useState(defaultValue);

  useEffect(() => {
    if (currentAnimal !== defaultValue) return;
    if (id) {
      index.current = parseInt(id);
      setCurrentAnimal(animals[index.current]);
    }
  });

  function updateState(animal: IAnimal): void {
    setCurrentAnimal({ ...animal });
    animals[index.current] = currentAnimal;
    props.setAnimals(animals);
    console.log(currentAnimal);
  }

  return (
    <AnimalPageWrapper>
      <header>
        <HomeLink>
          <Link to="/">Hem</Link>
        </HomeLink>
      </header>
      <BigAnimalWrapper>
        <NameWrapper>
          <NameHeadingBig>{currentAnimal.name}</NameHeadingBig>
          <small>({currentAnimal.latinName})</small>
        </NameWrapper>
        <ImageWrapperBig>
          <StyledImage
            src={currentAnimal.imageUrl}
            alt={currentAnimal.name}
            onError={imageOnErrorHandler}
          />
        </ImageWrapperBig>
        <AnimalInfoWrapper>
          <b>Född: {currentAnimal.yearOfBirth}</b>
          <p>{currentAnimal.shortDescription}</p>
          <StyledDetails>
            <summary>Utökad information</summary>
            <p>{currentAnimal.longDescription}</p>
          </StyledDetails>
        </AnimalInfoWrapper>
        <AnimalFoodWrapper>
          {currentAnimal.isFed ? (
            <strong>Jag är mätt.</strong>
          ) : (
            <strong>Jag är hungrig.</strong>
          )}
          <FeedButton recievedAnimal={currentAnimal} feedAnimal={updateState} />
          <small> Senast matad: {currentAnimal.lastFed}</small>
        </AnimalFoodWrapper>
      </BigAnimalWrapper>
    </AnimalPageWrapper>
  );
}
