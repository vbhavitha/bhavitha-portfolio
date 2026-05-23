import { Link } from "react-router-dom";
import projectsData from "../data/projectsData";
import Footer from "../components/Footer";

export default function ProjectsPage() {

  return (

    <div className="text-white min-h-screen px-6 pt-28 pb-0">

      {/* TITLE */}
      <div className="text-center mb-16">

        

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          My Works
        </h1>

        <p className="text-gray-400 text-sm md:text-base">
          Projects and systems I built
        </p>

      </div>

      {/* PROJECT GRID */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {projectsData.map((project) => (

          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="block"
          >

            <div
              className="
                bg-[#0B1220]/80
                border border-cyan-500/20
                rounded-2xl
                p-5
                hover:border-cyan-400
                hover:-translate-y-1
                transition-all duration-300
                cursor-pointer
                h-[460px]
                flex flex-col
                justify-between
              "
            >

              {/* TOP */}
              <div className="flex items-center justify-between mb-5">

                <span
                  className={`
                    text-xs
                    px-4 py-1
                    rounded-full
                    font-medium

                    ${
                      project.status === "in-progress"
                        ? "bg-purple-500/20 text-purple-300"
                        : "bg-cyan-500/20 text-cyan-300"
                    }
                  `}
                >

                  {project.status}

                </span>

                <span className="text-gray-500 text-sm">

                  {project.category}

                </span>

              </div>

              {/* CONTENT */}
              <div className="flex-1 flex flex-col">

                {/* TITLE */}
                <h2
                  className="
                    text-[24px]
                    font-bold
                    text-cyan-300
                    leading-tight
                    mb-5
                  "
                >

                  {project.title}

                </h2>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-gray-400
                    text-[15px]
                    leading-8
                    mb-8
                  "
                >

                  {project.description}

                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-auto mb-6">

                  {project.technologies.map((tech, i) => (

                    <span
                      key={i}
                      className="
                        bg-white/10
                        text-gray-300
                        text-xs
                        px-3 py-1
                        rounded-md
                      "
                    >

                      {tech}

                    </span>

                  ))}

                </div>

              </div>

              {/* BOTTOM */}
              <div className="border-t border-white/10 pt-5">

                <p
                  className="
                    text-cyan-400
                    text-sm
                    font-semibold
                  "
                >

                  View Project →

                </p>

              </div>

            </div>

          </Link>

        ))}

      </div>

      {/* FOOTER */}
      <div className="mt-24">

        <Footer />

      </div>

    </div>

  );
}