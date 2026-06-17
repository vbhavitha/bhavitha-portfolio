import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  Download,
  Mail,
} from "lucide-react";


export default function Hero() {

  return (

    <section
    
  id="home"
  className="
    relative
    min-h-screen
    text-white
    flex items-center justify-center
    px-6
    overflow-hidden
    
  "
  
>

      <div
  className="
  relative z-10
  max-w-5xl
  w-full
  flex
  flex-col
  items-center
  justify-center
"
>

        {/* LEFT SIDE */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="
  text-center
  max-w-4xl
  mx-auto
"
>

          {/* AVAILABLE BADGE */}
          <div
            className="
  inline-flex items-center justify-center gap-2
  px-5 py-2
  rounded-full
  border border-cyan-500/20
  bg-cyan-500/10
  mb-6
"
          >

            <div
              className="
                w-2.5 h-2.5
                rounded-full
                bg-cyan-400
                animate-pulse
              "
            />

            <p className="text-cyan-300 font-medium">
              Available for opportunities
            </p>

          </div>
{/* BACKGROUND GLOW */}

          {/* MAIN HEADING */}
          <h1
            className="
              text-4xl md:text-6xl
              font-bold
              leading-tight
              mb-8
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
              text-2xl md:text-4xl
              text-gray-300
              mb-8
              font-semibold
            "
          >

            <Typewriter
              words={[
                "Cybersecurity Enthusiast",
                "Full Stack Developer",
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
              text-base md:text-xl
              leading-9
              max-w-3xl
              mx-auto
              mb-8
            "
          >

            Building secure web applications with MERN, Django, PostgreSQL and Cloud Technologies.

          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4">

            

            {/* RESUME BUTTON */}
            <a
              href="/resume.pdf"
              download
              className="
  flex items-center gap-3
  bg-gradient-to-r
  from-cyan-500
  to-blue-600
  hover:scale-105
  transition-all duration-300
  px-6 py-2
  rounded-2xl
  text-white
  text-xl
  font-semibold
  shadow-[0_0_30px_rgba(34,211,238,0.25)]
"
            >

              <Download size={20} />

              Resume

            </a>

            {/* CONTACT BUTTON */}
            <Link
              to="/contact"
              className="
  flex items-center gap-3
  border border-cyan-500/40
  bg-[#0B1220]
  px-6 py-2
  rounded-2xl
  text-cyan-300
  text-xl
  font-semibold
  hover:bg-cyan-500/10
  hover:border-cyan-400
  hover:text-cyan-200
  transition-all duration-300
"
            >

              <Mail size={20} />

              Contact

            </Link>

          </div>

        </motion.div>

        

      </div>

    </section>

  );

}