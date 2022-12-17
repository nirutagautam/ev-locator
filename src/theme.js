import { extendTheme, withDefaultProps } from "@chakra-ui/react";

const chakraTheme = extendTheme({
  fonts: {
    heading: `'IBM Plex Sans', sans-serif`,
    body: `'Noto Sans', sans-serif`,
  },
  withDefaultProps: {
    rounded: "sm",
    components: ["Input"],
  },

  components: {
    Button: {
      baseStyle: {
        rounded: "sm",
      },
    },
    // Input: {
    //   defaultProps: {
    //     rounded: "sm",
    //   },
    //   baseStyle: {
    //     rounded: "sm",
    //   },
    // },
  },
});

export { chakraTheme };
