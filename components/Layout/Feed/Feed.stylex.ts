import * as stylex from "@stylexjs/stylex";
import { spacing } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    feed: {
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 500,
        paddingLeft: spacing.xs,
        paddingRight: spacing.xs,
    },
});
