import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "blacks",
        color: "green.100",
      },
    },
  },
  colors: {
    brand: {
      50: "#2B3A42",
      100: "#EFEFEF",
      200: "#BDD4DE",
      300: "#3F5765",
      400: "#3F5765",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Roboto, sans-serif",
  },
});

export default theme;
