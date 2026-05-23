import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import EducationPage from "./pages/EducationPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import ExperienceDetails from "./pages/ExperienceDetails";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetails from "./pages/ProjectDetails";

import aurora from "./assets/aurora.jpg";

function App() {

  return (

    <BrowserRouter>

      <ScrollToTop />

      <div
        className="
          min-h-screen
          bg-cover
          bg-center
          bg-fixed
          relative
          
        "
        style={{
          backgroundImage: `url(${aurora})`,
        }}
      >

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#020617]/55 z-0" />

        {/* MAIN CONTENT */}
        <div className="relative z-10 flex flex-col min-h-screen">

          {/* NAVBAR */}
          <Navbar />

          {/* PAGE CONTENT */}
          <main className="flex-1">

            <Routes>

              {/* HOME */}
              <Route
                path="/"
                element={<Home />}
              />

              {/* ABOUT */}
              <Route
                path="/about"
                element={<AboutPage />}
              />

              {/* EDUCATION */}
              <Route
                path="/education"
                element={<EducationPage />}
              />

              {/* RESUME */}
              <Route
                path="/resume"
                element={<ResumePage />}
              />

              {/* CONTACT */}
              <Route
                path="/contact"
                element={<ContactPage />}
              />

              {/* EXPERIENCE */}
              <Route
                path="/experience"
                element={<ExperiencePage />}
              />

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

          </main>


        </div>

      </div>

    </BrowserRouter>

  );
}

export default App;