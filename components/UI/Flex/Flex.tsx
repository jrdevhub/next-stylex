import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Flex.stylex";

type FlexProps = {
    children: React.ReactNode;
    as?: "div" | "span" | "label";
    direction?: "row" | "column" | "rowReverse" | "columnReverse";
    align?: "stretch" | "start" | "center" | "end" | "baseline";
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
    wrap?: "nowrap" | "wrap" | "wrapReverse";
    gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    styles?: stylex.StyleXStyles[];
};

const Flex = ({
    children,
    as = "div",
    direction = "row",
    align = "stretch",
    justify = "start",
    wrap = "nowrap",
    gap,
    styles = [],
}: FlexProps) => {
    const Component = as;

    const gapStyles = {
        1: baseStyles.gap1,
        2: baseStyles.gap2,
        3: baseStyles.gap3,
        4: baseStyles.gap4,
        5: baseStyles.gap5,
        6: baseStyles.gap6,
        7: baseStyles.gap7,
        8: baseStyles.gap8,
        9: baseStyles.gap9,
        10: baseStyles.gap10,
    };

    const wrapStyles = {
        nowrap: baseStyles.nowrap,
        wrap: baseStyles.wrap,
        wrapReverse: baseStyles.wrapReverse,
    };

    const directionStyles = {
        row: baseStyles.row,
        rowReverse: baseStyles.rowReverse,
        column: baseStyles.column,
        columnReverse: baseStyles.columnReverse,
    };

    const alignStyles = {
        stretch: baseStyles.alignStretch,
        start: baseStyles.alignStart,
        center: baseStyles.alignCenter,
        end: baseStyles.alignEnd,
        baseline: baseStyles.alignBaseline,
    };

    const justifyStyles = {
        start: baseStyles.justifyStart,
        center: baseStyles.justifyCenter,
        end: baseStyles.justifyEnd,
        between: baseStyles.justifyBetween,
        around: baseStyles.justifyAround,
        evenly: baseStyles.justifyEvenly,
    };

    return (
        <Component
            {...stylex.props(
                baseStyles.flex,
                directionStyles[direction],
                wrapStyles[wrap],
                justifyStyles[justify],
                alignStyles[align],
                gap ? gapStyles[gap] : null,
                ...styles,
            )}
        >
            {children}
        </Component>
    );
};

export default Flex;
