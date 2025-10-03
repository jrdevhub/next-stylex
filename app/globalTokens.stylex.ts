import * as stylex from "@stylexjs/stylex";

/**
 * Reference: https://utopia.fyi/type/calculator
 *
 * The following constants are used to calculate fluid typography.
 * Feel free to change these initial numbers to suit your needs.
 *
 * StyleX can compute all of this at compile time as all the information
 * is statically available in the same file and the only functions used are
 * the Math.pow and Math.round functions.
 *
 * NOTE: Any custom functions will not be able to be computed at compile time.
 */
const MIN_WIDTH = 320;
const MAX_WIDTH = 1240;
const MIN_SCALE = 1.2;
const MAX_SCALE = 1.333;
const MIN_BASE_SIZE = 16;
const MAX_BASE_SIZE = 20;

// Font sizes in `rem` units
const MIN_FONT = {
    xxs: Math.round(MIN_BASE_SIZE / Math.pow(MIN_SCALE, 3) / 0.16) / 100,
    xs: Math.round(MIN_BASE_SIZE / Math.pow(MIN_SCALE, 2) / 0.16) / 100,
    sm: Math.round(MIN_BASE_SIZE / MIN_SCALE / 0.16) / 100,
    p: Math.round(MIN_BASE_SIZE / 4) / 4,
    h5: Math.round((MIN_BASE_SIZE * MIN_SCALE) / 0.16) / 100,
    h4: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 2)) / 0.16) / 100,
    h3: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 3)) / 0.16) / 100,
    h2: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 4)) / 0.16) / 100,
    h1: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 5)) / 0.16) / 100,
};

// Font sizes in `rem` units
const MAX_FONT = {
    xxs: Math.round(MAX_BASE_SIZE / Math.pow(MAX_SCALE, 3) / 0.16) / 100,
    xs: Math.round(MAX_BASE_SIZE / Math.pow(MAX_SCALE, 2) / 0.16) / 100,
    sm: Math.round(MAX_BASE_SIZE / MAX_SCALE / 0.16) / 100,
    p: Math.round(MAX_BASE_SIZE / 4) / 4,
    h5: Math.round((MAX_BASE_SIZE * MAX_SCALE) / 0.16) / 100,
    h4: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 2)) / 0.16) / 100,
    h3: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 3)) / 0.16) / 100,
    h2: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 4)) / 0.16) / 100,
    h1: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 5)) / 0.16) / 100,
};

const SLOPE = {
    xxs: (16 * (MAX_FONT.xxs - MIN_FONT.xxs)) / (MAX_WIDTH - MIN_WIDTH),
    xs: (16 * (MAX_FONT.xs - MIN_FONT.xs)) / (MAX_WIDTH - MIN_WIDTH),
    sm: (16 * (MAX_FONT.sm - MIN_FONT.sm)) / (MAX_WIDTH - MIN_WIDTH),
    p: (16 * (MAX_FONT.p - MIN_FONT.p)) / (MAX_WIDTH - MIN_WIDTH),
    h5: (16 * (MAX_FONT.h5 - MIN_FONT.h5)) / (MAX_WIDTH - MIN_WIDTH),
    h4: (16 * (MAX_FONT.h4 - MIN_FONT.h4)) / (MAX_WIDTH - MIN_WIDTH),
    h3: (16 * (MAX_FONT.h3 - MIN_FONT.h3)) / (MAX_WIDTH - MIN_WIDTH),
    h2: (16 * (MAX_FONT.h2 - MIN_FONT.h2)) / (MAX_WIDTH - MIN_WIDTH),
    h1: (16 * (MAX_FONT.h1 - MIN_FONT.h1)) / (MAX_WIDTH - MIN_WIDTH),
};

