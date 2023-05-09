import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Articles } from "./pages/Articles";
import { Redux } from "./pages/Redux";
import { Mobx } from "./pages/Mobx";
import styled from "styled-components";

const GreenHeading = styled.h1`
  color: green;
  font-size: 2rem;
`;

const App = () => {
  return (
    <>
      <GreenHeading>Server Side Rendering Example</GreenHeading>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="articles">Articles</Link>
          </li>
          <li>
            <Link to="redux">Redux</Link>
          </li>
          <li>
            <Link to="mobx">Mobx</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/redux" element={<Redux />} />
        <Route path="/mobx" element={<Mobx />} />
      </Routes>
    </>
  );
};

export default App;
