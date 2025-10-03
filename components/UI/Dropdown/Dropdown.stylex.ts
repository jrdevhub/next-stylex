import * as stylex from "@stylexjs/stylex";
import { colors, radius, spacing } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    dropdown: {
        position: "relative",
    },
    modal: {
        backgroundColor: `rgba(${colors.bgSecondaryR}, ${colors.bgSecondaryG}, ${colors.bgSecondaryB}, 1)`,
        borderRadius: radius.md,
        boxShadow: `0 1px 2px rgba(${colors.shadowR}, ${colors.shadowG}, ${colors.shadowB}, .2)`,
        left: 0,
        marginTop: spacing.xs,
        minWidth: 360,
        padding: `${spacing.xs} ${spacing.xxs}`,
        position: "absolute",
        zIndex: 2,
    },
});
