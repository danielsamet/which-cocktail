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
  callback?: (ingredient: Ingredient) => void;
  urlSafeName?: string;
};

export type Cocktail = {
  name: string;
  ingredients: Ingredient[];
  description?: string;
  urlSafeName?: string;
};
