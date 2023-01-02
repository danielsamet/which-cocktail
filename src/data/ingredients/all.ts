import { Ingredient } from "../types";
import {
  Bases,
  Bitters,
  Fruits,
  Juices,
  Liqueurs,
  Mixers,
  Others,
} from "./ingredients";

export const ingredients: Ingredient[] = [
  ...Object.values(Bases),
  ...Object.values(Mixers),
  ...Object.values(Juices),
  ...Object.values(Liqueurs),
  ...Object.values(Bitters),
  ...Object.values(Fruits),
  ...Object.values(Others),
].map((ingredient) => ({
  ...ingredient,
  urlSafeName: ingredient.name.replaceAll(" ", "-"),
}));