const INTERCEPT = {
    xxs: Math.round(100 * (MIN_FONT.xxs - SLOPE.xxs * (MIN_WIDTH / 16))) / 100,
    xs: Math.round(100 * (MIN_FONT.xs - SLOPE.xs * (MIN_WIDTH / 16))) / 100,
    sm: Math.round(100 * (MIN_FONT.sm - SLOPE.sm * (MIN_WIDTH / 16))) / 100,
    p: Math.round(100 * (MIN_FONT.p - SLOPE.p * (MIN_WIDTH / 16))) / 100,
    h5: Math.round(100 * (MIN_FONT.h5 - SLOPE.h5 * (MIN_WIDTH / 16))) / 100,
    h4: Math.round(100 * (MIN_FONT.h4 - SLOPE.h4 * (MIN_WIDTH / 16))) / 100,
    h3: Math.round(100 * (MIN_FONT.h3 - SLOPE.h3 * (MIN_WIDTH / 16))) / 100,
    h2: Math.round(100 * (MIN_FONT.h2 - SLOPE.h2 * (MIN_WIDTH / 16))) / 100,
    h1: Math.round(100 * (MIN_FONT.h1 - SLOPE.h1 * (MIN_WIDTH / 16))) / 100,
};

// prettier-ignore
export const text = stylex.defineVars({
    xxs: `clamp(${ Math.min(MIN_FONT.xxs) }rem, calc(${ INTERCEPT.xxs }rem + ${ Math.round(10000 * SLOPE.xxs) / 100 }vw), ${ Math.max(MAX_FONT.xxs) }rem)`,
    xs:  `clamp(${ Math.min(MIN_FONT.xs ) }rem, calc(${ INTERCEPT.xs  }rem + ${ Math.round(10000 * SLOPE.xs ) / 100 }vw), ${ Math.max(MAX_FONT.xs ) }rem)`,
    sm:  `clamp(${ Math.min(MIN_FONT.sm ) }rem, calc(${ INTERCEPT.sm  }rem + ${ Math.round(10000 * SLOPE.sm ) / 100 }vw), ${ Math.max(MAX_FONT.sm ) }rem)`,
    p:   `clamp(${ Math.min(MIN_FONT.p  ) }rem, calc(${ INTERCEPT.p   }rem + ${ Math.round(10000 * SLOPE.p  ) / 100 }vw), ${ Math.max(MAX_FONT.p  ) }rem)`,
    h5:  `clamp(${ Math.min(MIN_FONT.h5 ) }rem, calc(${ INTERCEPT.h5  }rem + ${ Math.round(10000 * SLOPE.h5 ) / 100 }vw), ${ Math.max(MAX_FONT.h5 ) }rem)`,
    h4:  `clamp(${ Math.min(MIN_FONT.h4 ) }rem, calc(${ INTERCEPT.h4  }rem + ${ Math.round(10000 * SLOPE.h4 ) / 100 }vw), ${ Math.max(MAX_FONT.h4 ) }rem)`,
    h3:  `clamp(${ Math.min(MIN_FONT.h3 ) }rem, calc(${ INTERCEPT.h3  }rem + ${ Math.round(10000 * SLOPE.h3 ) / 100 }vw), ${ Math.max(MAX_FONT.h3 ) }rem)`,
    h2:  `clamp(${ Math.min(MIN_FONT.h2 ) }rem, calc(${ INTERCEPT.h2  }rem + ${ Math.round(10000 * SLOPE.h2 ) / 100 }vw), ${ Math.max(MAX_FONT.h2 ) }rem)`,
    h1:  `clamp(${ Math.min(MIN_FONT.h1 ) }rem, calc(${ INTERCEPT.h1  }rem + ${ Math.round(10000 * SLOPE.h1 ) / 100 }vw), ${ Math.max(MAX_FONT.h1 ) }rem)`,
});

/**
 * Reference: https://utopia.fyi/space/calculator
 *
 * Similar to the fluid typography, we can create fluid values for spacing.
 * Using similar formulas and similar scales.
 *
 * NOTE: It is common to have more varied needs for spacing than for font-size.
 * So feel free to add some more values by following the pattern below.
 *
 * EXCEPT: We are using `px` instead of `rem`
 * ------------------------------------------
 * When talking about font-size, it is the best practice to use
 * `rem` so that an end user can change the font-size using the
 * browser's font-size setting.
 *
 * However, when talking about spacing, it is the best practice to
 * use `px` because using `rems` here makes font-size behave like zoom.
 *
 * Users that prefer larger text, don't necessarily want larger spacing as well.
 */
