import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      height: {
        "98vh": "98vh",
      },
    },
    colors: {
      primary: {
        dark: "#1e1e2e",
        DEFAULT: "#eff1f5",
      },
      rosewater: {
        dark: "#f5e0dc",
        DEFAULT: "#dc8a78",
      },
      flamingo: {
        dark: "#f2cdcd",
        DEFAULT: "#dd7878",
      },
      pink: {
        dark: "#f5c2e7",
        DEFAULT: "#ea76cb",
      },
      mauve: {
        dark: "#cba6f7",
        DEFAULT: "#8839ef",
      },
      red: {
        dark: "#f38ba8",
        DEFAULT: "#d20f39",
      },
      maroon: {
        dark: "#eba0ac",
        DEFAULT: "#e64553",
      },
      peach: {
        dark: "#fab387",
        DEFAULT: "#fe640b",
      },
      yellow: {
        dark: "#f9e2af",
        DEFAULT: "#df8e1d",
      },
      green: {
        dark: "#a6e3a1",
        DEFAULT: "#40a02b",
      },
      teal: {
        dark: "#94e2d5",
        DEFAULT: "#179299",
      },
      sky: {
        dark: "#89dceb",
        DEFAULT: "#04a5e5",
      },
      sapphire: {
        dark: "#74c7ec",
        DEFAULT: "#298fb5",
      },
      blue: {
        dark: "#89b4fa",
        DEFAULT: "#1e66f5",
      },
      lavender: {
        dark: "#b4befe",
        DEFAULT: "#7287fd",
      },
      font: {
        dark: "#cdd6f4",
        ligt: "#4c4f69",
      },
      font2: {
        dark: "#bac2de",
        DEFAULT: "#5c5f77",
      },
      mantle: {
        dark: "#181825",
        DEFAULT: "#e6e9ef",
      },
      crust: {
        dark: "#11111b",
        DEFAULT: "#dce0e8",
      },
    },
  },
  plugins: [],
} satisfies Config;
