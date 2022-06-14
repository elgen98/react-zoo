import styled from "styled-components";

export const AnimalsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
  background-image: url("https://img.freepik.com/free-vector/tropical-design-leaves-background_23-2148538079.jpg?size=626&ext=jpg");
  background-size: contain;
`;

export const AnimalPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
`;

export const AnimalWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BigAnimalWrapper = styled(AnimalWrapper)`
  width: 40%;
`;

export const ImageWrapperSmall = styled.div`
  width: 50%;
  height: 50%;
`;

export const ImageWrapperBig = styled.div`
  width: 100%;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
