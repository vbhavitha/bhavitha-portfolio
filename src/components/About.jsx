import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import {
  MapPin,
  Code2,
  Calendar,
  ArrowRight,
} from "lucide-react";

export default function About() {

  return (

    <section
      id="about"
      className="py-24 px-6 text-white"
    >

      {/* SECTION TITLE */}
      <div className="text-center mb-14">

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
          About
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
          Who I Am
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
          A bit more about who I am and what drives me
        </p>

      </div>

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}

        className="
          max-w-5xl
          mx-auto
          bg-[#0B1220]/70
          border border-white/5
          rounded-3xl
          p-6 md:p-8
          shadow-[0_0_25px_rgba(34,211,238,0.04)]
          backdrop-blur-md
        "
      >

        <div className="grid md:grid-cols-[220px_1fr] gap-10">

          {/* LEFT INFO PANEL */}
          <div className="space-y-7">

            {/* LOCATION */}
            <div className="flex items-start gap-4">

              <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/10">

                <MapPin
                  className="text-cyan-400"
                  size={14}
                />

              </div>

              <div className="flex flex-col justify-center">

                <h4 className="text-sm md:text-base font-medium text-gray-200">
                  Tirupati, India
                </h4>

              </div>

            </div>

            {/* SPECIALIZATION */}
            <div className="flex items-start gap-4">

              <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/10">

                <Code2
                  className="text-cyan-400"
                  size={14}
                />

              </div>

              <div>

                <h4 className="text-sm md:text-base font-medium text-gray-200 leading-normal">
                  Cybersecurity & Blockchain Technology
                </h4>

              </div>

            </div>

            {/* EDUCATION */}
            <div className="flex items-start gap-4">

              <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/10">

                <Calendar
                  className="text-cyan-400"
                  size={14}
                />

              </div>

              <div>

                <h4 className="text-sm md:text-base font-medium text-gray-200 leading-normal">
                  B.Tech CSE
                </h4>

              </div>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div>

            <p className="text-gray-300 text-[15px] md:text-base leading-8 mb-7">

              I’m a Computer Science Engineering graduate specializing in
              Cybersecurity and Blockchain Technology with hands-on experience
              in MERN Stack development, Django, cloud computing, and secure
              system design.

            </p>

            <p className="text-gray-400 text-[15px] md:text-base leading-8 mb-7">

              I enjoy building scalable applications, exploring ethical hacking,
              and working on projects involving authentication, RBAC, REST APIs,
              and security-focused architectures. My experience includes
              internships with Vehinova Technologies and ISRO.

            </p>

            <p className="text-gray-400 text-[15px] md:text-base leading-8 mb-9">

              I’m passionate about creating reliable digital systems that
              combine performance, usability, and cybersecurity best practices
              while continuously learning modern technologies.

            </p>

            {/* QUOTE */}
            <div className="border-l-2 border-cyan-400 pl-5 mb-9">

              <p className="italic text-gray-100 text-sm md:text-base font-medium leading-7">

                "I aim to build secure, scalable, and impactful digital systems
                that solve real-world problems through modern technology and
                cybersecurity practices."

              </p>

            </div>

            {/* BUTTON */}
            <Link
              to="/about"
              className="
                inline-flex items-center gap-2
                text-cyan-400
                text-sm md:text-base
                font-semibold
                hover:gap-4
                transition-all
                duration-300
              "
            >

              Learn more about me

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

      </motion.div>

    </section>

  );

}