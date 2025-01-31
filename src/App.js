import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Example from "pages/Example";

import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/properties/:id" Component={DetailsPage} />
          <Route path="/example" element={<Example />} />
   
        </Routes>
      </Router>
    </div>
  );
}

export default App;
