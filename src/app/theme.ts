export const fonts = {
    body: '"Noto Sans", sans-serif',
    heading: '"Poppins", sans-serif',
};

export const fontWeights = {
    regular: 400,
    medium: 500,
    semi: 600,
    bold: 700,
};

export const fontSizes = [
    "0.625rem",
    "0.75rem",
    "0.875rem",
    "1rem",
    "1.125rem",
    "1.25rem",
    "1.5rem",
    "1.75rem",
    "2rem",
    "2.5rem",
    "3rem",
];

export const lineHeights = {
    solid: 1,
    title: 1.25,
    copy: 1.5,
};

export const theme = {
    light: {
        // space,
        // sizes,
        fonts,
        fontSizes,
        fontWeights,
        lineHeights,
        // letterSpacings,
        // breakpoints,
        colors: {
            brand: {
                primary: "#2f80ed",
                secondary: "#f2f2f2;",
                accent: "#DB7C00",
                muted: "#C6DAF7",
            },
            ui: {
                primary: "#262626",
                secondary: "#757575",
                tertiary: "#F1F1F1",
                quaternary: "#FFFFFF",
                disabled: "#DEDEDE",
                error: "#D0421B",
                success: "#138000",
            },
            bg: {
                primary: "#FFFFFF",
                secondary: "#F1F1F1",
            },
            text: {
                primary: "#333333",
                secondary: "#828282",
                disabled: "#bdbdbd",
                inverse: "#FFFFFF",
                error: "#D0421B",
                success: "#138000",
            },
            // highlights: {
            //     primaryHighlight: darken(0.1, "#012E86"),
            //     primaryExtraHighlight: darken(0.2, "#012E86"),
            //     bgHighlight: darken(0.1, "#FFFFFF"),
            // },
        },
    },
    dark: {
        // space,
        // sizes,
        fonts,
        // fontSizes,
        fontWeights,
        lineHeights,
        // letterSpacings,
        // breakpoints,
        colors: {
            brand: {
                primary: "#298DFF",
                secondary: "#7CAEE8",
                accent: "#FDB447",
                muted: "#B7CBEA",
            },
            ui: {
                primary: "#FFFFFF",
                secondary: "#A1A1A1",
                tertiary: "#3C3C3C",
                quaternary: "#262626",
                disabled: "#242424",
                error: "#FF4D4D",
                success: "#1CBD00",
            },
            bg: {
                primary: "#FFFFFF",
                secondary: "#262626",
            },
            text: {
                primary: "#FFFFFF",
                secondary: "#A1A1A1",
                disabled: "#525252",
                inverse: "#262626",
                error: "#FF4D4D",
                success: "#1CBD00",
            },
            // highlights: {
            //     primaryHighlight: lighten(0.1, "#298DFF"),
            //     primaryExtraHighlight: lighten(0.2, "#298DFF"),
            //     bgHighlight: lighten(0.1, "#111111"),
            // },
        },
    },
};
