import { useContext } from "react";
import { Link } from "react-router-dom";
import Animal from "./Animal";
import { NameHeading } from "./StyledComponents/Headings";
import { StyledImage } from "./StyledComponents/Images";
import { AnimalWrapper, ImageWrapperSmall } from "./StyledComponents/Wrappers";
import { ZooContext } from "./Zoo";

export default function Animals() {
  const animals = useContext(ZooContext);

  let html = animals.map((animal) => {
    return (
      <AnimalWrapper key={animal.id} >
        <NameHeading>{animal.name}</NameHeading>
        <ImageWrapperSmall>
          <StyledImage src={animal.imageUrl} alt={animal.name} />
        </ImageWrapperSmall>
        <p>{animal.shortDescription}</p>
         <Link to={`animal/${animal.id}`}>Check</Link> 
      </AnimalWrapper>
    );
  });

  return <>
  {html}
  </>;
}
