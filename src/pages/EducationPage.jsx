import Footer from "../components/Footer";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function EducationPage() {

  const educationData = [

    {
  degree: "B.Tech CSE",
  specialization: "Cybersecurity & Blockchain Technology",
  institute: "KL University",
  location: "Andhra Pradesh, India",
  cgpa: "9.35 / 10",
  year: "2022 — 2026",

  points: [
    "Focused on cybersecurity, blockchain, full-stack development, and cloud technologies.",
    "Worked on projects involving MERN Stack, Django, REST APIs, and database management.",
    "Explored networking, ethical hacking, and secure application development.",
    "Participated in internships, technical training programs, and project-based learning."
  ]
},

  ];

  return (

    <div className="text-white min-h-screen px-6 pt-28 pb-0">

      {/* TITLE */}
      <div className="text-center mb-14">

        

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Academic Background
        </h1>

        <p className="text-gray-400 text-sm md:text-sm md:text-base">
          My academic journey so far
        </p>

      </div>

      {/* TIMELINE */}
      <div className="max-w-5xl mx-auto px-4 relative">

        {/* VERTICAL LINE */}
        <div className="absolute left-[14px] top-0 bottom-0 w-[1px] bg-white/10" />

        <div className="space-y-10">

          {educationData.map((item, index) => (

            <div
              key={index}
              className="relative pl-10"
            >

              {/* DOT */}
              <div className="absolute left-0 top-5 w-3 h-3 rounded-full bg-cyan-400" />

              {/* CARD */}
              <div
  className="
    bg-[#0B1220]/80
    border border-white/10
    rounded-2xl
    p-5

    hover:border-cyan-400/40
    hover:-translate-y-1

    transition-all duration-300
  "
>

                {/* TOP */}
                <div className="flex items-start justify-between mb-5">

                  <div>

                    <h2 className="text-xl md:text-2xl font-bold mb-1">
                      {item.degree}
                    </h2>

                    <h3 className="text-cyan-400 text-xl md:text-xl mt-1">
                      {item.specialization}
                    </h3>

                    <p className="text-gray-300 text-sm font-medium mt-1">
                      {item.institute}
                    </p>

                    <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">

                        <MapPin size={12} className="text-gray-500" />

                        <span>{item.location}</span>

                        <span>CGPA: {item.cgpa}</span>

                    </div>

                  </div>

                  <p className="text-gray-400 text-sm whitespace-nowrap">
                    {item.year}
                  </p>

                </div>

                {/* POINTS */}
                <ul className="space-y-3">

                  {item.points.map((point, i) => (

                    <li
                      key={i}
                      className="flex gap-3 text-gray-300 text-base leading-8"
                    >

                      <span className="w-2 h-2 rounded-full bg-cyan-400 mt-3" />

                      <span>{point}</span>

                    </li>

                  ))}

                </ul>

              </div>

            </div>

          ))}

        </div>

      </div>
<div className="max-w-5xl mx-auto mt-20 text-center">

  <h2 className="text-2xl font-bold mb-4">
    Certifications & Achievements
  </h2>

  <p className="text-gray-400 mb-8">
    Explore certifications, badges, technical achievements, and learning milestones.
  </p>

  <Link
    to="/certifications"
    className="
      inline-flex items-center gap-3

      bg-cyan-400
      hover:bg-cyan-300

      text-black
      font-semibold

      px-7 py-3
      rounded-2xl

      transition-all duration-300
      hover:scale-105
    "
  >

    View Certifications →

  </Link>

</div>
      {/* FOOTER */}
      <div className="mt-24">

        <Footer />

      </div>

    </div>

  );
}