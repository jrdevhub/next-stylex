import * as stylex from "@stylexjs/stylex";
import { colors, text } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    heading: {},

    fs1: { fontSize: text.h1 },
    fs2: { fontSize: text.h2 },
    fs3: { fontSize: text.h3 },
    fs4: { fontSize: text.h4 },
    fs5: { fontSize: text.h5 },
    fs6: { fontSize: text.p },
    fs7: { fontSize: text.sm },
    fs8: { fontSize: text.xs },
    fs9: { fontSize: text.xxs },

    fw100: { fontWeight: 100 },
    fw200: { fontWeight: 200 },
    fw300: { fontWeight: 300 },
    fw400: { fontWeight: 400 },
    fw500: { fontWeight: 500 },
    fw600: { fontWeight: 600 },
    fw700: { fontWeight: 700 },
    fw800: { fontWeight: 800 },
    fw900: { fontWeight: 900 },

    primary: {
        color: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
    },
    secondary: {
        color: `rgba(${colors.textSecondaryR}, ${colors.textSecondaryG}, ${colors.textSecondaryB}, 1)`,
    },
    error: {
        color: `rgba(${colors.errorR}, ${colors.errorG}, ${colors.errorB}, 1)`,
    },
    success: {
        color: `rgba(${colors.successR}, ${colors.successG}, ${colors.successB}, 1)`,
    },
    warning: {
        color: `rgba(${colors.warningR}, ${colors.warningG}, ${colors.warningB}, 1)`,
    },
});
