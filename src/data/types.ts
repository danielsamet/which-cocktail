export type IngredientTypeLiterals =
  | "base"
  | "mixer"
  | "juice"
  | "liqueur"
  | "bitter"
  | "fruit"
  | "other";

export type Ingredient<
  IType extends IngredientTypeLiterals = IngredientTypeLiterals
> = {
  name: string;
  type: IType;
  description?: string;
  aliases?: string[];
};

export type Cocktail = {
  name: string;
  ingredients: Ingredient[];
  description?: string;
};
