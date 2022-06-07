import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Animal from "./components/Animal";
import Zoo from "./components/Zoo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Zoo />}>
          <Route path="/animals/:id" element={<Animal />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
