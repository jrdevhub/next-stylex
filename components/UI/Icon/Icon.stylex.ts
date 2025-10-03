import * as stylex from "@stylexjs/stylex";
import { colors } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    icon: {
        alignItems: "center",
        borderRadius: "50%",
        display: "flex",
        height: 36,
        justifyContent: "center",
        minWidth: 36,
    },
    iconInner: {
        alignItems: "center",
        display: "flex",
        height: 20,
        justifyContent: "center",
        width: 20,
    },
    iconLarge: {
        height: 40,
        minWidth: 40,
    },
    colorSecondary: {
        color: `rgba(${colors.textSecondaryR}, ${colors.textSecondaryG}, ${colors.textSecondaryB}, 1)`,
    },
    bgSecondary: {
        backgroundColor: `rgba(${colors.bgTertiaryR}, ${colors.bgTertiaryG}, ${colors.bgTertiaryB}, 1)`,
    },
    bgSecondaryHover: {
        backgroundColor: {
            default: `rgba(${colors.bgTertiaryR}, ${colors.bgTertiaryG}, ${colors.bgTertiaryB}, 1)`,
            ":hover": `rgba(${colors.bgTertiaryHoverR}, ${colors.bgTertiaryHoverG}, ${colors.bgTertiaryHoverB}, 1)`,
        },
    },
    bgTransparentHover: {
        backgroundColor: {
            default: "transparent",
            ":hover": `rgba(${colors.bgTertiaryHoverR}, ${colors.bgTertiaryHoverG}, ${colors.bgTertiaryHoverB}, 1)`,
        },
    },
});
