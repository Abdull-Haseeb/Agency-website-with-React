import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import PricingPage from "./pages/PricingPage";

import AboutPage from "./pages/AboutPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/aboutus" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
