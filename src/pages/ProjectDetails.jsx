// ProjectDetails.jsx

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import projectsData from "../data/projectsData";
import Footer from "../components/Footer";

export default function ProjectDetails() {

  const { id } = useParams();

  const project = projectsData.find(
    (p) => p.id === id
  );

  const currentIndex = projectsData.findIndex(
    (item) => item.id === id
  );

  const nextProject =
    projectsData[currentIndex + 1];

  const previousProject =
    projectsData[currentIndex - 1];

  const [activeSection, setActiveSection] =
    useState("overview");

  useEffect(() => {

    const sections =
      document.querySelectorAll("section");

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            setActiveSection(entry.target.id);

          }

        });

      },

      {
        threshold: 0.3,
      }

    );

    sections.forEach((section) => {

      observer.observe(section);

    });

    return () => {

      sections.forEach((section) => {

        observer.unobserve(section);

      });

    };

  }, []);

  if (!project) {

    return (

      <div className="text-white min-h-screen px-6 pt-28 pb-0">

        Project not found

      </div>

    );

  }

  return (

    <div className="text-white min-h-screen px-6 pt-28 pb-0">

      <div className="max-w-6xl mx-auto px-4">

        {/* BACK BUTTON */}
        <Link
          to="/projects"
          className="
            text-gray-400
            hover:text-cyan-400
            transition
            mb-10
            inline-block
          "
        >

          ← Back to Projects

        </Link>

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-[1fr_220px] gap-14 items-start">

          {/* LEFT CONTENT */}
          <div>

            {/* BADGES */}
            <div className="flex items-center gap-3 mb-4">

              <span className="
                bg-cyan-500/20
                text-cyan-300
                text-xs
                px-3 py-1
                rounded-full
              ">

                {project.status}

              </span>

              <span className="text-gray-400">

                {project.category}

              </span>

            </div>

            {/* TITLE */}
            <h1 className="text-4xl font-bold mb-4">

              {project.title}

            </h1>

            {/* DESCRIPTION */}
            <p className="
              text-gray-400
              text-base
              leading-8
              mb-6
            ">

              {project.description}

            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-3 mb-20">

              {project.technologies.map((tech, i) => (

                <span
                  key={i}
                  className="
                    border border-cyan-500/30
                    text-cyan-300
                    px-3 py-1
                    rounded-full
                    text-xs
                  "
                >

                  {tech}

                </span>

              ))}

            </div>

            {/* OVERVIEW */}
            <section
              id="overview"
              className="mb-16 scroll-mt-32"
            >

              <h2 className="text-3xl font-bold mb-6">
                Overview
              </h2>

              <p className="
                text-gray-400
                text-base
                leading-8
              ">

                {project.overview}

              </p>

            </section>

            {/* PROBLEM */}
            <section
              id="problem"
              className="mb-16 scroll-mt-32"
            >

              <h2 className="text-3xl font-bold mb-6">
                Problem
              </h2>

              <p className="
                text-gray-400
                text-base
                leading-8
                mb-8
              ">

                {project.problem}

              </p>

              <ul className="space-y-5">

                {project.problemPoints.map((point, i) => (

                  <li
                    key={i}
                    className="
                      flex gap-3
                      text-gray-400
                      text-base
                    "
                  >

                    <span className="text-cyan-400">
                      •
                    </span>

                    {point}

                  </li>

                ))}

              </ul>

              <p className="
                text-gray-400
                leading-8
                mt-8
              ">

                {project.problemConclusion}

              </p>

            </section>

            {/* GOALS */}
            <section
              id="goals"
              className="mb-16 scroll-mt-32"
            >

              <h2 className="text-3xl font-bold mb-6">
                Goals
              </h2>

              <ul className="space-y-5">

                {project.goals.map((goal, i) => (

                  <li
                    key={i}
                    className="
                      flex gap-3
                      text-gray-400
                      text-base
                    "
                  >

                    <span className="text-cyan-400">
                      •
                    </span>

                    {goal}

                  </li>

                ))}

              </ul>

            </section>

            {/* ARCHITECTURE */}
            <section
              id="architecture"
              className="mb-16 scroll-mt-32"
            >

              <h2 className="text-3xl font-bold mb-6">
                Architecture
              </h2>

              <p className="
                text-gray-400
                text-base
                leading-8
                mb-10
              ">

                {project.architecture}

              </p>

              <ul className="space-y-4 mt-8">

                {project.architecturePoints.map((point, i) => (

                  <li
                    key={i}
                    className="
                      flex gap-3
                      text-gray-400
                      leading-8
                    "
                  >

                    <span className="
                      w-2 h-2
                      rounded-full
                      bg-cyan-400
                      mt-3
                    " />

                    <span>{point}</span>

                  </li>

                ))}

              </ul>

            </section>

            {/* AGENTS */}
            <section
              id="agents"
              className="mb-16 scroll-mt-32"
            >

              <h2 className="text-3xl font-bold mb-6">
                Agents and Tools
              </h2>

              <p className="
                text-gray-400
                text-base
                leading-8
                mb-10
              ">

                {project.agentsIntro}

              </p>

              <ul className="space-y-4 mt-8 mb-10">

                {project.agentsPoints.map((point, i) => (

                  <li
                    key={i}
                    className="
                      flex gap-3
                      text-gray-400
                      leading-8
                    "
                  >

                    <span className="
                      w-2 h-2
                      rounded-full
                      bg-cyan-400
                      mt-3
                    " />

                    <span>{point}</span>

                  </li>

                ))}

              </ul>

            </section>

            {/* FUTURE */}
            <section
              id="future"
              className="mb-24 scroll-mt-32"
            >

              <h2 className="text-3xl font-bold mb-6">
                Future Direction
              </h2>

              <ul className="space-y-5">

                {project.future.map((item, i) => (

                  <li
                    key={i}
                    className="
                      flex gap-3
                      text-gray-400
                      text-base
                    "
                  >

                    <span className="text-cyan-400">
                      •
                    </span>

                    {item}

                  </li>

                ))}

              </ul>

            </section>

          </div>

          {/* SIDEBAR */}
          {/* SIDEBAR */}
<div className="hidden lg:block">

  <div
    className="
      fixed
      top-32
      right-[14%]
      w-[220px]
    "
  >

              <p className="
                text-gray-500
                uppercase
                text-xs
                tracking-[2px]
                mb-6
              ">
                On This Page
              </p>

              <div className="
                border-l border-white/10
                pl-4
                space-y-4
              ">

                {[
                  { id: "overview", label: "Overview" },
                  { id: "problem", label: "Problem" },
                  { id: "goals", label: "Goals" },
                  { id: "architecture", label: "Architecture" },
                  { id: "agents", label: "Agents and Tools" },
                  { id: "future", label: "Future Direction" },
                ].map((item) => (

                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block transition-all duration-300

                    ${
                      activeSection === item.id
                        ? "text-cyan-400 border-l-2 border-cyan-400 pl-3 -ml-4"
                        : "text-gray-400 hover:text-cyan-400"
                    }

                    `}
                  >

                    {item.label}

                  </a>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* PREVIOUS + NEXT */}
      <div
        className="
          border-t border-white/10
          mt-24 pt-10
          flex justify-between items-center
          px-20
        "
      >

        {/* PREVIOUS */}
        {previousProject ? (

          <Link
            to={`/projects/${previousProject.id}`}
            className="group transition-all duration-300"
          >

            <p className="text-gray-500 text-xs mb-1">
              Previous
            </p>

            <div className="flex items-center gap-3">

              <span
                className="
                  text-gray-500
                  text-lg
                  group-hover:text-cyan-400
                  transition-all duration-300
                "
              >
                ←
              </span>

              <h3
                className="
                  text-lg
                  text-gray-400
                  group-hover:text-cyan-400
                  transition-all duration-300
                "
              >

                {previousProject.title}

              </h3>

            </div>

          </Link>

        ) : <div />}

        {/* NEXT */}
        {nextProject && (

          <Link
            to={`/projects/${nextProject.id}`}
            className="group transition-all duration-300"
          >

            <p className="text-gray-500 text-xs mb-1 text-right">
              Next
            </p>

            <div className="flex items-center gap-3">

              <h3
                className="
                  text-lg
                  text-gray-400
                  group-hover:text-cyan-400
                  transition-all duration-300
                "
              >

                {nextProject.title}

              </h3>

              <span
                className="
                  text-gray-500
                  text-lg
                  group-hover:text-cyan-400
                  transition-all duration-300
                "
              >
                →
              </span>

            </div>

          </Link>

        )}

      </div>

      {/* FOOTER */}
      

        <div className="mt-12">

  <Footer />

</div>


    </div>

  );

}