import {
  Bases,
  Bitters,
  Fruits,
  Juices,
  Liqueurs,
  Mixers,
  Others,
} from "../ingredients/ingredients";
import { Cocktail } from "../types";

export const sourceOne: Cocktail[] = [
  {
    name: "Martini",
    components: [
      { ingredient: Bases.DRY_GIN },
      { ingredient: Bases.DRY_VERMOUTH },
    ],
  },
  {
    name: "Old Fashioned",
    components: [
      { ingredient: Others.SUGAR_CUBE },
      { ingredient: Bitters.AROMATIC },
      { ingredient: Mixers.SODA_WATER },
      { ingredient: Bases.BOURBON },
    ],
  },
  {
    name: "Cosmopolitan",
    components: [
      { ingredient: Bases.VODKA },
      { ingredient: Liqueurs.ORANGE },
      { ingredient: Juices.CRANBERRY },
    ],
  },
  {
    name: "Long Island Iced Tea",
    components: [
      { ingredient: Bases.VODKA },
      { ingredient: Bases.DRY_GIN },
      { ingredient: Bases.WHITE_RUM },
      { ingredient: Bases.SILVER_TEQUILA },
      { ingredient: Juices.LEMON },
      { ingredient: Liqueurs.ORANGE },
      { ingredient: Others.SUGAR_CUBE },
    ],
  },
  {
    name: "Gin Rickey",
    components: [
      { ingredient: Bases.DRY_GIN },
      { ingredient: Juices.LIME },
      { ingredient: Others.SIMPLE_SYRUP },
      { ingredient: Mixers.SODA_WATER },
    ],
  },
  {
    name: "Whiskey Sour",
    components: [
      { ingredient: Bases.BOURBON },
      { ingredient: Juices.CHERRY },
      { ingredient: Bitters.AROMATIC },
      { ingredient: Juices.LEMON },
      { ingredient: Others.SIMPLE_SYRUP },
    ],
  },
  {
    name: "Rob Roy",
    components: [
      { ingredient: Bases.VODKA },
      { ingredient: Bases.WHISKY },
      { ingredient: Bases.SWEET_VERMOUTH },
      { ingredient: Bitters.AROMATIC },
    ],
  },
  {
    name: "Americano",
    components: [
      { ingredient: Bitters.CAMPARI },
      { ingredient: Bases.SWEET_VERMOUTH },
      { ingredient: Mixers.SODA_WATER },
    ],
  },
  {
    name: "Singapore Sling",
    components: [
      { ingredient: Bases.DRY_GIN },
      { ingredient: Liqueurs.CHERRY },
      { ingredient: Juices.LEMON },
      { ingredient: Others.GRENADINE },
      { ingredient: Mixers.SODA_WATER },
    ],
  },
  {
    name: "Negroni",
    components: [
      { ingredient: Bases.DRY_GIN },
      { ingredient: Bases.SWEET_VERMOUTH },
      { ingredient: Bitters.CAMPARI },
    ],
  },
  {
    name: "Manhattan",
    components: [
      { ingredient: Bases.BOURBON },
      { ingredient: Bases.SWEET_VERMOUTH },
      { ingredient: Bitters.AROMATIC },
    ],
  },
  {
    name: "Gimlet",
    components: [{ ingredient: Bases.DRY_GIN }, { ingredient: Juices.LIME }],
  },
  {
    name: "Champagne Cocktail",
    components: [
      { ingredient: Others.SUGAR_CUBE },
      { ingredient: Bitters.AROMATIC },
      { ingredient: Liqueurs.BRANDY },
      { ingredient: Bases.CHAMPAGNE },
    ],
  },
  {
    name: "Moscow Mule",
    components: [
      { ingredient: Juices.LIME },
      { ingredient: Bases.VODKA },
      { ingredient: Mixers.GINGER_BEER },
    ],
  },
  {
    name: "Rosita",
    components: [
      { ingredient: Bases.SILVER_TEQUILA },
      { ingredient: Bases.SWEET_VERMOUTH },
      { ingredient: Bases.DRY_VERMOUTH },
      { ingredient: Bitters.APEROL },
      { ingredient: Bitters.AROMATIC },
    ],
  },
  {
    name: "Apple Catcher",
    components: [
      { ingredient: Liqueurs.APPLE },
      { ingredient: Juices.ORANGE },
      { ingredient: Juices.LEMON },
      { ingredient: Others.MAPLE_SYRUP },
    ],
  },
  {
    name: "Spartacus",
    components: [
      { ingredient: Bases.WHISKY },
      { ingredient: Juices.ORANGE },
      { ingredient: Bases.SWEET_VERMOUTH },
      { ingredient: Liqueurs.CHERRY },
    ],
  },
  {
    name: "Take Ivy",
    components: [
      { ingredient: Bases.DRY_GIN },
      { ingredient: Bitters.ORANGE },
      { ingredient: Bases.PORT },
    ],
  },
  {
    name: "Espresso Martini",
    components: [
      { ingredient: Bases.VODKA },
      { ingredient: Others.COLD_ESPRESSO },
      { ingredient: Liqueurs.COFFEE },
      { ingredient: Others.BROWN_SUGAR },
    ],
  },
  {
    name: "Holy Water",
    components: [
      { ingredient: Bases.VODKA },
      { ingredient: Liqueurs.ORANGE },
      { ingredient: Bases.WHITE_RUM },
      { ingredient: Mixers.TONIC_WATER },
      { ingredient: Others.GRENADINE },
    ],
  },
  {
    name: "Maxim",
    components: [
      { ingredient: Bases.DRY_GIN },
      { ingredient: Bases.DRY_VERMOUTH },
      { ingredient: Liqueurs.DARK_CREME_DE_CACAO },
    ],
  },
  {
    name: "The Slammer",
    components: [
      { ingredient: Bases.GOLD_TEQUILA },
      { ingredient: Bases.CHAMPAGNE },
      { ingredient: Liqueurs.CREME_DE_CACAO },
    ],
  },
  {
    name: "Sour Fizz",
    components: [
      { ingredient: Bases.GOLD_TEQUILA },
      { ingredient: Juices.LIME },
      { ingredient: Others.HONEY },
      { ingredient: Bitters.ORANGE },
    ],
  },
  {
    name: "Dirty Dick",
    components: [
      { ingredient: Bases.GOLD_TEQUILA },
      { ingredient: Bases.BLACK_PEPPER_VODKA },
      { ingredient: Juices.LIME },
      { ingredient: Others.CAPER_BERRY_BRINE },
    ],
  },
  {
    name: "Class Act",
    components: [
      { ingredient: Others.SUGAR_CUBE },
      { ingredient: Bitters.AROMATIC },
      { ingredient: Liqueurs.GRAND_MARNIER },
      { ingredient: Bases.CHAMPAGNE },
    ],
  },
  {
    name: "Rudolph",
    components: [
      { ingredient: Bases.DRY_GIN },
      { ingredient: Liqueurs.ELDERFLOWER },
      { ingredient: Bases.CHAMPAGNE },
    ],
  },
  {
    name: "Pina Colada",
    components: [
      { ingredient: Bases.WHITE_RUM },
      { ingredient: Bases.DARK_RUM },
      { ingredient: Juices.PINEAPPLE },
      { ingredient: Others.COCONUT_CREAM },
    ],
  },
  {
    name: "Mojito",
    components: [
      { ingredient: Juices.LIME },
      { ingredient: Others.SUGAR },
      { ingredient: Others.MINT },
      { ingredient: Bases.WHITE_RUM },
      { ingredient: Mixers.SODA_WATER },
    ],
  },
  {
    name: "Peach & Black Pepper Margarita",
    components: [
      { ingredient: Others.SEA_SALT_FLAKES },
      { ingredient: Others.CRUSHED_BLACK_PEPPER },
      { ingredient: Juices.LIME },
      { ingredient: Fruits.PEACH },
      { ingredient: Bases.BLACK_PEPPER_TEQUILA },
      { ingredient: Liqueurs.PEACH },
    ],
  },
  {
    name: "Tequila Pomegranate",
    components: [
      { ingredient: Bases.SILVER_TEQUILA },
      { ingredient: Liqueurs.ORANGE },
      { ingredient: Juices.LIME },
      { ingredient: Juices.POMEGRANATE },
    ],
  },
  {
    name: "Banana Daiquiri",
    components: [
      { ingredient: Bases.DARK_RUM },
      { ingredient: Liqueurs.BANANA },
      { ingredient: Juices.LIME },
      { ingredient: Others.SIMPLE_SYRUP },
      { ingredient: Fruits.BANANA },
    ],
  },
  {
    name: "Beach House",
    components: [
      { ingredient: Bases.DRY_GIN },
      { ingredient: Juices.LIME },
      { ingredient: Mixers.COCONUT_WATER },
    ],
  },
  {
    name: "Big Cardomomma's House",
    components: [
      { ingredient: Fruits.MANGO },
      { ingredient: Liqueurs.PEACH },
      { ingredient: Juices.LIME },
      { ingredient: Others.CARDAMOM_SYRUP },
      { ingredient: Bases.CHAMPAGNE },
    ],
  },
  {
    name: "Pineapple Mountain",
    components: [
      { ingredient: Bases.AGED_RUM },
      { ingredient: Juices.PINEAPPLE },
      { ingredient: Juices.LEMON },
      { ingredient: Others.GINGER_SYRUP },
      { ingredient: Bitters.AROMATIC },
    ],
  },
  {
    name: "Frozen Ginger Margarita",
    components: [
      { ingredient: Bases.SILVER_TEQUILA },
      { ingredient: Liqueurs.ORANGE },
      { ingredient: Others.GINGER_SYRUP },
      { ingredient: Juices.LIME },
      { ingredient: Fruits.LIME_ZEST },
      { ingredient: Juices.LEMON },
      { ingredient: Juices.ORANGE },
      { ingredient: Bases.CHAMPAGNE },
    ],
  },
  {
    name: "Watermelon Bloody Mary",
    components: [
      { ingredient: Bases.VODKA },
      { ingredient: Bases.DRY_WHITE_WINE },
      { ingredient: Juices.WATERMELON },
      { ingredient: Juices.LEMON },
      { ingredient: Others.MINT },
      { ingredient: Others.CRUSHED_BLACK_PEPPER },
      { ingredient: Bitters.AROMATIC },
    ],
  },
  {
    name: "Bloody Mary",
    components: [
      { ingredient: Bases.VODKA },
      { ingredient: Bases.DRY_WHITE_WINE },
      { ingredient: Others.TABASCO },
      { ingredient: Others.WORCESTERSHIRE_SAUCE },
      { ingredient: Juices.TOMATO },
      { ingredient: Juices.LEMON },
      { ingredient: Others.CELERY_SALT },
      { ingredient: Others.CAYENNE_PEPPER },
    ],
  },
  {
    name: "Fire in the Blood",
    components: [
      { ingredient: Others.DILL },
      { ingredient: Others.DIJON_MUSTARD },
      { ingredient: Others.TABASCO },
      { ingredient: Others.WORCESTERSHIRE_SAUCE },
      { ingredient: Bases.BLACK_PEPPER_VODKA },
      { ingredient: Juices.TOMATO },
      { ingredient: Juices.LEMON },
      { ingredient: Others.CELERY_SALT },
      { ingredient: Others.CRUSHED_BLACK_PEPPER },
    ],
  },
  {
    name: "Sangrita",
    components: [
      { ingredient: Bases.SILVER_TEQUILA },
      { ingredient: Bases.DRY_SHERRY },
      { ingredient: Others.CREAMED_HORSERADISH },
      { ingredient: Others.WORCESTERSHIRE_SAUCE },
      { ingredient: Juices.CLAMATO },
      { ingredient: Juices.LEMON },
      { ingredient: Others.CELERY_SALT },
      { ingredient: Others.CAYENNE_PEPPER },
    ],
  },
  {
    name: "Wasabian",
    components: [
      { ingredient: Others.WASABI },
      { ingredient: Others.CELERY_SALT },
      { ingredient: Juices.LIME },
      { ingredient: Juices.LEMON },
      { ingredient: Bases.VODKA },
      { ingredient: Bases.SAKE },
      { ingredient: Juices.TOMATO },
      { ingredient: Bitters.AROMATIC },
    ],
  },
];
