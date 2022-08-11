import { extendTheme } from "@chakra-ui/react";

const colors = {
  black: {
    "800": "#333333",
  },
  orange: {
    "500": "#eea229",
  },
  white: {
    "500": "#f5f5f5",
  },
  blue: {
    "500": "#35508a",
    "700": "#233B6F",
    "800": "#14213d",
  },
};

export const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: true,
  colors,
  fonts: {
    heading: "Manrope",
    body: "Manrope",
  },
});
