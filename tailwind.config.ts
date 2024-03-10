import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        50: "#EAF1FE",
        100: "#BFD2FD",
        200: "#A0BCFB",
        300: "#749EFA",
        400: "#598BF9",
        500: "#306EF7",
        600: "#2C64E1",
        700: "#224EAF",
        800: "#1A3D88",
        900: "#142E68",
      },
      green: {
        50: "#E7F9EF",
        100: "#B5EDCC",
        200: "#91E5B4",
        300: "#5ED992",
        400: "#3FD17D",
        500: "#0FC65C",
        600: "#0EB454",
        700: "#0B8D41",
        800: "#086D33",
        900: "#065327",
      },
      grey: {
        50: "#F1F1F1",
        100: "#D3D3D3",
        200: "#BDBDBD",
        300: "#9F9F9F",
        400: "#8D8D8D",
        500: "#707070",
        600: "#666666",
        700: "#505050",
        800: "#3E3E3E",
        900: "#2F2F2F",
      },
      black: "#000",
      white: "#FFF"
    },
    fontSize: {
      "sm": "16px",
      "md": "20px",
      "xl": "32px",
      "2xl": "36px",
      "3xl": "40px",
      "4xl": "70px",
    },
    screens: {
      "xs": "320px",
      "sm": "430px",
      "md": "744px",
      "lg": "992px",
      "xl": "1440px",
    }
  },
  plugins: [],
};
export default config;
