// themes.ts
import * as stylex from "@stylexjs/stylex";
import { colors } from "./globalTokens.stylex";

export const light = stylex.createTheme(colors, {
    foregroundR: "8",
    foregroundG: "8",
    foregroundB: "9",

    textSecondaryR: "101",
    textSecondaryG: "104",
    textSecondaryB: "108",

    textInheritR: "226",
    textInheritG: "229",
    textInheritB: "233",

    bgStartR: "214",
    bgStartG: "219",
    bgStartB: "220",

    bgEndR: "255",
    bgEndG: "255",
    bgEndB: "255",

    bgSecondaryR: "255",
    bgSecondaryG: "255",
    bgSecondaryB: "255",

    bgTertiaryR: "226",
    bgTertiaryG: "229",
    bgTertiaryB: "233",

    bgTertiaryHoverR: "213",
    bgTertiaryHoverG: "216",
    bgTertiaryHoverB: "220",

    bgInheritR: "0",
    bgInheritG: "0",
    bgInheritB: "0",

    borderR: "187",
    borderG: "189",
    borderB: "193",

    shadowR: "0",
    shadowG: "0",
    shadowB: "0",

    overlayR: "0",
    overlayG: "0",
    overlayB: "0",

    primaryR: "8",
    primaryG: "102",
    primaryB: "255",

    successR: "49",
    successG: "162",
    successB: "76",

    warningR: "242",
    warningG: "169",
    warningB: "24",

    errorR: "239",
    errorG: "68",
    errorB: "68",
});

export const dark = stylex.createTheme(colors, {
    foregroundR: "226",
    foregroundG: "229",
    foregroundB: "233",

    textSecondaryR: "176",
    textSecondaryG: "179",
    textSecondaryB: "184",

    textInheritR: "8",
    textInheritG: "8",
    textInheritB: "9",

    bgStartR: "28",
    bgStartG: "28",
    bgStartB: "29",

    bgEndR: "0",
    bgEndG: "0",
    bgEndB: "0",

    bgSecondaryR: "37",
    bgSecondaryG: "39",
    bgSecondaryB: "40",

    bgTertiaryR: "59",
    bgTertiaryG: "61",
    bgTertiaryB: "62",

    bgTertiaryHoverR: "78",
    bgTertiaryHoverG: "80",
    bgTertiaryHoverB: "80",

    bgInheritR: "255",
    bgInheritG: "255",
    bgInheritB: "255",

    borderR: "101",
    borderG: "104",
    borderB: "108",

    shadowR: "0",
    shadowG: "0",
    shadowB: "0",

    overlayR: "0",
    overlayG: "0",
    overlayB: "0",

    primaryR: "8",
    primaryG: "102",
    primaryB: "255",

    successR: "49",
    successG: "162",
    successB: "76",

    warningR: "242",
    warningG: "169",
    warningB: "24",

    errorR: "239",
    errorG: "68",
    errorB: "68",
});
