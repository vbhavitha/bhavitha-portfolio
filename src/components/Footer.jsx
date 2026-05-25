import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {

  return (

    <footer className="text-white border-t border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* TOP SECTION */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
          "
        >

          {/* LEFT SIDE */}
          <div className="text-center md:text-left">

            <h2 className="text-xl font-bold text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.45)] mb-2">
              Bhavitha
            </h2>

            <p className="text-sm text-gray-200">
              Cybersecurity & MERN Developer
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-6">

            {/* GITHUB */}
            <a
              href="https://github.com/vbhavitha"
              target="_blank"
              rel="noopener noreferrer"

              className="
                flex items-center gap-2
                text-sm text-gray-200
hover:text-cyan-300
drop-shadow-[0_0_8px_rgba(34,211,238,0.35)]
                transition-all duration-300
              "
            >

              <FaGithub size={18} />


            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/vakkalagadda-bhavitha/"
              target="_blank"
              rel="noopener noreferrer"

              className="
                flex items-center gap-2
                text-sm text-gray-200
hover:text-cyan-300
drop-shadow-[0_0_8px_rgba(34,211,238,0.35)]
                transition-all duration-300
              "
            >

              <FaLinkedin size={18} />


            </a>

            {/* EMAIL */}
            <a
              href="mailto:bhavitha.vakkalagadda@gmail.com"

              className="
                flex items-center gap-2
                text-sm text-gray-200
hover:text-cyan-300
drop-shadow-[0_0_8px_rgba(34,211,238,0.35)]
                transition-all duration-300
              "
            >

              <FaEnvelope size={18} />


            </a>

          </div>

        </div>

        {/* THIN LINE */}
        <div className="border-t border-white/10 mt-8 pt-6">

          {/* COPYRIGHT */}
          <p className="text-center text-gray-300 text-xs">

            © 2026 Bhavitha.
            Exploring the digital realm, one line of code at a time.

          </p>

        </div>

      </div>

    </footer>

  );
}