const MULT = {
    xxxs: 0.25,
    xxs: 0.5,
    xs: 0.75,
    sm: 1,
    md: 1.5,
    lg: 2,
    xl: 3,
    xxl: 4,
    xxxl: 6,
    xxxxl: 8,
};

const MIN_SPACE = {
    xxxs: MULT.xxxs * MIN_BASE_SIZE,
    xxs: MULT.xxs * MIN_BASE_SIZE,
    xs: MULT.xs * MIN_BASE_SIZE,
    sm: MULT.sm * MIN_BASE_SIZE,
    md: MULT.md * MIN_BASE_SIZE,
    lg: MULT.lg * MIN_BASE_SIZE,
    xl: MULT.xl * MIN_BASE_SIZE,
    xxl: MULT.xxl * MIN_BASE_SIZE,
    xxxl: MULT.xxxl * MIN_BASE_SIZE,
    xxxxl: MULT.xxxxl * MIN_BASE_SIZE,
};

const MAX_SPACE = {
    xxxs: MULT.xxxs * MAX_BASE_SIZE,
    xxs: MULT.xxs * MAX_BASE_SIZE,
    xs: MULT.xs * MAX_BASE_SIZE,
    sm: MULT.sm * MAX_BASE_SIZE,
    md: MULT.md * MAX_BASE_SIZE,
    lg: MULT.lg * MAX_BASE_SIZE,
    xl: MULT.xl * MAX_BASE_SIZE,
    xxl: MULT.xxl * MAX_BASE_SIZE,
    xxxl: MULT.xxxl * MAX_BASE_SIZE,
    xxxxl: MULT.xxxxl * MAX_BASE_SIZE,
};

const SLOPE_SPACE = {
    xxxs: (MAX_SPACE.xxxs - MIN_SPACE.xxxs) / (MAX_WIDTH - MIN_WIDTH),
    xxs: (MAX_SPACE.xxs - MIN_SPACE.xxs) / (MAX_WIDTH - MIN_WIDTH),
    xs: (MAX_SPACE.xs - MIN_SPACE.xs) / (MAX_WIDTH - MIN_WIDTH),
    sm: (MAX_SPACE.sm - MIN_SPACE.sm) / (MAX_WIDTH - MIN_WIDTH),
    md: (MAX_SPACE.md - MIN_SPACE.md) / (MAX_WIDTH - MIN_WIDTH),
    lg: (MAX_SPACE.lg - MIN_SPACE.lg) / (MAX_WIDTH - MIN_WIDTH),
    xl: (MAX_SPACE.xl - MIN_SPACE.xl) / (MAX_WIDTH - MIN_WIDTH),
    xxl: (MAX_SPACE.xxl - MIN_SPACE.xxl) / (MAX_WIDTH - MIN_WIDTH),
    xxxl: (MAX_SPACE.xxxl - MIN_SPACE.xxxl) / (MAX_WIDTH - MIN_WIDTH),
    xxxxl: (MAX_SPACE.xxxxl - MIN_SPACE.xxxxl) / (MAX_WIDTH - MIN_WIDTH),
};

// rounded to the nearest 0.25px
const INTERCEPT_SPACE = {
    xxxs: Math.round(4 * (MIN_SPACE.xxxs - SLOPE_SPACE.xxxs * MIN_WIDTH)) / 4,
    xxs: Math.round(4 * (MIN_SPACE.xxs - SLOPE_SPACE.xxs * MIN_WIDTH)) / 4,
    xs: Math.round(4 * (MIN_SPACE.xs - SLOPE_SPACE.xs * MIN_WIDTH)) / 4,
    sm: Math.round(4 * (MIN_SPACE.sm - SLOPE_SPACE.sm * MIN_WIDTH)) / 4,
    md: Math.round(4 * (MIN_SPACE.md - SLOPE_SPACE.md * MIN_WIDTH)) / 4,
    lg: Math.round(4 * (MIN_SPACE.lg - SLOPE_SPACE.lg * MIN_WIDTH)) / 4,
    xl: Math.round(4 * (MIN_SPACE.xl - SLOPE_SPACE.xl * MIN_WIDTH)) / 4,
    xxl: Math.round(4 * (MIN_SPACE.xxl - SLOPE_SPACE.xxl * MIN_WIDTH)) / 4,
    xxxl: Math.round(4 * (MIN_SPACE.xxxl - SLOPE_SPACE.xxxl * MIN_WIDTH)) / 4,
    xxxxl:
        Math.round(4 * (MIN_SPACE.xxxxl - SLOPE_SPACE.xxxxl * MIN_WIDTH)) / 4,
};

