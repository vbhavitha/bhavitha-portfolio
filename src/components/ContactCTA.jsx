import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import {
  Mail,
  ArrowRight,
} from "lucide-react";

export default function ContactCTA() {

  return (

    <section
      id="contact"
      className="py-24 px-6 text-white"
    >

      <motion.div

        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.7 }}

        viewport={{ once: true }}

        className="
          max-w-6xl
          mx-auto
          rounded-3xl
          border border-cyan-500/20
          bg-[#0B1220]/70
          shadow-[0_0_60px_rgba(34,211,238,0.08)]
          backdrop-blur-md
          px-6 md:px-16
          py-16
          text-center
          relative
          overflow-hidden
        "
      >

        {/* GLOW EFFECT */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_55%)]
            pointer-events-none
          "
        />

        {/* ICON */}
        <div
          className="
            w-14 h-14
            mx-auto mb-8
            rounded-2xl
            bg-cyan-500/10
            border border-cyan-500/10
            flex items-center justify-center
          "
        >

          <Mail
            className="text-cyan-400"
            size={26}
          />

        </div>

        {/* HEADING */}
        <h2
          className="
            text-3xl
            md:text-4xl
            font-bold
            mb-6
            leading-tight
          "
        >

          Let’s Cook Something Great

        </h2>

        {/* TEXT */}
        <p
          className="
            text-gray-400
            text-base
            md:text-lg
            max-w-3xl
            mx-auto
            leading-6
            mb-10
          "
        >

          I am currently looking for new opportunities and my inbox is always open. 
          Whether you have a question or just wanted to discuss something, 
          I'll try my best to get back to you!

        </p>

        {/* BUTTON */}
        <Link
          to="/contact"
          onClick={() => window.scrollTo(0, 0)}

          className="
  inline-flex items-center gap-3

  bg-cyan-400
  hover:bg-cyan-300

  text-black
  text-lg
  font-semibold

  px-8 py-4

  rounded-2xl

  transition
  duration-300

  hover:scale-105

  shadow-[0_0_20px_rgba(34,211,238,0.25)]
"
        >

          Get Connected

          <ArrowRight size={22} />

        </Link>

      </motion.div>

    </section>
  );
}