import { extendTheme } from "@chakra-ui/react";

export const colors = {
  brand: "#ffd803",
  lightGray: "#f0f0f0",
  midGray: "#848484",
  darkGray: "#23232c",
  pureWhite: "#ffffff",
};

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        scrollBehavior: "smooth",
        bg: "black",
        color: "white",
        padding: 0,
        margin: 0,
      },
    },
  },
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
  colors: { ...colors },
  components: {},
});
