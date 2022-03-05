import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./theme";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Profile from "./pages/Profile";

const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);

export default App;
