import {
  Bases,
  Bitters,
  Fruits,
  Juices,
  Liqueurs,
  Mixers,
  Others,
} from "./ingredients";
import { Cocktail } from "./types";

export const cocktails: Cocktail[] = [
  {
    name: "Martini",
    ingredients: [Bases.DRY_GIN, Bases.DRY_VERMOUTH],
  },
  {
    name: "Old Fashioned",
    ingredients: [
      Others.SUGAR_CUBE,
      Bitters.AROMATIC,
      Mixers.SODA_WATER,
      Bases.BOURBON,
    ],
  },
  {
    name: "Cosmopolitan",
    ingredients: [Bases.VODKA, Liqueurs.ORANGE, Juices.CRANBERRY],
  },
  {
    name: "Long Island Iced Tea",
    ingredients: [
      Bases.VODKA,
      Bases.DRY_GIN,
      Bases.WHITE_RUM,
      Bases.SILVER_TEQUILA,
      Juices.LEMON,
      Liqueurs.ORANGE,
      Others.SUGAR_CUBE,
    ],
  },
  {
    name: "Gin Rickey",
    ingredients: [
      Bases.DRY_GIN,
      Juices.LIME,
      Others.SIMPLE_SYRUP,
      Mixers.SODA_WATER,
    ],
  },
  {
    name: "Whiskey Sour",
    ingredients: [
      Bases.BOURBON,
      Juices.CHERRY,
      Bitters.AROMATIC,
      Juices.LEMON,
      Others.SIMPLE_SYRUP,
    ],
  },
  {
    name: "Rob Roy",
    ingredients: [
      Bases.VODKA,
      Bases.WHISKY,
      Bases.SWEET_VERMOUTH,
      Bitters.AROMATIC,
    ],
  },
  {
    name: "Americano",
    ingredients: [Bitters.CAMPARI, Bases.SWEET_VERMOUTH, Mixers.SODA_WATER],
  },
  {
    name: "Singapore Sling",
    ingredients: [
      Bases.DRY_GIN,
      Liqueurs.CHERRY,
      Juices.LEMON,
      Others.GRENADINE,
      Mixers.SODA_WATER,
    ],
  },
  {
    name: "Negroni",
    ingredients: [Bases.DRY_GIN, Bases.SWEET_VERMOUTH, Bitters.CAMPARI],
  },
  {
    name: "Manhattan",
    ingredients: [Bases.BOURBON, Bases.SWEET_VERMOUTH, Bitters.AROMATIC],
  },
  { name: "Gimlet", ingredients: [Bases.DRY_GIN, Juices.LIME] },
  {
    name: "Champagne Cocktail",
    ingredients: [
      Others.SUGAR_CUBE,
      Bitters.AROMATIC,
      Liqueurs.BRANDY,
      Bases.CHAMPAGNE,
    ],
  },
  {
    name: "Moscow Mule",
    ingredients: [Juices.LIME, Bases.VODKA, Mixers.GINGER_BEER],
  },
  {
    name: "Rosita",
    ingredients: [
      Bases.SILVER_TEQUILA,
      Bases.SWEET_VERMOUTH,
      Bases.DRY_VERMOUTH,
      Bitters.APEROL,
      Bitters.AROMATIC,
    ],
  },
  {
    name: "Apple Catcher",
    ingredients: [
      Liqueurs.APPLE,
      Juices.ORANGE,
      Juices.LEMON,
      Others.MAPLE_SYRUP,
    ],
  },
  {
    name: "Spartacus",
    ingredients: [
      Bases.WHISKY,
      Juices.ORANGE,
      Bases.SWEET_VERMOUTH,
      Liqueurs.CHERRY,
    ],
  },
  {
    name: "Take Ivy",
    ingredients: [Bases.DRY_GIN, Bitters.ORANGE, Bases.PORT],
  },
  {
    name: "Espresso Martini",
    ingredients: [
      Bases.VODKA,
      Others.COLD_ESPRESSO,
      Liqueurs.COFFEE,
      Others.BROWN_SUGAR,
    ],
  },
  {
    name: "Holy Water",
    ingredients: [
      Bases.VODKA,
      Liqueurs.ORANGE,
      Bases.WHITE_RUM,
      Mixers.TONIC_WATER,
      Others.GRENADINE,
    ],
  },
  {
    name: "Maxim",
    ingredients: [
      Bases.DRY_GIN,
      Bases.DRY_VERMOUTH,
      Liqueurs.DARK_CREME_DE_CACAO,
    ],
  },
  {
    name: "The Slammer",
    ingredients: [Bases.GOLD_TEQUILA, Bases.CHAMPAGNE, Liqueurs.CREME_DE_CACAO],
  },
  {
    name: "Sour Fizz",
    ingredients: [
      Bases.GOLD_TEQUILA,
      Juices.LIME,
      Others.HONEY,
      Bitters.ORANGE,
    ],
  },
  {
    name: "Dirty Dick",
    ingredients: [
      Bases.GOLD_TEQUILA,
      Bases.BLACK_PEPPER_VODKA,
      Juices.LIME,
      Others.CAPER_BERRY_BRINE,
    ],
  },
  {
    name: "Class Act",
    ingredients: [
      Others.SUGAR_CUBE,
      Bitters.AROMATIC,
      Liqueurs.GRAND_MARNIER,
      Bases.CHAMPAGNE,
    ],
  },
  {
    name: "Rudolph",
    ingredients: [Bases.DRY_GIN, Liqueurs.ELDERFLOWER, Bases.CHAMPAGNE],
  },
  {
    name: "Pina Colada",
    ingredients: [
      Bases.WHITE_RUM,
      Bases.DARK_RUM,
      Juices.PINEAPPLE,
      Others.COCONUT_CREAM,
    ],
  },
  {
    name: "Mojito",
    ingredients: [
      Juices.LIME,
      Others.SUGAR,
      Others.MINT,
      Bases.WHITE_RUM,
      Mixers.SODA_WATER,
    ],
  },
  {
    name: "Peach & Black Pepper Margarita",
    ingredients: [
      Others.SEA_SALT_FLAKES,
      Others.CRUSHED_BLACK_PEPPER,
      Juices.LIME,
      Fruits.PEACH,
      Bases.BLACK_PEPPER_TEQUILA,
      Liqueurs.PEACH,
    ],
  },
  {
    name: "Tequila Pomegranate",
    ingredients: [
      Bases.SILVER_TEQUILA,
      Liqueurs.ORANGE,
      Juices.LIME,
      Juices.POMEGRANATE,
    ],
  },
  {
    name: "Banana Daiquiri",
    ingredients: [
      Bases.DARK_RUM,
      Liqueurs.BANANA,
      Juices.LIME,
      Others.SIMPLE_SYRUP,
      Fruits.BANANA,
    ],
  },
  {
    name: "Beach House",
    ingredients: [Bases.DRY_GIN, Juices.LIME, Mixers.COCONUT_WATER],
  },
  {
    name: "Big Cardomomma's House",
    ingredients: [
      Fruits.MANGO,
      Liqueurs.PEACH,
      Juices.LIME,
      Others.CARDAMOM_SYRUP,
      Bases.CHAMPAGNE,
    ],
  },
  {
    name: "Pineapple Mountain",
    ingredients: [
      Bases.AGED_RUM,
      Juices.PINEAPPLE,
      Juices.LEMON,
      Others.GINGER_SYRUP,
      Bitters.AROMATIC,
    ],
  },
  {
    name: "Frozen Ginger Margarita",
    ingredients: [
      Bases.SILVER_TEQUILA,
      Liqueurs.ORANGE,
      Others.GINGER_SYRUP,
      Juices.LIME,
      Fruits.LIME_ZEST,
      Juices.LEMON,
      Juices.ORANGE,
      Bases.CHAMPAGNE,
    ],
  },
  {
    name: "Watermelon Bloody Mary",
    ingredients: [
      Bases.VODKA,
      Bases.DRY_WHITE_WINE,
      Juices.WATERMELON,
      Juices.LEMON,
      Others.MINT,
      Others.CRUSHED_BLACK_PEPPER,
      Bitters.AROMATIC,
    ],
  },
  {
    name: "Bloody Mary",
    ingredients: [
      Bases.VODKA,
      Bases.DRY_WHITE_WINE,
      Others.TABASCO,
      Others.WORCESTERSHIRE_SAUCE,
      Juices.TOMATO,
      Juices.LEMON,
      Others.CELERY_SALT,
      Others.CAYENNE_PEPPER,
    ],
  },
  {
    name: "Fire in the Blood",
    ingredients: [
      Others.DILL,
      Others.DIJON_MUSTARD,
      Others.TABASCO,
      Others.WORCESTERSHIRE_SAUCE,
      Bases.BLACK_PEPPER_VODKA,
      Juices.TOMATO,
      Juices.LEMON,
      Others.CELERY_SALT,
      Others.CRUSHED_BLACK_PEPPER,
    ],
  },
  {
    name: "Sangrita",
    ingredients: [
      Bases.SILVER_TEQUILA,
      Bases.DRY_SHERRY,
      Others.CREAMED_HORSERADISH,
      Others.WORCESTERSHIRE_SAUCE,
      Juices.CLAMATO,
      Juices.LEMON,
      Others.CELERY_SALT,
      Others.CAYENNE_PEPPER,
    ],
  },
  {
    name: "Wasabian",
    ingredients: [
      Others.WASABI,
      Others.CELERY_SALT,
      Juices.LIME,
      Juices.LEMON,
      Bases.VODKA,
      Bases.SAKE,
      Juices.TOMATO,
      Bitters.AROMATIC,
    ],
  },
].map((cocktail) => ({
  ...cocktail,
  urlSafeName: cocktail.name.replaceAll(" ", "-"),
}));
