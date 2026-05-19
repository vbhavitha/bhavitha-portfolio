import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Download,
  Mail,
} from "lucide-react";

import profile from "../assets/profile.png";

export default function Hero() {

  return (

    <section
      id="home"
      className="
        min-h-[85vh]
        bg-[#050816]
        text-white
        flex items-center justify-center
        px-6
      "
    >

      <div
        className="
          max-w-7xl
          w-full
          grid md:grid-cols-2
          gap-8
          items-center
          pl-8 md:pl-16
        "
      >

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* AVAILABLE BADGE */}
          <div
            className="
              inline-flex items-center gap-2
              px-5 py-2
              rounded-full
              border border-cyan-500/20
              bg-cyan-500/10
              mb-8
            "
          >

            <div
              className="
                w-3 h-3
                rounded-full
                bg-cyan-400
                animate-pulse
              "
            />

            <p className="text-cyan-300 font-medium">
              Available for opportunities
            </p>

          </div>

          {/* MAIN HEADING */}
          <h1
            className="
              text-2xl md:text-4xl
              font-bold
              leading-tight
              mb-6
            "
          >

            Hi, I'm{" "}

            <span className="text-cyan-400">
              Bhavitha
            </span>

          </h1>

          {/* TYPEWRITER */}
          <h2
            className="
              text-xl md:text-2xl
              text-gray-300
              mb-6
              font-semibold
            "
          >

            <Typewriter
              words={[
                "Cybersecurity Enthusiast",
                "MERN Stack Developer",
                "Django Developer",
                "Cloud Learner",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />

          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              text-gray-400
              text-base
              leading-relaxed
              max-w-2xl
              mb-6
            "
          >

            Designing and building secure scalable applications with
            modern technologies while focusing on cybersecurity,
            cloud systems, and performance optimization.

          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">

            {/* PROJECT BUTTON */}
            <Link
              to="/projects"
              className="
                flex items-center gap-2
                bg-cyan-400
                text-black
                px-5 py-3
                rounded-2xl
                font-semibold
                hover:scale-105
                transition duration-300
              "
            >

              View Projects

              <ArrowRight size={20} />

            </Link>

            {/* RESUME BUTTON */}
            <a
              href="/resume.pdf"
              download
              className="
                flex items-center gap-2
                border border-gray-700
                px-7 py-4
                rounded-2xl
                text-gray-300
                hover:border-cyan-400
                hover:text-cyan-400
                transition duration-300
              "
            >

              <Download size={20} />

              Resume

            </a>

            {/* CONTACT BUTTON */}
            <Link
              to="/contact"
              className="
                flex items-center gap-2
                border border-gray-700
                px-7 py-4
                rounded-2xl
                text-gray-300
                hover:border-cyan-400
                hover:text-cyan-400
                transition duration-300
              "
            >

              <Mail size={20} />

              Contact

            </Link>

          </div>

        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* GLOW EFFECT */}
            <div
              className="
                absolute inset-0
                rounded-full
                bg-cyan-400/10
                blur-3xl
              "
            />

            {/* IMAGE BORDER */}
            <div
              className="
                relative
                w-[200px] h-[200px]
                md:w-[280px] md:h-[280px]
                rounded-full
                border-4 border-cyan-500/40
                overflow-hidden
                shadow-[0_0_50px_rgba(34,211,238,0.2)]
              "
            >

              <img
                src={profile}
                alt="Bhavitha"
                className="
                  w-full
                  h-full
                  object-cover
                  brightness-75
                "
              />

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );

}