import { AnimalWrapper, ImageWrapperBig } from "./StyledComponents/Wrappers";
import { StyledImage } from "./StyledComponents/Images";
import { HomeLink } from "./StyledComponents/MiscTags";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <AnimalWrapper>
      <HomeLink>
        <Link to="/">Hem</Link>
      </HomeLink>
      <h3>404 sidan kunde inte hittas.</h3>
      <ImageWrapperBig>
        <StyledImage
          src="https://th.bing.com/th/id/OIP.FuWXD5OAEc4mJwGp4swt0QHaEF?pid=ImgDet&rs=1"
          alt="404Image"
        />
      </ImageWrapperBig>
      <p>
        Sidan du letar efter finns inte. Klicka på hemknappen för att återgå
        till startsidan.{" "}
      </p>
    </AnimalWrapper>
  );
}
