import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import theme from "./theme";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Item from "./pages/item";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  const [curPage, setCurPage] = useState(0);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar curPage={curPage} setCurPage={setCurPage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/item" element={<Item />} />
        </Routes>
        <Footer setCurPage={setCurPage} />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
