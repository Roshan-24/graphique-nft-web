import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: props => ({
    body: {
      margin: 0,
      bg: mode("white", "dark")(props)
    }
  })
};

export default styles;
