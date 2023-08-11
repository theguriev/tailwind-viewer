import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: "#1DB954",
        secondary: "#535353",
        blue: {
          50: "red",
          100: "green",
        },
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
    },
  },
};
