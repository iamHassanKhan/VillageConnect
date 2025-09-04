  const COLORS = {
  primary: "#D32F2F",
  primaryLight: "#FFCDD2",
  primaryDark: "#B71C1C",

  secondary: "#1976D2",
  secondaryLight: "#BBDEFB",
  secondaryDark: "#0D47A1",

  success: "#388E3C",
  danger: "#D32F2F",

  white: "#FFFFFF",
  black: "#000000",
  gray: "#9E9E9E",
  backgroundLight: "#F5F5F5",
  backgroundDark: "#121212",

  cardLight: "#FFFFFF",
  cardDark: "#1E1E1E",
  shadow: "#000000",
};

 const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

 const FONTS = {
  regular: "System",
  medium: "System",
  bold: "System",
};

const FONT_SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
};

 const THEME = {
  light: {
    background: COLORS.backgroundLight,
    text: COLORS.black,
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    card: COLORS.cardLight,
  },
  dark: {
    background: COLORS.backgroundDark,
    text: COLORS.white,
    primary: COLORS.primaryLight,
    secondary: COLORS.secondaryLight,
     card: COLORS.cardDark,
  },
};

export { COLORS, FONT_SIZES, FONTS, SPACING, THEME };

