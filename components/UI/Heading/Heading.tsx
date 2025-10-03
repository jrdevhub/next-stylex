import { ElementType, ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Heading.stylex";

type HeadingProps = {
    children: ReactNode;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "span";
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    color?: "primary" | "secondary" | "error" | "success" | "warning";
    styles?: stylex.StyleXStyles[];
};

const Heading = ({
    children,
    as = "h1",
    level,
    size = 1,
    weight = 700,
    color,
    styles = [],
}: HeadingProps) => {
    const Component: ElementType = as;

    const sizeStyles = {
        1: baseStyles.fs1,
        2: baseStyles.fs2,
        3: baseStyles.fs3,
        4: baseStyles.fs4,
        5: baseStyles.fs5,
        6: baseStyles.fs6,
        7: baseStyles.fs7,
        8: baseStyles.fs8,
        9: baseStyles.fs9,
    };

    const weightStyles = {
        100: baseStyles.fw100,
        200: baseStyles.fw200,
        300: baseStyles.fw300,
        400: baseStyles.fw400,
        500: baseStyles.fw500,
        600: baseStyles.fw600,
        700: baseStyles.fw700,
        800: baseStyles.fw800,
        900: baseStyles.fw900,
    };

    const colorStyles = {
        primary: baseStyles.primary,
        secondary: baseStyles.secondary,
        error: baseStyles.error,
        success: baseStyles.success,
        warning: baseStyles.warning,
    };

    const needsAriaLevel = as === "div" || as === "span";

    return (
        <Component
            {...(needsAriaLevel
                ? { role: "heading", "aria-level": level ?? 1 }
                : {})}
            {...stylex.props(
                baseStyles.heading,
                sizeStyles[size],
                weightStyles[weight],
                color && colorStyles[color],
                ...styles,
            )}
        >
            {children}
        </Component>
    );
};

export default Heading;