// prettier-ignore
export const spacing = stylex.defineVars({
    xxxs:  `clamp(${MIN_SPACE.xxxs  }px, calc(${INTERCEPT_SPACE.xxxs  }px + ${ Math.round(10000 * SLOPE_SPACE.xxxs  ) / 100 }vw), ${MAX_SPACE.xxxs  }px)`,
    xxs:   `clamp(${MIN_SPACE.xxs   }px, calc(${INTERCEPT_SPACE.xxs   }px + ${ Math.round(10000 * SLOPE_SPACE.xxs   ) / 100 }vw), ${MAX_SPACE.xxs   }px)`,
    xs:    `clamp(${MIN_SPACE.xs    }px, calc(${INTERCEPT_SPACE.xs    }px + ${ Math.round(10000 * SLOPE_SPACE.xs    ) / 100 }vw), ${MAX_SPACE.xs    }px)`,
    sm:    `clamp(${MIN_SPACE.sm    }px, calc(${INTERCEPT_SPACE.sm    }px + ${ Math.round(10000 * SLOPE_SPACE.sm    ) / 100 }vw), ${MAX_SPACE.sm    }px)`,
    md:    `clamp(${MIN_SPACE.md    }px, calc(${INTERCEPT_SPACE.md    }px + ${ Math.round(10000 * SLOPE_SPACE.md    ) / 100 }vw), ${MAX_SPACE.md    }px)`,
    lg:    `clamp(${MIN_SPACE.lg    }px, calc(${INTERCEPT_SPACE.lg    }px + ${ Math.round(10000 * SLOPE_SPACE.lg    ) / 100 }vw), ${MAX_SPACE.lg    }px)`,
    xl:    `clamp(${MIN_SPACE.xl    }px, calc(${INTERCEPT_SPACE.xl    }px + ${ Math.round(10000 * SLOPE_SPACE.xl    ) / 100 }vw), ${MAX_SPACE.xl    }px)`,
    xxl:   `clamp(${MIN_SPACE.xxl   }px, calc(${INTERCEPT_SPACE.xxl   }px + ${ Math.round(10000 * SLOPE_SPACE.xxl   ) / 100 }vw), ${MAX_SPACE.xxl   }px)`,
    xxxl:  `clamp(${MIN_SPACE.xxxl  }px, calc(${INTERCEPT_SPACE.xxxl  }px + ${ Math.round(10000 * SLOPE_SPACE.xxxl  ) / 100 }vw), ${MAX_SPACE.xxxl  }px)`,
    xxxxl: `clamp(${MIN_SPACE.xxxxl }px, calc(${INTERCEPT_SPACE.xxxxl }px + ${ Math.round(10000 * SLOPE_SPACE.xxxxl ) / 100 }vw), ${MAX_SPACE.xxxxl }px)`,
});

/**
 * Reference: https://utopia.fyi/clamp/calculator
 *
 * This code implements fluid radius values for UI elements,
 * similar to fluid typography but applied to border-radius,
 * providing smooth scaling between a minimum and maximum radius
 * based on viewport width.
 *
 * It uses a linear interpolation between MIN_RADIUS and MAX_RADIUS
 * for different size scales, clamped between
 * fixed minimum and maximum pixel values using CSS clamp().
 *
 * Unlike font-size where rem units are recommended for accessibility,
 * here px units are preferred to keep radius consistent regardless
 * of user font scaling preferences.
 *
 * Feel free to extend the scales or adjust base values to fit your design needs.
 */
