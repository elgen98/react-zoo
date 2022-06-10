import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ZooContext } from "../Zoo";

export default function Animal() {
  let params:any = useParams();
  const animals = useContext(ZooContext); 
  
  console.log(animals);  

  return <>{params.id}</>;
}
