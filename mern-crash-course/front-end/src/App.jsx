import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { useColorModeValue } from "./components/ui/color-mode";

function App() {
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/create" element={<CreatePage />}></Route>
        </Routes>
      </Box>
    </>
  );
}

export default App;
