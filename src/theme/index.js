import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import styles from "./styles";
import fonts from "./fonts";

const config = {
  initialColorMode: "system"
};

const overrides = extendTheme({
  colors,
  styles,
  config,
  fonts
});

export default extendTheme(overrides);
