import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import styles from "./styles";
import fonts from "./fonts";
import ButtonStyle from "./components/button";

const config = {
  initialColorMode: "system"
};

const overrides = extendTheme({
  colors,
  styles,
  config,
  fonts,
  components: {
    Button: ButtonStyle
  }
});

export default extendTheme(overrides);
