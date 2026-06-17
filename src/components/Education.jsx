import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  GraduationCap,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Education() {

  const educationData = [

    {
      degree: "Bachelor of Technology",
      specialization: "Computer Science and Engineering",
      institute: "KL University",
      location: "Guntur, Andhra Pradesh",
      period: "2022 — 2026",
      gpa: "CGPA: 9.35 / 10",

      points: [
        "Specialized in Cybersecurity & Blockchain Technology.",
        "Built projects using MERN Stack, Django, and secure system design.",
        "Explored cybersecurity practices, authentication systems, and cloud computing.",
        "Participated in internships, hackathons, and cybersecurity workshops.",
      ],
    },


  ];

  return (

    <section
      id="education"
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
          Education
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
          Academic Background
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
          My academic journey so far
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

        {/* EDUCATION ITEMS */}
        <div className="space-y-14">

          {educationData.map((edu, index) => (

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

              {/* CARD */}
              <Link
  to="/education"
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
                <div className="flex justify-between items-start gap-6 mb-5">

                  <div>

                    <div className="flex items-center gap-3 mb-2">

                      <GraduationCap
                        className="text-cyan-400"
                        size={20}
                      />

                      <h3 className="text-xl font-semibold text-gray-100">
                        {edu.degree}
                      </h3>

                    </div>

                    <h4 className="text-lg font-medium text-cyan-400 mb-1">
                      {edu.specialization}
                    </h4>

                    <p className="text-gray-300 text-base mb-2">
                      {edu.institute}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">

                      <div className="flex items-center gap-1">

                        <MapPin size={14} />

                        {edu.location}

                      </div>

                      {edu.gpa && (
                        <span>
                          {edu.gpa}
                        </span>
                      )}

                    </div>

                  </div>

                  <p className="text-sm text-gray-500 whitespace-nowrap">
                    {edu.period}
                  </p>

                </div>

                {/* POINTS */}
                <ul className="space-y-4">

                  {edu.points.map((point, pointIndex) => (

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

              </Link>

            </motion.div>

          ))}

        </div>

</div>


</section>
  );
}