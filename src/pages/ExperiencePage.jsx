import { Link } from "react-router-dom";
import experienceData from "../data/experienceData";
import Footer from "../components/Footer";

export default function ExperiencePage() {

  return (

    <div className="text-white min-h-screen px-6 pt-28 pb-0">

      {/* TITLE */}
      <div className="text-center mb-16">

        

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Work Experience
        </h1>

        <p className="text-gray-400 text-sm md:text-base">
          My professional journey so far
        </p>

      </div>

      {/* TIMELINE */}
      <div className="max-w-5xl mx-auto px-4 relative">

        {/* LINE */}
        <div className="absolute left-[14px] top-0 bottom-0 w-[1px] bg-white/10" />

        <div className="space-y-10">

          {experienceData.map((exp, index) => (

            <div
              key={index}
              className="relative pl-10"
            >

              {/* DOT */}
              <div className="absolute left-0 top-5 w-3 h-3 rounded-full bg-cyan-400" />

              {/* CLICKABLE CARD */}
              <Link
                to={`/experience/${exp.id}`}
                className="block"
              >

                <div
                  className="
                    bg-[#0B1220]/80
                    border border-white/10
                    rounded-2xl
                    p-5
                    hover:border-cyan-400
                    hover:-translate-y-1
                    transition-all duration-300
                    cursor-pointer
                  "
                >

                  {/* TOP */}
                  <div className="flex justify-between items-start mb-5">

                    <div>

                      <h2 className="text-xl md:text-2xl font-bold">
                        {exp.role}
                      </h2>

                      <h3 className="text-cyan-400 text-xl md:text-xl mt-1">
                        {exp.company}
                      </h3>

                      <p className="text-gray-500 text-sm mt-1">
                        {exp.location}
                      </p>

                    </div>

                    <p className="text-gray-400 text-sm">
                      {exp.duration}
                    </p>

                  </div>

                  {/* POINTS */}
                  <ul className="space-y-3 mb-5">

                    {exp.shortPoints.map((point, i) => (

                      <li
                        key={i}
                        className="flex gap-3 text-gray-300 text-base leading-8"
                      >

                        <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />

                        <span>{point}</span>

                      </li>

                    ))}

                  </ul>

                  {/* SKILLS */}
                  <div className="flex flex-wrap gap-2 mb-5">

                    {exp.skills.map((skill, i) => (

                      <span
                        key={i}
                        className="
                          bg-white/10
                          px-3 py-1.5
                          rounded-lg
                          text-sm
                          text-gray-300
                        "
                      >

                        {skill}

                      </span>

                    ))}

                  </div>

                  {/* VIEW */}
                  {/* VIEW */}
<div className="border-t border-white/10 pt-4 flex justify-end">

  <p className="text-cyan-400 text-base font-semibold">

    View Role →

  </p>

</div>

                </div>

              </Link>

            </div>

          ))}

        </div>

      </div>

      {/* FOOTER */}
      <div className="mt-12">

        <Footer />

      </div>

    </div>

  );
}