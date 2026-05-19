import Footer from "../components/Footer";
import { MapPin } from "lucide-react";

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

    <div className="bg-[#050816] text-white min-h-screen pt-28">

      {/* TITLE */}
      <div className="text-center mb-14">

        <p className="text-cyan-400 uppercase tracking-[4px] font-semibold mb-3">
          Education
        </p>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Academic Background
        </h1>

        <p className="text-gray-400 text-sm md:text-sm md:text-base">
          My academic journey so far
        </p>

      </div>

      {/* TIMELINE */}
      <div className="max-w-3xl mx-auto px-3 relative">

        {/* VERTICAL LINE */}
        <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-white/10" />

        <div className="space-y-10">

          {educationData.map((item, index) => (

            <div
              key={index}
              className="relative pl-16"
            >

              {/* DOT */}
              <div className="absolute left-0 top-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-[#050816]" />

              {/* CARD */}
              <div className="bg-[#0B1220]/80 border border-white/10 rounded-xl p-5">

                {/* TOP */}
                <div className="flex items-start justify-between mb-5">

                  <div>

                    <h2 className="text-lg font-bold mb-1">
                      {item.degree}
                    </h2>

                    <h3 className="text-cyan-400 text-sm font-semibold mb-1">
                      {item.specialization}
                    </h3>

                    <p className="text-gray-300 text-xs font-medium">
                      {item.institute}
                    </p>

                    <div className="flex items-center gap-2 text-gray-500 text-[11px] mt-1">

                        <MapPin size={12} className="text-gray-500" />

                        <span>{item.location}</span>

                        <span>CGPA: {item.cgpa}</span>

                    </div>

                  </div>

                  <p className="text-gray-500 text-[11px] whitespace-nowrap">
                    {item.year}
                  </p>

                </div>

                {/* POINTS */}
                <ul className="space-y-3">

                  {item.points.map((point, i) => (

                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-400 text-sm leading-6"
                    >

                      <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />

                      <span>{point}</span>

                    </li>

                  ))}

                </ul>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* FOOTER */}
      <div className="mt-24">

        <Footer />

      </div>

    </div>

  );
}