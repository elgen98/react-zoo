import IAnimal from "../models/IAnimal";

interface IFeedButtonProps {
  recievedAnimal: IAnimal;
  feedAnimal(recievedAnimal: IAnimal): void;
}

export default function FeedButton(props: IFeedButtonProps) {
  /* function feedAnimal(animal: IAnimal) {
    animal.isFed = true;
    animal.lastFed = new Date().toUTCString();
    console.log(animal);
    return animal;
  } */

  return (
    <>
      <button onClick={() => props.feedAnimal(props.recievedAnimal)}>
        Mata
      </button>
    </>
  );
}
