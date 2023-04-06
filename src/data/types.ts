export const ingredientTypes = [
  "base",
  "mixer",
  "juice",
  "liqueur",
  "bitter",
  "fruit",
  "other",
] as const;

export type IngredientTypeLiterals = typeof ingredientTypes[number];

export type Ingredient<
  IType extends IngredientTypeLiterals = IngredientTypeLiterals
> = {
  name: string;
  type: IType;
  description?: string;
  aliases?: string[];
  address?: string;
  urlSafeName?: string;
} & RoutableItem;

export type Cocktail = {
  name: string;
  components: CocktailComponent[];
  garnishes?: Ingredient<"fruit" | "other">[];
  description?: string;
} & RoutableItem;

type RoutableItem = {
  address?: string;
  urlSafeName?: string;
};

type CocktailComponent = NAND<
  {
    qty: number;
    measure: "measure" | "ml" | "tsp" | "tbsp" | "cube" | "dash" | "piece";
  },
  {
    top: boolean;
  }
> & {
  ingredient: Ingredient;
};

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;
type NAND<T, U> = Without<T, U> | XOR<T, U>;
