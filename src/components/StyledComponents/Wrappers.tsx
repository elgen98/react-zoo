import styled from "styled-components";

export const AnimalsWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
  background-image: url(https://img.freepik.com/free-vector/tropical-design-leaves-background_23-2148538079.jpg?size=626&ext=jpg);
  background-size: contain;
`;

export const AnimalPageWrapper = styled(AnimalsWrapper)`
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  height: 180vh;
`;

export const AnimalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 600px) {
    width: 30%;
  }
`;

export const AnimalInfoWrapper = styled.div`
  p {
    font-size: 16pt;
  }
`;

export const BigAnimalWrapper = styled(AnimalWrapper)`
  width: 100%;

  @media only screen and (min-width: 600px) {
    width: 40%;
  }
`;

export const ImageWrapperSmall = styled.div`
  width: 50%;
  height: 50%;
`;

export const ImageWrapperBig = styled.div`
  width: 100%;
  @media only screen and (min-width: 600px) {
    width: 80%;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
