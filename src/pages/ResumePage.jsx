import Footer from "../components/Footer";
import { FileText, Download, Calendar } from "lucide-react";

export default function ResumePage() {

  const resumeTags = [
    "Summary",
    "Experience",
    "Education",
    "Skills",
    "Projects",
    "Certifications",
  ];

  return (

    <div className="bg-[#050816] text-white min-h-screen pt-28">

      {/* TITLE */}
      <div className="text-center mb-16">

        <p className="text-cyan-400 uppercase tracking-[4px] font-semibold mb-3">
          Resume
        </p>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Technical Portfolio
        </h1>

        <p className="text-gray-400 text-sm md:text-sm md:text-base">
          Download or preview my latest resume
        </p>

      </div>

      {/* RESUME CARD */}
      <div className="max-w-2xl mx-auto px-6">

        <div className="bg-[#0B1220]/80 border border-white/10 rounded-3xl p-7 text-center">

          {/* ICON */}
          <div className="w-16 h-16 mx-auto rounded-3xl bg-cyan-500/10 flex items-center justify-center mb-8">

            <FileText
              size={38}
              className="text-cyan-400"
            />

          </div>

          {/* TITLE */}
          <h2 className="text-2xl font-bold mb-3">
            Bhavitha — Resume
          </h2>

          {/* DATE */}
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">

            <Calendar size={18} />

            <p className="text-sm">
              Last updated: May 2026
            </p>

          </div>

          {/* TAGS */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">

            {resumeTags.map((tag, index) => (

              <span
                key={index}
                className="px-3 py-1.5 rounded-full bg-white/10 text-xs text-gray-300"
              >

                {tag}

              </span>

            ))}

          </div>

          {/* BUTTONS */}
<div className="flex flex-wrap justify-center gap-4">

  {/* PREVIEW BUTTON */}
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center gap-3
      border border-cyan-400/40
      text-cyan-400
      hover:bg-cyan-400/10
      font-semibold
      px-6 py-3
      rounded-2xl
      transition-all duration-300
      hover:scale-105
      text-sm
    "
  >

    <FileText size={20} />

    Preview Resume

  </a>

  {/* DOWNLOAD BUTTON */}
  <a
    href="/resume.pdf"
    download
    className="
      inline-flex items-center gap-3
      bg-cyan-400
      hover:bg-cyan-300
      text-black
      font-semibold
      px-6 py-3
      rounded-2xl
      transition-all duration-300
      hover:scale-105
      text-sm
    "
  >

    <Download size={20} />

    Download Resume

  </a>

</div>
        </div>

      </div>

      {/* FOOTER */}
      <div className="mt-24">

        <Footer />

      </div>

    </div>
  );
}