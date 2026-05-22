import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import {
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function Projects() {

  const projects = [

    {
      id: "blogging-system",

      status: "completed",

      category: "Full Stack",

      title: "Online Blogging System",

      description:
        "Developed a full-stack blogging platform with authentication, post management, comments, and responsive UI using Django and PostgreSQL.",

      tech: [
        "Django",
        "Python",
        "PostgreSQL",
        "HTML",
        "CSS",
        "Bootstrap",
      ],
    },

    {
      id: "hospital-management",

      status: "completed",

      category: "MERN Stack",

      title: "Hospital Management System",

      description:
        "Built a hospital management platform with role-based authentication, patient records, appointment management, and secure backend APIs.",

      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "REST APIs",
      ],
    },

    {
      id: "mental-health-system",

      status: "in-progress",

      category: "AI & Healthcare",

      title: "Mental Health Support System",

      description:
        "Built a secure mental health support platform focused on emotional wellbeing, user interaction, and accessible mental health resources with a responsive web-based interface.",

      tech: [
        "React.js",
        "Node.js",
        "MongoDB",
        "REST APIs",
        "Authentication",
        "Cloud Computing",
      ],
    },

  ];

  return (

    <section
      id="projects"
      className="py-24 px-6 text-white"
    >

      {/* TITLE */}
      <div className="text-center mb-16">

        <p
  className="
    text-cyan-300
    uppercase
    tracking-[6px]
    text-sm
    font-bold
    mb-4
    drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]
  "
>
          Projects
        </p>

        <h2
  className="
    text-4xl
    md:text-5xl
    font-extrabold
    mb-5
    bg-gradient-to-r from-white via-slate-200 to-cyan-300 bg-clip-text text-transparent
drop-shadow-[0_0_20px_rgba(168,85,247,0.25)]
  "
>
          Featured Work
        </h2>

        <p
  className="
    text-gray-200
    text-lg
    md:text-xl
    font-medium
    tracking-wide
  "
>
          Everything I've built and worked on
        </p>

      </div>

      {/* PROJECT GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.map((project, index) => (

          <motion.div
            key={index}

            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}

            viewport={{ once: true }}
          >

            {/* COMPLETE CLICKABLE CARD */}
            <Link
              to={`/projects/${project.id}`}
              onClick={() => window.scrollTo(0, 0)}

              className="
                block
                bg-[#0B1220]/70
                border border-white/5
                rounded-3xl
                p-6
                shadow-[0_0_20px_rgba(34,211,238,0.03)]
                hover:border-cyan-500/20
                hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]
                hover:-translate-y-1
                transition-all
                duration-300
                flex flex-col
                justify-between
                h-full
              "
            >

              {/* TOP */}
              <div>

                {/* STATUS */}
                <div className="flex items-center justify-between mb-6">

                  <span
                    className={`
                      px-4 py-1
                      rounded-full
                      text-xs
                      font-semibold

                      ${
                        project.status === "completed"
                          ? "bg-cyan-500/10 text-cyan-300"
                          : "bg-purple-500/10 text-purple-300"
                      }
                    `}
                  >

                    {project.status}

                  </span>

                  <span className="text-sm text-gray-500">
                    {project.category}
                  </span>

                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-semibold text-gray-100 mb-4">

                  {project.title}

                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-400 text-[15px] leading-8 mb-8">

                  {project.description}

                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-3 mb-8">

                  {project.tech.map((tech, techIndex) => (

                    <span
                      key={techIndex}

                      className="
                        px-3 py-1.5
                        rounded-lg
                        bg-cyan-500/10
                        border border-cyan-500/10
                        text-cyan-300
                        text-xs
                        font-medium
                      "
                    >

                      {tech}

                    </span>

                  ))}

                </div>

              </div>

              {/* FOOTER */}
              <div
                className="
                  pt-5
                  border-t border-white/5
                  flex items-center justify-between
                "
              >

                <p
                  className="
                    flex items-center gap-2
                    text-cyan-400
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                  "
                >

                  View project

                  <ArrowRight size={18} />

                </p>

                <div
                  className="
                    w-11 h-11
                    rounded-full
                    border border-white/10
                    flex items-center justify-center
                    text-gray-400
                  "
                >

                  <ExternalLink size={18} />

                </div>

              </div>

            </Link>

          </motion.div>

        ))}

      </div>

      {/* BOTTOM BUTTON */}
      <div className="flex justify-center mt-16">

        <Link
          to="/projects"
          onClick={() => window.scrollTo(0, 0)}

          className="
            flex items-center gap-2
            text-cyan-400
            text-base
            font-semibold
            hover:gap-4
            transition-all
            duration-300
          "
        >

          View all projects

          <ArrowRight size={20} />

        </Link>

      </div>

    </section>

  );

}