import { motion } from "framer-motion";

import { Link } from "react-router-dom"; 

import { Code2, Server, Database, Cloud, Shield, ArrowRight, } from "lucide-react";

export default function Skills() {

  const skillCategories = [

    {title: "Programming", icon: <Code2 size={20} />, skills: [ "C", "Python", "Java", "JavaScript", ], },

    {title: "Full Stack", icon: <Server size={20} />, skills: [ "React", "Node.js", "Django", "REST APIs", ], },

    {title: "Databases", icon: <Database size={20} />, skills: [ "PostgreSQL", "MongoDB", ], },

    {title: "Cloud & Dev Tools", icon: <Cloud size={20} />, skills: [ "AWS", "Linux", "Git", ], },

    {
      title: "Cybersecurity", icon: <Shield size={20} />, skills: [ "Burp Suite", "Nmap", "Kali Linux", "Network Security", ], },

    

  ];

  return (

    <section
      id="skills"
      className="py-24 px-6 text-white"
    >

      {/* SECTION TITLE */}
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
          Skills
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
          Technical Expertise
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
          Technologies and tools I work with
        </p>

      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {skillCategories.map((category, index) => (

          <motion.div
            key={index}

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}

            viewport={{ once: true }}

            className="
  bg-[#081120]/88
  backdrop-blur-md
  border border-cyan-400/10
  rounded-3xl
  p-6
  shadow-[0_0_30px_rgba(34,211,238,0.08)]
  hover:border-cyan-400/30
  hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
  transition-all
  duration-300
"
              
          >

            {/* HEADER */}
            <div className="flex items-center gap-4 mb-6">

              <div
                className="
                  p-3
                  rounded-xl
                  bg-cyan-500/10
                  border border-cyan-500/10
                  text-cyan-400
                "
              >

                {category.icon}

              </div>

              <h3 className="text-lg font-semibold text-gray-100">
                {category.title}
              </h3>

            </div>

            {/* SKILLS */}
            <div className="flex flex-wrap gap-3">

              {category.skills.map((skill, skillIndex) => (

                <span
                  key={skillIndex}

                  className="
                    px-4 py-2
                    rounded-full
                    text-sm
                    font-medium
                    bg-cyan-500/10
                    text-cyan-300
                    border border-cyan-500/10
                    hover:bg-cyan-500/20
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >

                  {skill}

                </span>

              ))}

            </div>

          </motion.div>

        ))}

      </div>

      {/* BOTTOM BUTTON */}
<div className="flex justify-center mt-16">

  <Link
    to="/certifications"
    onClick={() => window.scrollTo(0, 0)}

    className="
      flex items-center gap-2
      text-cyan-300
      text-lg
      font-semibold

      hover:text-cyan-200
      hover:gap-3

      transition
      duration-200

      drop-shadow-[0_0_10px_rgba(34,211,238,0.45)]
    "
  >

    View my certifications

    <ArrowRight size={22} />

  </Link>

</div>

    </section>
  );
}