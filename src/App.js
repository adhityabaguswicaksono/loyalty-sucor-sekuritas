import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import { DetailPage } from "./components/DetailPage";
import NotFound from "./components/NotFound";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({
    offset: 50,
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/merchant-detail" element={<DetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
