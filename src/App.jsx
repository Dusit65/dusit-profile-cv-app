import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import HomeUI from "./HomeUI";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeUI />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
