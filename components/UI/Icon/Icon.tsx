import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Icon.stylex";

type IconProps = {
    children: React.ReactNode;
    size?: "large";
    color?: "secondary";
    bg?: "transparentHover" | "secondary" | "secondaryHover";
};

const Icon = ({ children, size, color, bg }: IconProps) => {
    const sizeStyles = {
        large: baseStyles.iconLarge,
    };

    const colorStyles = {
        secondary: baseStyles.colorSecondary,
    };

    const bgStyles = {
        transparentHover: baseStyles.bgTransparentHover,
        secondary: baseStyles.bgSecondary,
        secondaryHover: baseStyles.bgSecondaryHover,
    };

    return (
        <span
            {...stylex.props(
                baseStyles.icon,
                bg ? bgStyles[bg] : undefined,
                size ? sizeStyles[size] : undefined,
            )}
        >
            <span
                {...stylex.props(
                    baseStyles.iconInner,
                    color ? colorStyles[color] : undefined,
                )}
            >
                {children}
            </span>
        </span>
    );
};

export default Icon;
