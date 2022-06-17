import { useContext } from "react";
import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { AppNameHeading, NameHeading } from "./StyledComponents/Headings";
import { StyledImage } from "./StyledComponents/Images";
import {
  AnimalsWrapper,
  AnimalWrapper,
  ImageWrapperSmall,
} from "./StyledComponents/Wrappers";
import { ZooContext } from "../contexts/ZooContext";
import { imageOnErrorHandler } from "../utils/ImageErrorHandler";
import { StyledLink } from "./StyledComponents/MiscTags";

export default function Animals() {
  const animals: IAnimal[] = useContext(ZooContext);

  let html = animals.map((animal) => {
    return (
      <AnimalWrapper key={animal.id}>
        <NameHeading>{animal.name}</NameHeading>
        <ImageWrapperSmall>
          <StyledImage
            src={animal.imageUrl}
            alt={animal.name}
            onError={imageOnErrorHandler}
          />
        </ImageWrapperSmall>
        <p>{animal.shortDescription}</p>
        <StyledLink>
          <Link to={`animal/${animal.id - 1}`}>Inspektera</Link>
        </StyledLink>
      </AnimalWrapper>
    );
  });

  return (
    <>
      <header>
        <AppNameHeading>Skanskes Virtuella Mini-Zoo</AppNameHeading>
      </header>
      <AnimalsWrapper>{html}</AnimalsWrapper>
    </>
  );
}
