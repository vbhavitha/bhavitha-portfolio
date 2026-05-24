import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import {
  Mail,
  ArrowRight,
  Briefcase,
  Users,
  FileText,
  ShieldCheck,
} from "lucide-react";

export default function ContactCTA() {

  return (

    <section
  id="contact"
  className="py-12 px-4 text-white"
>

  <motion.div

    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}

    transition={{ duration: 0.7 }}

    viewport={{ once: true }}

    className="
      max-w-6xl
      mx-auto

      rounded-[36px]

      border border-cyan-500/20

      bg-[#0B1220]/55

      backdrop-blur-xl

      shadow-[0_0_80px_rgba(34,211,238,0.08)]

      px-8 md:px-16
      py-8 md:py-10

      relative
      overflow-hidden
    "
  >

    {/* TOP GLOW */}
    <div
      className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_40%)]

        pointer-events-none
      "
    />

    {/* EXTRA GRADIENT */}
    <div
      className="
        absolute
        inset-0
        bg-gradient-to-br
        from-cyan-500/[0.03]
        via-transparent
        to-fuchsia-500/[0.03]

        pointer-events-none
      "
    />

    {/* MAIN GRID */}
    <div
      className="
        grid
        grid-cols-1
md:grid-cols-[1.25fr_0.75fr]
gap-10
        items-center
        relative
        z-10
      "
    >

      {/* LEFT SIDE */}
      <div>

        {/* ICON */}
        <div
          className="
            w-16 h-16
            rounded-2xl
            bg-cyan-500/10
            border border-cyan-500/10
            flex items-center justify-center
            mb-8
          "
        >

          <Mail
            className="text-cyan-400"
            size={30}
          />

        </div>

        {/* HEADING */}
        <h2
          className="
            text-4xl
            md:text-5xl
            font-bold
            leading-[1.05]
            mb-8
          "
        >

          Let’s Work

          <br />

          <span className="text-cyan-400">
            Together
          </span>

        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            text-gray-300
            text-lg
            leading-9
            max-w-xl
            mb-10
          "
        >

          I'm always excited to collaborate on meaningful
          projects and explore new opportunities.
          Whether you have a question or just want to say hello,
          I'll get back to you soon.

        </p>

        {/* AVAILABLE FOR */}
        <div className="mb-10">

          <p
            className="
              text-xs
              uppercase
              tracking-[5px]
              text-gray-400
              mb-5
            "
          >

            Available For

          </p>

          <div className="flex flex-wrap gap-4">

            {/* INTERNSHIPS */}
            <div
              className="
                flex items-center gap-3
                px-5 py-3
                rounded-xl
                border border-cyan-500/20
                bg-cyan-500/5
                text-cyan-300
              "
            >

              <Briefcase size={18} />

              <span className="text-[15px]">
                Internships
              </span>

            </div>

            {/* FREELANCE */}
            <div
              className="
                flex items-center gap-3
                px-5 py-3
                rounded-xl
                border border-cyan-500/20
                bg-cyan-500/5
                text-cyan-300
              "
            >

              <FileText size={18} />

              <span className="text-[15px]">
                Freelance Projects
              </span>

            </div>

            {/* COLLAB */}
            <div
              className="
                flex items-center gap-3
                px-5 py-3
                rounded-xl
                border border-cyan-500/20
                bg-cyan-500/5
                text-cyan-300
              "
            >

              <Users size={18} />

              <span className="text-[15px]">
                Collaboration
              </span>

            </div>

          </div>

        </div>

        {/* EMAIL */}
        <div className="flex items-center gap-4 text-gray-300">

          <Mail
            size={24}
            className="text-cyan-400"
          />

          <p className="text-lg break-all">
            bhavitha.vakkalagadda@gmail.com
          </p>

        </div>

      </div>

      {/* CENTER LINE */}
      <div
        className="
          hidden md:block
          absolute
          left-[60%]
          top-20
          bottom-20
          w-px
          bg-gradient-to-b
          from-transparent
          via-cyan-500/20
          to-transparent
        "
      />

      {/* RIGHT SIDE */}
      <div className="relative flex justify-center">

{/* OUTER ORBIT */}
<div
  className="
    absolute
    w-[420px]
    h-[420px]
    rounded-full

    border border-cyan-400/20

    shadow-[0_0_80px_rgba(34,211,238,0.18)]

    opacity-90
  "
/>

{/* INNER ORBIT */}
<div
  className="
    absolute
    w-[260px]
    h-[260px]
    rounded-full

    border border-fuchsia-500/20

    shadow-[0_0_80px_rgba(168,85,247,0.25)]

    opacity-80
  "
/>

{/* TOP GLOW DOT */}
<div
  className="
    absolute
    top-[60px]
    right-[35px]

    w-4 h-4
    rounded-full

    bg-cyan-300

    shadow-[0_0_30px_rgba(34,211,238,0.9)]
  "
/>

{/* BOTTOM GLOW DOT */}
<div
  className="
    absolute
    bottom-[60px]
    left-[50px]

    w-3 h-3
    rounded-full

    bg-fuchsia-400

    shadow-[0_0_25px_rgba(192,132,252,0.9)]
  "
/>

        {/* BUTTON CONTAINER */}
        <div
          className="
            relative
            z-10
            flex
            flex-col
            items-center
justify-center
gap-4
min-h-[280px]
          "
        >

          {/* PRIMARY BUTTON */}
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="
              inline-flex items-center justify-center gap-3

              bg-cyan-400
              hover:bg-cyan-300

              text-black
              text-base
              font-semibold

              px-12 py-3

              rounded-2xl

              transition-all duration-300

              hover:scale-105

              shadow-[0_0_35px_rgba(34,211,238,0.35)]
            "
          >

            Get Connected

            <ArrowRight size={28} />

          </Link>

          {/* SECONDARY BUTTON */}
          <Link
            to="/resume"
            onClick={() => window.scrollTo(0, 0)}
            className="
              inline-flex items-center justify-center gap-3

              border border-cyan-400/30
              bg-cyan-500/5

              text-cyan-300
              text-base
              font-medium

              px-10 py-2.5

              rounded-2xl

              hover:bg-cyan-500/10

              transition-all duration-300
            "
          >

            <FileText size={22} />

            View Resume

          </Link>

          {/* RESPONSE TEXT */}
          <div className="flex items-center gap-3 text-gray-400 mt-2">

            <ShieldCheck
              size={18}
              className="text-cyan-400"
            />

            <p className="text-sm">
              I typically respond within 24 hours
            </p>

          </div>

        </div>

      </div>

    </div>

  </motion.div>

</section>
  );
}