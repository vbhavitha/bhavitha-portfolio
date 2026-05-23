import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import experienceData from "../data/experienceData";
import Footer from "../components/Footer";

export default function ExperienceDetails() {

  const { id } = useParams();

  const experience = experienceData.find(
    (item) => item.id === id
  );

  const currentIndex = experienceData.findIndex(
    (item) => item.id === id
  );

  const nextExperience =
    experienceData[currentIndex + 1];

  const previousExperience =
    experienceData[currentIndex - 1];

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

  return (

    <div className="text-white min-h-screen px-6 pt-28 pb-0">

      <div className="max-w-6xl mx-auto px-6">

        {/* BACK */}
        <Link
          to="/experience"
          className="text-gray-400 hover:text-cyan-400"
        >
          ← Back to Experience
        </Link>

        <div className="mt-10">

          {/* TITLE */}
          <h1 className="text-5xl font-bold mb-4">
            {experience.role}
          </h1>

          <h2 className="text-cyan-400 text-2xl mb-2">
            {experience.company}
          </h2>

          <p className="text-gray-500 mb-6">
            {experience.duration} • {experience.location}
          </p>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-3 mb-12">

            {experience.skills.map((skill, i) => (

              <span
                key={i}
                className="
                  bg-white/10
                  px-3 py-1
                  rounded-lg
                  text-sm
                "
              >
                {skill}
              </span>

            ))}

          </div>

          <div className="grid md:grid-cols-[250px_1fr] gap-12">

            {/* SIDEBAR */}
            <div className="space-y-4 sticky top-28 h-fit">

              <h3 className="text-gray-500 uppercase text-sm">
                On This Page
              </h3>

              <div className="border-l border-white/10 pl-4 space-y-4">

                {[
                  { id: "overview", label: "Overview" },
                  { id: "responsibilities", label: "Key Responsibilities" },
                  { id: "achievements", label: "Major Accomplishments" },
                  { id: "systems", label: "Systems & Features Built" },
                  { id: "highlights", label: "Technical Highlights" },
                  { id: "projects", label: `Projects at ${experience.company}` },
                ].map((item) => (

                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block transition-all duration-300 text-sm

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

            {/* CONTENT */}
            <div>

              {/* OVERVIEW */}
              <section
                id="overview"
                className="mb-16 scroll-mt-32"
              >

                <h2 className="text-3xl font-bold mb-6">
                  Overview
                </h2>

                <p className="text-gray-400 leading-8">
                  {experience.overview}
                </p>

              </section>

              {/* RESPONSIBILITIES */}
              <section
                id="responsibilities"
                className="mb-16 scroll-mt-32"
              >

                <h2 className="text-3xl font-bold mb-6">
                  Key Responsibilities
                </h2>

                <ul className="space-y-5">

                  {experience.responsibilities.map((item, i) => (

                    <li
                      key={i}
                      className="flex gap-3 text-gray-400"
                    >

                      <span className="text-cyan-400">
                        ▶
                      </span>

                      {item}

                    </li>

                  ))}

                </ul>

              </section>

              {/* ACHIEVEMENTS */}
              <section
                id="achievements"
                className="mb-16 scroll-mt-32"
              >

                <h2 className="text-3xl font-bold mb-6">
                  Major Accomplishments
                </h2>

                <div className="space-y-5">

                  {experience.achievements.map((item, i) => (

                    <div
                      key={i}
                      className="
                        bg-[#0B1220]/80
                        border border-white/10
                        rounded-2xl
                        p-6
                      "
                    >

                      <span className="text-cyan-400 font-bold mr-4">
                        0{i + 1}
                      </span>

                      <span className="text-gray-400">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </section>

              {/* SYSTEMS */}
              <section
                id="systems"
                className="mb-16 scroll-mt-32"
              >

                <h2 className="text-3xl font-bold mb-8">
                  Systems & Features Built
                </h2>

                <ul className="space-y-5">

                  {experience.systems.map((item, i) => (

                    <li
                      key={i}
                      className="
                        flex gap-4
                        text-gray-400
                        text-lg
                        leading-9
                      "
                    >

                      <span className="text-cyan-400 mt-2">
                        ◆
                      </span>

                      <span>{item}</span>

                    </li>

                  ))}

                </ul>

              </section>

              {/* HIGHLIGHTS */}
              <section
                id="highlights"
                className="mb-16 scroll-mt-32"
              >

                <h2 className="text-3xl font-bold mb-8">
                  Technical Highlights
                </h2>

                <div className="space-y-6">

                  {experience.highlights.map((item, i) => (

                    <div
                      key={i}
                      className="
                        flex gap-4
                        text-gray-400
                        text-lg
                        leading-9
                      "
                    >

                      <span className="text-orange-400 mt-1">
                        ⚡
                      </span>

                      <span>{item}</span>

                    </div>

                  ))}

                </div>

              </section>

              {/* PROJECTS */}
              <section
                id="projects"
                className="mb-16 scroll-mt-32"
              >

                <h2 className="text-3xl font-bold mb-6">
                  Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                  {experience.projects.map((project, i) => (

                    <Link
                      key={i}
                      to={`/projects/${project.id}`}
                      className="
                        block
                        bg-[#081120]
                        border border-cyan-500/20
                        rounded-[32px]
                        p-5
                        hover:border-cyan-400
                        hover:-translate-y-1
                        transition-all duration-300
                        min-h-[360px]
                        flex flex-col
                        justify-between
                      "
                    >

                      {/* TOP */}
                      <div className="flex items-center justify-between mb-6">

                        <span className="
                          bg-cyan-500/20
                          text-cyan-300
                          text-xs
                          px-4 py-1
                          rounded-full
                          font-medium
                        ">
                          completed
                        </span>

                        <span className="text-gray-500 text-sm">
                          Backend
                        </span>

                      </div>

                      {/* CONTENT */}
                      <div>

                        <h3 className="
                          text-2xl
                          font-bold
                          text-white
                          leading-tight
                          mb-5
                        ">

                          {project.title}

                        </h3>

                        <p className="
                          text-gray-400
                          text-sm
                          leading-7
                          mb-7
                        ">

                          {project.description}

                        </p>

                        {/* TECH */}
                        <div className="flex flex-wrap gap-2">

                          {project.technologies.map((tech, idx) => (

                            <span
                              key={idx}
                              className="
                                bg-white/10
                                text-gray-300
                                text-xs
                                px-3 py-1
                                rounded-lg
                              "
                            >

                              {tech}

                            </span>

                          ))}

                        </div>

                      </div>

                      {/* BOTTOM */}
                      <div className="
                        border-t border-white/10
                        mt-8 pt-5
                      ">

                        <p className="
                          text-cyan-400
                          text-sm
                          font-semibold
                          flex items-center gap-2
                        ">

                          View project

                          <span className="text-lg">
                            →
                          </span>

                        </p>

                      </div>

                    </Link>

                  ))}

                </div>

              </section>

            </div>

          </div>

        </div>

      </div>

      {/* PREVIOUS + NEXT */}
      <div className="
        border-t border-white/10
        mt-24 pt-10
        flex justify-between items-center
        px-20
      ">

        {/* PREVIOUS */}
        {previousExperience ? (

          <Link
            to={`/experience/${previousExperience.id}`}
            className="group transition-all duration-300"
          >

            <p className="text-gray-500 text-xs mb-1">
              Previous
            </p>

            <div className="flex items-center gap-3">

              <span className="
                text-gray-500
                text-lg
                group-hover:text-cyan-400
                transition-all duration-300
              ">
                ←
              </span>

              <h3 className="
                text-lg
                text-gray-400
                group-hover:text-cyan-400
                transition-all duration-300
              ">
                {previousExperience.role}
              </h3>

            </div>

          </Link>

        ) : <div />}

        {/* NEXT */}
        {nextExperience && (

          <Link
            to={`/experience/${nextExperience.id}`}
            className="group transition-all duration-300"
          >

            <p className="text-gray-500 text-xs mb-1 text-right">
              Next
            </p>

            <div className="flex items-center gap-3">

              <h3 className="
                text-lg
                text-gray-400
                group-hover:text-cyan-400
                transition-all duration-300
              ">
                {nextExperience.role}
              </h3>

              <span className="
                text-gray-500
                text-lg
                group-hover:text-cyan-400
                transition-all duration-300
              ">
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