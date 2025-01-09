import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Import Routes
import LandingPage from "pages/LandingPage";  // Ensure you have this component imported



import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>  {/* Wrap the Route components with Routes */}
          <Route path="/" element={<LandingPage />} />  {/* Use 'element' to render the component */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
