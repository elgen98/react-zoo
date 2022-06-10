import { useContext } from "react";
import { useParams } from "react-router-dom";
import { NameHeadingBig } from "../StyledComponents/Headings";
import { StyledImage } from "../StyledComponents/Images";
import {
  AnimalWrapper,
  ImageWrapperBig,
  NameWrapper,
} from "../StyledComponents/Wrappers";
import { ZooContext } from "../Zoo";

export default function Animal() {
  const animals = useContext(ZooContext);
  let params: any = useParams();

  let animal = animals[params.id];

  return (
    <AnimalWrapper>
      <NameWrapper>
        <NameHeadingBig>{animal.name}</NameHeadingBig>
        <small>({animal.latinName})</small>
      </NameWrapper>
      <ImageWrapperBig>
        <StyledImage src={animal.imageUrl} alt={animal.name} />
      </ImageWrapperBig>
      <p>
        Född: {animal.yearOfBirth}
        <br />
        {animal.shortDescription}
      </p>
      <details>
        <summary>Utökad information</summary>
        <p>{animal.longDescription}</p>
      </details>
      <div>
        <p>Matad: {animal.isFed.toString()}</p>
        <button>Mata</button>
        <small> Senaste matningen: {animal.lastFed}</small>
      </div>
    </AnimalWrapper>
  );
}
