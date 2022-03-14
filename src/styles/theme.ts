import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    highlight: {
      yellow: "#FFBA08",
    },
    dark: {
      black: "#000000",
      headingsAndText: "#47585B",
      info: "#999999",
    },
    light: {
      white: "#FFFFFF",
      headingsAndText: "#F5F8FA",
      info: "#DADADA",
    },
  },
  styles: {
    global: {
      body: {
        bg: "light.headingsAndText",
        color: "dark.headingsAndText",
      },
    },
  },
});
