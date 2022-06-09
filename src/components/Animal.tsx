import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ZooContext } from "./Zoo";
import IAnimal from "../models/IAnimal"


export default function Animal() {
  let params = useParams();
  const animals = useContext(ZooContext)      

  return <>{params.id}</>;
}