const MULT_RADIUS = {
    xs: 0.25,
    sm: 0.5,
    md: 0.75,
    lg: 1,
};

const MIN_RADIUS = {
    xs: MULT_RADIUS.xs * MIN_BASE_SIZE,
    sm: MULT_RADIUS.sm * MIN_BASE_SIZE,
    md: MULT_RADIUS.md * MIN_BASE_SIZE,
    lg: MULT_RADIUS.lg * MIN_BASE_SIZE,
};

const MAX_RADIUS = {
    xs: MULT_RADIUS.xs * MAX_BASE_SIZE,
    sm: MULT_RADIUS.sm * MAX_BASE_SIZE,
    md: MULT_RADIUS.md * MAX_BASE_SIZE,
    lg: MULT_RADIUS.lg * MAX_BASE_SIZE,
};

const SLOPE_RADIUS = {
    xs: (MAX_RADIUS.xs - MIN_RADIUS.xs) / (MAX_WIDTH - MIN_WIDTH),
    sm: (MAX_RADIUS.sm - MIN_RADIUS.sm) / (MAX_WIDTH - MIN_WIDTH),
    md: (MAX_RADIUS.md - MIN_RADIUS.md) / (MAX_WIDTH - MIN_WIDTH),
    lg: (MAX_RADIUS.lg - MIN_RADIUS.lg) / (MAX_WIDTH - MIN_WIDTH),
};

const INTERCEPT_RADIUS = {
    xs: Math.round(4 * (MIN_RADIUS.xs - SLOPE_RADIUS.xs * MIN_WIDTH)) / 4,
    sm: Math.round(4 * (MIN_RADIUS.sm - SLOPE_RADIUS.sm * MIN_WIDTH)) / 4,
    md: Math.round(4 * (MIN_RADIUS.md - SLOPE_RADIUS.md * MIN_WIDTH)) / 4,
    lg: Math.round(4 * (MIN_RADIUS.lg - SLOPE_RADIUS.lg * MIN_WIDTH)) / 4,
};

// prettier-ignore
export const radius = stylex.defineVars({
    xs: `clamp(${MIN_RADIUS.xs}px, calc(${INTERCEPT_RADIUS.xs}px + ${Math.round(10000 * SLOPE_RADIUS.xs) / 100}vw), ${MAX_RADIUS.xs}px)`,
    sm: `clamp(${MIN_RADIUS.sm}px, calc(${INTERCEPT_RADIUS.sm}px + ${Math.round(10000 * SLOPE_RADIUS.sm) / 100}vw), ${MAX_RADIUS.sm}px)`,
    md: `clamp(${MIN_RADIUS.md}px, calc(${INTERCEPT_RADIUS.md}px + ${Math.round(10000 * SLOPE_RADIUS.md) / 100}vw), ${MAX_RADIUS.md}px)`,
    lg: `clamp(${MIN_RADIUS.lg}px, calc(${INTERCEPT_RADIUS.lg}px + ${Math.round(10000 * SLOPE_RADIUS.lg) / 100}vw), ${MAX_RADIUS.lg}px)`,
});

/**
 * Global Tokens
 */
export const global = stylex.defineVars({
    headerHeight: "56px",
});

const DARK_MODE = "@media (prefers-color-scheme: dark)";

