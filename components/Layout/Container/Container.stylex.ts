import * as stylex from "@stylexjs/stylex";

export const baseStyles = stylex.create({
    container: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
    },
});
