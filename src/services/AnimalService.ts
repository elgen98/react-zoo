import axios from "axios";
import { IAnimal } from "../models/IAnimal";

export default class AnimalService {
  async getAnimals(): Promise<IAnimal[]> {
    const response = await axios.get<IAnimal[]>(
      "https://animals.azurewebsites.net/api/animals"
    );

    return response.data;
  }
}
