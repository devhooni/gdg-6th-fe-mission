import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./Navbar.jsx";
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./CategoryPage.jsx";
import PricePage from "./PricePage.jsx";
import SortPage from "./SortPage.jsx";
import AdminPage from "./AdminPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/sort" element={<SortPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
