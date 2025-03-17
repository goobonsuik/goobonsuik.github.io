import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import styled from "styled-components";
import S from "./styles/GlobalBlock.jsx";
import media from "./styles/media.jsx";

import About from "./pages/About.jsx";
import Project from "./pages/Project.jsx";
import Painting from "./pages/Painting.jsx";
import Work from "./pages/Work.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <S.Container>
        <Header />

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/work" element={<Work />}>
            <Route path="/work" element={<Project />} />
            <Route path="painting" element={<Painting />} />
          </Route>
        </Routes>
      
        <Footer />
      </S.Container>
    </BrowserRouter>
  );
}

export default App;
