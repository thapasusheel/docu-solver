import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

import AuthorPage from "@/pages/AuthorPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/author" element={<AuthorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
