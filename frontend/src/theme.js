import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  semanticTokens: {
    colors: {
      "chakra-body-bg": {
        _light: "gray.500",
        _dark: "gray.800",
      },
    },
  },
});
export default theme;
