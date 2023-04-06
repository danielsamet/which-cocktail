import { Ingredient, IngredientTypeLiterals } from "../types";

type IngredientMap<IType extends IngredientTypeLiterals> = {
  [identifier: string]: Ingredient<IType>;
};

export const Bases: IngredientMap<"base"> = {
  VODKA: {
    name: "vodka",
    type: "base",
    description:
      "Vodka is composed mainly of water and ethanol but sometimes with traces of impurities and flavourings. Traditionally, it is made by distilling liquid from fermented cereal grains, and potatoes since introduced in Europe in the 1700's. Some modern brands use fruits, honey, or maple sap as the base.",
  },
  BLACK_PEPPER_VODKA: { name: "black pepper vodka", type: "base" },
  BOURBON: { name: "bourbon", type: "base" },
  WHISKY: { name: "whisky", type: "base" },
  DRY_GIN: { name: "dry gin", type: "base" },
  WHITE_RUM: { name: "white rum", type: "base" },
  DARK_RUM: { name: "dark rum", type: "base" },
  AGED_RUM: { name: "aged rum", type: "base" },
  SPICED_RUM: { name: "spiced rum", type: "base" },
  SILVER_TEQUILA: { name: "silver tequila", type: "base" },
  GOLD_TEQUILA: { name: "gold tequila", type: "base" },
  BLACK_PEPPER_TEQUILA: { name: "black pepper tequila", type: "base" },
  DRY_WHITE_WINE: { name: "dry white wine", type: "base" },
  DRY_RED_WINE: { name: "dry red wine", type: "base" },
  SWEET_WHITE_WINE: { name: "sweet white wine", type: "base" },
  SWEET_RED_WINE: { name: "sweet red wine", type: "base" },
  DRY_SHERRY: { name: "dry sherry", type: "base" },
  SWEET_SHERRY: { name: "sweet sherry", type: "base" },
  PORT: { name: "port", type: "base" },
  CHAMPAGNE: { name: "champagne", type: "base" },
  DRY_VERMOUTH: { name: "dry vermouth", type: "base" },
  SWEET_VERMOUTH: { name: "sweet vermouth", type: "base" },
  SAKE: { name: "sake", type: "base" },
} as const;

export const Mixers: IngredientMap<"mixer"> = {
  SODA_WATER: { name: "soda water", type: "mixer" },
  TONIC_WATER: { name: "tonic water", type: "mixer" },
  COCONUT_WATER: { name: "coconut water", type: "mixer" },
  COLA: { name: "cola", type: "mixer" },
  GINGER_ALE: { name: "ginger ale", type: "mixer" },
  GINGER_BEER: { name: "ginger beer", type: "mixer" },
} as const;

export const Juices: IngredientMap<"juice"> = {
  CRANBERRY: { name: "cranberry", type: "juice" },
  GRAPEFRUIT: { name: "grapefruit", type: "juice" },
  LEMON: { name: "lemon", type: "juice" },
  LIME: { name: "lime", type: "juice" },
  ORANGE: { name: "orange", type: "juice" },
  PINEAPPLE: { name: "pineapple", type: "juice" },
  APPLE: { name: "apple", type: "juice" },
  CHERRY: { name: "cherry", type: "juice" },
  POMEGRANATE: { name: "pomegranate", type: "juice" },
  WATERMELON: { name: "watermelon", type: "juice" },
  TOMATO: { name: "tomato", type: "juice" },
  CLAMATO: { name: "clamato", type: "juice" },
} as const;

