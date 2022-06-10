import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ZooContext } from "../Zoo";

export default function Animal() {
  const animals = useContext(ZooContext);
  let params: any = useParams();

  console.log(animals[params.id - 1]);

  return <>{params.id}</>;
}
