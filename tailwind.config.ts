import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        pry: "#7848F4",
        sec: "#10107B",
        black: "#000",
        dark: "#131315",
        white: "#fff",
        grayText: "#7E7E7E",
        grayPlain: "#C5C5C5",
        graybg: "#ECECEC",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },

  plugins: [],
} satisfies Config;
