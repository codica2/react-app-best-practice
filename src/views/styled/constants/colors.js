export const blueColor = "#3192f6";

export const colors = {
  green: "#19df2b",
  purple: "#8f1ae5",
  lightBlue: "#1991fa",
  blue: "#4861f2",
  darkBlue: "#002C93",
  lightGreyBlue: "#dae1ee"
};

export const fontColors = {
  light: "#6F7084",
  regular: "#232323",
  black: "#000333",
  blue: { active: "#002C93", inert: "#5E6181" },
  red: "#c65c5c"
};

export const primaryColors = {
  green: "#85c473",
  darkGrey: "#666",
  grey: "#999",
  lightGrey: "#ccc",
  accentGrey: "#989ea9",
  accentBackground: "#eaeffa",
  backgroundColor: "#f4f9fa",
  shadowColor: "#e2eff2",
  transparentBlue: "#989ea9",
  strokeDarkBlue: "#002c93",
  errorColor: "#db4538",
  red: "#c65c5c"
};

export const miscellaneous = {
  lightBorder: "#f1f1f5",
  gradientBorder: `-webkit-border-image: -webkit-gradient(left, #2d68ee 0%, #7439e3 100%) 100% 2 stretch;
  -webkit-border-image: -webkit-linear-gradient(left, #2d68ee 0%, #7439e3 100%) 100% 2 stretch;
  -moz-border-image: -moz-linear-gradient(left, #2d68ee 0%, #7439e3 100%) 100% 2 stretch;
  -o-border-image: -o-linear-gradient(left, #2d68ee 0%, #7439e3 100%) 100% 2 stretch;
    border-image: linear-gradient(left, #2d68ee 0%, #7439e3 100%) 100% 2 stretch;
    border-color: ${colors.blue};`,
  gradient: {
    blue: "linear-gradient(to right, #2d68ee 0%,#7439e3 100%)"
  }
};

export const secondaryColors = {
  green: "#38ffbf"
};

export const boxShadow = {
  light: `box-shadow: 0 0 24px 0 ${primaryColors.shadowColor}`,
  grey: `box-shadow: 0 0 12px 0 ${primaryColors.lightGrey}`,
  dark: `box-shadow: 0 0 12px 0 rgba(0,0,0,.15)`
};