export const colors = stylex.defineVars({
    foregroundR: { default: "8", [DARK_MODE]: "226" },
    foregroundG: { default: "8", [DARK_MODE]: "229" },
    foregroundB: { default: "9", [DARK_MODE]: "233" },

    textSecondaryR: { default: "101", [DARK_MODE]: "176" },
    textSecondaryG: { default: "104", [DARK_MODE]: "179" },
    textSecondaryB: { default: "108", [DARK_MODE]: "184" },

    textInheritR: { default: "226", [DARK_MODE]: "8" },
    textInheritG: { default: "229", [DARK_MODE]: "8" },
    textInheritB: { default: "233", [DARK_MODE]: "9" },

    bgStartR: { default: "242", [DARK_MODE]: "28" },
    bgStartG: { default: "244", [DARK_MODE]: "28" },
    bgStartB: { default: "247", [DARK_MODE]: "29" },

    bgEndR: { default: "255", [DARK_MODE]: "0" },
    bgEndG: { default: "255", [DARK_MODE]: "0" },
    bgEndB: { default: "255", [DARK_MODE]: "0" },

    bgSecondaryR: { default: "255", [DARK_MODE]: "37" },
    bgSecondaryG: { default: "255", [DARK_MODE]: "39" },
    bgSecondaryB: { default: "255", [DARK_MODE]: "40" },

    bgTertiaryR: { default: "226", [DARK_MODE]: "59" },
    bgTertiaryG: { default: "229", [DARK_MODE]: "61" },
    bgTertiaryB: { default: "233", [DARK_MODE]: "62" },

    bgTertiaryHoverR: { default: "213", [DARK_MODE]: "78" },
    bgTertiaryHoverG: { default: "216", [DARK_MODE]: "80" },
    bgTertiaryHoverB: { default: "220", [DARK_MODE]: "80" },

    bgInheritR: { default: "37", [DARK_MODE]: "255" },
    bgInheritG: { default: "39", [DARK_MODE]: "255" },
    bgInheritB: { default: "40", [DARK_MODE]: "255" },

    borderR: { default: "187", [DARK_MODE]: "101" },
    borderG: { default: "189", [DARK_MODE]: "104" },
    borderB: { default: "193", [DARK_MODE]: "108" },

    shadowR: { default: "0", [DARK_MODE]: "0" },
    shadowG: { default: "0", [DARK_MODE]: "0" },
    shadowB: { default: "0", [DARK_MODE]: "0" },

    overlayR: { default: "0", [DARK_MODE]: "0" },
    overlayG: { default: "0", [DARK_MODE]: "0" },
    overlayB: { default: "0", [DARK_MODE]: "0" },

    primaryR: { default: "8", [DARK_MODE]: "8" },
    primaryG: { default: "102", [DARK_MODE]: "102" },
    primaryB: { default: "255", [DARK_MODE]: "255" },

    successR: { default: "49", [DARK_MODE]: "49" },
    successG: { default: "162", [DARK_MODE]: "162" },
    successB: { default: "76", [DARK_MODE]: "76" },

    warningR: { default: "242", [DARK_MODE]: "242" },
    warningG: { default: "169", [DARK_MODE]: "169" },
    warningB: { default: "24", [DARK_MODE]: "24" },

    errorR: { default: "239", [DARK_MODE]: "239" },
    errorG: { default: "68", [DARK_MODE]: "68" },
    errorB: { default: "68", [DARK_MODE]: "68" },
});

export const fonts = stylex.defineVars({
    mono: [
        "ui-monospace",
        "Menlo",
        "Monaco",
        '"Cascadia Mono"',
        '"Segoe UI Mono"',
        '"Roboto Mono"',
        '"Oxygen Mono"',
        '"Ubuntu Monospace"',
        '"Source Code Pro"',
        '"Fira Mono"',
        '"Droid Sans Mono"',
        '"Courier New"',
        "monospace",
    ].join(", "),
    sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
    ].join(", "),
});

export const transitions = stylex.defineVars({
    fast: "all 0.2s ease-in-out",
    medium: "all 0.4s ease-in-out",
    slow: "all 0.6s ease-in-out",
});

export const duration = stylex.defineVars({
    fast: "1s",
    medium: "1.5s",
    slow: "2s",
});

const blink = stylex.keyframes({
    "0%": { opacity: 1 },
    "50%": { opacity: 0.65 },
    "100%": { opacity: 1 },
});

const pulse = stylex.keyframes({
    "0%": { transform: "scale(1)" },
    "50%": { transform: "scale(1.1)" },
    "100%": { transform: "scale(1)" },
});

const loading = stylex.keyframes({
    "0%": { width: "0%" },
    "100%": { width: "100%" },
});

const rotate = stylex.keyframes({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
});

export const animations = stylex.defineVars({
    blink,
    pulse,
    loading,
    rotate,
});