export const Liqueurs: IngredientMap<"liqueur"> = {
  ALMOND: { name: "almond", type: "liqueur" },
  CHERRY: { name: "cherry", type: "liqueur" },
  CHOCOLATE: { name: "chocolate", type: "liqueur" },
  COFFEE: { name: "coffee", type: "liqueur" },
  COCONUT: { name: "coconut", type: "liqueur" },
  IRISH_CREAM: { name: "irish cream", type: "liqueur" },
  HERBAL: { name: "herbal", type: "liqueur" },
  MINT: { name: "mint", type: "liqueur" },
  MELON: { name: "melon", type: "liqueur" },
  ORANGE: { name: "orange", type: "liqueur" },
  PEACH: { name: "peach", type: "liqueur" },
  RASPBERRY: { name: "raspberry", type: "liqueur" },
  SLOE_BERRY: { name: "sloe berry", type: "liqueur" },
  SOUTHERN_COMFORT: { name: "southern comfort", type: "liqueur" },
  BRANDY: { name: "brandy", type: "liqueur" },
  ELDERFLOWER: { name: "elderflower", type: "liqueur" },
  APPLE: { name: "apple", type: "liqueur" },
  BANANA: { name: "banana", type: "liqueur" },
  GRAND_MARNIER: { name: "grand marnier", type: "liqueur" },
  CREME_DE_CACAO: { name: "creme de cacao", type: "liqueur" },
  DARK_CREME_DE_CACAO: { name: "dark creme de cacao", type: "liqueur" },
} as const;

export const Bitters: IngredientMap<"bitter"> = {
  AROMATIC: { name: "aromatic bitters", type: "bitter" },
  ORANGE: { name: "orange bitters", type: "bitter" },
  COCOA: { name: "cocoa bitters", type: "bitter" },
  CAMPARI: { name: "campari", type: "bitter" },
  APEROL: { name: "aperol", type: "bitter" },
} as const;

export const Fruits: IngredientMap<"fruit"> = {
  PEACH: { name: "peach", type: "fruit" },
  BANANA: { name: "banana", type: "fruit" },
  MANGO: { name: "mango", type: "fruit" },
  LIME_ZEST: { name: "lime zest", type: "fruit" },
  LEMON_ZEST: { name: "lemon zest", type: "fruit" },
} as const;

export const Others: IngredientMap<"other"> = {
  SUGAR: { name: "sugar", type: "other" },
  BROWN_SUGAR: { name: "brown sugar", type: "other" },
  SIMPLE_SYRUP: { name: "simple syrup", type: "other" },
  CARDAMOM_SYRUP: { name: "cardamom syrup", type: "other" },
  GINGER_SYRUP: { name: "ginger syrup", type: "other" },
  HONEY: { name: "honey", type: "other" },
  GRENADINE: { name: "grenadine", type: "other" },
  MAPLE_SYRUP: { name: "maple syrup", type: "other" },
  COLD_ESPRESSO: { name: "cold espresso", type: "other" },
  CAPER_BERRY_BRINE: { name: "caper berry brine", type: "other" },
  COCONUT_CREAM: { name: "coconut cream", type: "other" },
  MINT: { name: "mint", type: "other" },
  SEA_SALT_FLAKES: { name: "sea salt flakes", type: "other" },
  CELERY_SALT: { name: "celery salt", type: "other" },
  CRUSHED_BLACK_PEPPER: { name: "crushed black pepper", type: "other" },
  CAYENNE_PEPPER: { name: "cayenne pepper", type: "other" },
  TABASCO: { name: "tabasco", type: "other" },
  WORCESTERSHIRE_SAUCE: { name: "worcestershire sauce", type: "other" },
  DILL: { name: "dill", type: "other" },
  DIJON_MUSTARD: { name: "dijon mustard", type: "other" },
  CREAMED_HORSERADISH: { name: "creamed horseradish", type: "other" },
  WASABI: { name: "wasabi", type: "other" },
  OLIVE: { name: "olive", type: "other" },
  MARASCHINO_CHERRY: { name: "maraschino cherry", type: "other" },
  ORANGE_PEEL: { name: "orange peel", type: "other" },
  LEMON_PEEL: { name: "lemon peel", type: "other" },
  LEMON_SLICE: { name: "lemon slice", type: "other" },
  LIME_SLICE: { name: "lime slice", type: "other" },
} as const;
