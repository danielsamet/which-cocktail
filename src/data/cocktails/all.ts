import { sourceOne } from "./sourceOne";
import { Cocktail } from "../types";

export const cocktails: Cocktail[] = [...sourceOne].map((cocktail) => ({
  ...cocktail,
  urlSafeName: cocktail.name.replaceAll(" ", "-"),
}));
