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
};

export type Cocktail = {
  name: string;
  ingredients: Ingredient[];
  description?: string;
  address?: string;
  urlSafeName?: string;
};
