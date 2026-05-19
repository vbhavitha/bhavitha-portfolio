import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import EducationPage from "./pages/EducationPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import ExperienceDetails from "./pages/ExperienceDetails";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetails from "./pages/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (

    <BrowserRouter>
    <ScrollToTop />

      <div className="bg-[#050816] min-h-screen">

        {/* NAVBAR */}
        <Navbar />

        {/* ALL ROUTES */}
        <Routes>

          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* ABOUT */}
          <Route path="/about" element={<AboutPage />} />

          {/* EDUCATION */}
          <Route path="/education" element={<EducationPage />} />

          {/* RESUME */}
          <Route path="/resume" element={<ResumePage />} />

          {/* CONTACT */}
          <Route path="/contact" element={<ContactPage />} />

          {/* EXPERIENCE */}
          <Route path="/experience" element={<ExperiencePage />} />

          <Route
            path="/experience/:id"
            element={<ExperienceDetails />}
          />

          {/* PROJECTS */}
          <Route
            path="/projects"
            element={<ProjectsPage />}
          />

          <Route
            path="/projects/:id"
            element={<ProjectDetails />}
          />

        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;