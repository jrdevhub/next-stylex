import * as stylex from "@stylexjs/stylex";

export const baseStyles = stylex.create({
    link: {
        color: "inherit",
        cursor: "pointer",
        position: "relative",
        textDecoration: {
            default: "none",
            ":hover": "underline",
        },
    },
});
