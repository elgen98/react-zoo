import { IAnimal } from "../models/IAnimal";

interface IFeedButtonProps {
  recievedAnimal: IAnimal;
  feedAnimal(recievedAnimal: IAnimal): void;
}

export default function FeedButton(props: IFeedButtonProps) {
  function prepareFood(animal: IAnimal) {
    animal.isFed = true;
    animal.lastFed = new Date().toUTCString();
    props.feedAnimal(animal);
  }

  let button = (
    <button onClick={() => prepareFood(props.recievedAnimal)}>Mata</button>
  );
  if (props.recievedAnimal.isFed) {
    button = <button disabled>Mata</button>;
  }

  return <>{button}</>;
}
