import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    light: {
      primary: "#ff0000",
      secondary: "#00ff00",
    },
    dark: {
      primary: "#0000ff",
      secondary: "#ffff00",
    },
  },
});

export default theme;
