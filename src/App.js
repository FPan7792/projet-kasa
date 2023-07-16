import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import "./index.scss";
import "./base.scss";

import BaseLayer from "./components/BaseLayer";

// pages
import ErrorPage from "./pages/ErrorPage.js";

// routes
import Home from "./routes/Home/home";
import About from "./routes/about";
import Accomodation from "./routes/Accomodation/accomodation";

const App = () => {
  return (
    <BrowserRouter>
      <BaseLayer>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/accomodation/:accomodationId"
              element={<Accomodation />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BaseLayer>
    </BrowserRouter>
  );
};

export default App;
