import * as stylex from "@stylexjs/stylex";
import { spacing as spacing } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    flex: {
        display: "flex",
    },

    nowrap: { flexWrap: "nowrap" },
    wrap: { flexWrap: "wrap" },
    wrapReverse: { flexWrap: "wrap-reverse" },

    row: { flexDirection: "row" },
    rowReverse: { flexDirection: "row-reverse" },
    column: { flexDirection: "column" },
    columnReverse: { flexDirection: "column-reverse" },

    alignStart: { alignItems: "flex-start" },
    alignCenter: { alignItems: "center" },
    alignEnd: { alignItems: "flex-end" },
    alignStretch: { alignItems: "stretch" },
    alignBaseline: { alignItems: "baseline" },

    justifyStart: { justifyContent: "flex-start" },
    justifyCenter: { justifyContent: "center" },
    justifyEnd: { justifyContent: "flex-end" },
    justifyBetween: { justifyContent: "space-between" },
    justifyAround: { justifyContent: "space-around" },
    justifyEvenly: { justifyContent: "space-evenly" },

    gap1: { gap: spacing.xxxs },
    gap2: { gap: spacing.xxs },
    gap3: { gap: spacing.xs },
    gap4: { gap: spacing.sm },
    gap5: { gap: spacing.md },
    gap6: { gap: spacing.lg },
    gap7: { gap: spacing.xl },
    gap8: { gap: spacing.xxl },
    gap9: { gap: spacing.xxxl },
    gap10: { gap: spacing.xxxxl },
});
