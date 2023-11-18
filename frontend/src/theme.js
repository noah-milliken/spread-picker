import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  colors: {
    brand: "#e84c2c",
    accent: "#e84c2c",
  },
  semanticTokens: {
    colors: {
      "chakra-body-bg": {
        _light: "#F9F6EE",
        _dark: "gray.800",
      },
    },
  },
});
export default theme;
