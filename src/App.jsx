import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./theme";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Item from "./pages/item";

const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Item />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </ChakraProvider>
);

export default App;
