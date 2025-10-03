import * as stylex from "@stylexjs/stylex";
import { colors, fonts, text } from "./globalTokens.stylex";

export const styles = stylex.create({
    html: {
        colorScheme: "light dark",
    },
    htmlLight: {
        colorScheme: "light",
    },
    htmlDark: {
        colorScheme: "dark",
    },
    body: {
        backgroundImage: `linear-gradient(to bottom, rgb(${colors.bgStartR}, ${colors.bgStartG}, ${colors.bgStartB}), rgb(${colors.bgEndR}, ${colors.bgEndG}, ${colors.bgEndB}))`,
        color: `rgba(${colors.foregroundR}, ${colors.foregroundG}, ${colors.foregroundB}, 1)`,
        fontFamily: fonts.sans,
        fontSize: text.sm,
        fontWeight: 400,
        lineHeight: 1.34,
    },
});
