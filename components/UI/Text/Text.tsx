import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Text.stylex";

type TextProps = {
    children: React.ReactNode;
    as?: "p" | "small" | "label" | "span" | "div";
    size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    color?: "primary" | "secondary" | "error" | "success" | "warning";
    styles?: stylex.StyleXStyles[];
};

const Text = ({
    children,
    as = "p",
    size = 6,
    weight = 400,
    color,
    styles = [],
}: TextProps) => {
    const Component = as;

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

    return (
        <Component
            {...stylex.props(
                baseStyles.text,
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

export default Text;
