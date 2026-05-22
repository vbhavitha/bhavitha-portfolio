import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Experience() {

  const experiences = [

    {
      id: "vehinova",

      role: "Python Full Stack Intern",

      company: "Vehinova Technologies",

      location: "Vijayawada, India",

      period: "May 2024 — Jun 2024",

      points: [
        "Developed a secure online blogging platform using Django with features for user authentication, post creation, and commenting.",

        "Integrated PostgreSQL with Django ORM and implemented security measures including CSRF protection, password hashing, and input validation.",

        "Designed a responsive Bootstrap-based user interface and followed MVC architecture for scalable and maintainable development.",
      ],

      tech: [
        "Django",
        "PostgreSQL",
        "Bootstrap",
        "Responsive UI",
      ],
    },

    {
      id: "isro",

      role: "ISRO START Program Trainee",

      company: "ISRO",

      location: "Remote",

      period: "Apr 2024 — May 2024",

      points: [
        "Completed ISRO’s START program focused on space science, satellite communication, astronomy, and remote sensing technologies.",

        "Learned about Indian space missions, satellite systems, heliophysics, and emerging research areas through sessions conducted by ISRO scientists.",

        "Explored applications of cybersecurity, secure communication, and data management in space and satellite networks.",
      ],

      tech: [
        "Cybersecurity",
        "Space Tech",
        "Web Security",
        "Research",
      ],
    },

  ];

  return (

    <section
      id="experience"
      className="py-24 px-6 text-white"
    >

      {/* TITLE */}
      <div className="text-center mb-20">

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
          Experience
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
          Where I've Worked
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
          My professional journey so far
        </p>

      </div>

      {/* TIMELINE */}
      <div className="max-w-5xl mx-auto relative lg:pl-12">

        {/* VERTICAL LINE */}
<div
  className="
    absolute
    left-3 md:left-0
    top-0
    h-full
    w-[1px]
    bg-cyan-500/10
  "
/>

        {/* EXPERIENCE CARDS */}
        <div className="space-y-14">

          {experiences.map((exp, index) => (

            <motion.div
              key={index}

              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}

              viewport={{ once: true }}

              

              className="
  relative
  md:w-[calc(100%-180px)]
  ml-12
"
            >

              {/* TIMELINE DOT */}
<div
  className="
    absolute
    top-8
    -left-[28px]

    w-3
    h-3
    rounded-full
    bg-cyan-400

    shadow-[0_0_10px_rgba(34,211,238,0.7)]
  "
/>

              {/* CLICKABLE CARD */}
              <Link
                to={`/experience/${exp.id}`}

                className="
                  block
                  bg-[#0B1220]/70
                  border border-white/5
                  rounded-3xl
                  p-6 md:p-7
                  shadow-[0_0_20px_rgba(34,211,238,0.03)]
                  hover:border-cyan-500/20
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                {/* HEADER */}
                <div className="flex justify-between items-start gap-6 mb-6">

                  <div>

                    <h3 className="text-xl font-semibold text-cyan-400 mb-1">
                      {exp.role}
                    </h3>

                    <h4 className="text-lg font-medium text-gray-100 mb-1">
                      {exp.company}
                    </h4>

                    <p className="text-sm text-gray-500">
                      {exp.location}
                    </p>

                  </div>

                  <p className="text-sm text-gray-500 whitespace-nowrap">
                    {exp.period}
                  </p>

                </div>

                {/* POINTS */}
                <ul className="space-y-4 mb-6">

                  {exp.points.map((point, pointIndex) => (

                    <li
                      key={pointIndex}
                      className="
                        text-gray-400
                        text-[15px]
                        leading-7
                        flex
                        gap-3
                      "
                    >

                      <span className="text-cyan-400 mt-1">
                        •
                      </span>

                      {point}

                    </li>

                  ))}

                </ul>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-3 mb-6">

                  {exp.tech.map((tech, techIndex) => (

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

                {/* FOOTER */}
                <div
                  className="
                    pt-5
                    border-t border-white/5
                    flex justify-end
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

                    View role

                    <ArrowRight size={18} />

                  </p>

                </div>

              </Link>

            </motion.div>

          ))}

        </div>

        {/* BOTTOM BUTTON */}
        <div className="flex justify-center mt-16">

          <Link
            to="/experience"
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

            View full experience

            <ArrowRight size={20} />

          </Link>

        </div>

      </div>

    </section>

  );

}