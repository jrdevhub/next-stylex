import * as stylex from "@stylexjs/stylex";
import { animations, colors, duration } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    bar: {
        backgroundColor: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, .1)`,
        height: 2,
    },

    barProgress: {
        animationDuration: duration.fast,
        animationName: animations.loading,
        animationTimingFunction: "ease-in-out",
        backgroundColor: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
        height: 2,
    },

    circle: {
        alignItems: "center",
        display: "flex",
        height: 24,
        justifyContent: "center",
        width: 24,
    },

    circleProgress: {
        animationDuration: duration.medium,
        animationIterationCount: "infinite",
        animationName: animations.rotate,
        animationTimingFunction: "linear",
        borderColor: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
        borderRadius: "50%",
        borderStyle: "solid",
        borderTopColor: "transparent",
        borderWidth: "2px",
        height: 22,
        width: 22,
    },
});
