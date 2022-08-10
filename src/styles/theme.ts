import { extendTheme } from "@chakra-ui/react";

const colors = {
  blue: {
    "800": "#133467",
  },
  black: {
    "800": "#333333",
  },
  orange: {
    "500": "#eea229",
  },
  white: {
    "500": "#f5f5f5",
  },
};

export const theme = extendTheme({
  colors,
  fonts: {
    heading: "Manrope",
    body: "Manrope",
  },
  styles: {
    global: {
      body: {
        color: colors.black["800"],
      },
    },
  },
});
