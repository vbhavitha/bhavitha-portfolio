import Footer from "../components/Footer";

import {
  FileText,
  Download,
  Eye,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  User,
  ShieldCheck,
  FolderKanban,
} from "lucide-react";

export default function ResumePage() {

  const resumeItems = [
    {
      icon: <User size={20} />,
      title: "Professional Summary",
      desc: "Summary of my background and career goals",
    },
    {
      icon: <Briefcase size={20} />,
      title: "Work Experience",
      desc: "Internships and professional experience",
    },
    {
      icon: <GraduationCap size={20} />,
      title: "Education",
      desc: "Academic qualifications and learning",
    },
    {
      icon: <Code2 size={20} />,
      title: "Skills",
      desc: "Technologies and tools I work with",
    },
    {
      icon: <Award size={20} />,
      title: "Certifications",
      desc: "Courses, badges, and achievements",
    },
  ];
  const stats = [
  {
    icon: <Briefcase size={22} />,
    value: "2+",
    label: "Internships",
  },
  {
    icon: <FolderKanban size={22} />,
    value: "10+",
    label: "Projects",
  },
  {
    icon: <Code2 size={22} />,
    value: "MERN +",
    label: "Django",
  },
  {
    icon: <ShieldCheck size={22} />,
    value: "Cyber",
    label: "Security",
  },
];

  return (

    <div className="text-white min-h-screen px-6 pt-28 pb-0">

      {/* MAIN CONTAINER */}
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-16
          items-center
        "
      >

        {/* LEFT SIDE */}
        <div>

          {/* BADGE */}
          

          {/* HEADING */}
          <h1
            className="
              text-5xl
              md:text-6xl
              font-bold
              leading-tight
              mb-6
            "
          >

            My Professional

            <span className="block text-cyan-400">
              Resume
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              text-gray-300
              text-lg
              leading-8
              max-w-xl
              mb-12
            "
          >

            Explore my professional journey, technical skills,
            internships, certifications, and projects.
            Preview or download my latest resume.

          </p>

          {/* WHAT'S INSIDE */}
          <div>

            <h2 className="text-2xl font-semibold mb-8">
              What’s Inside
            </h2>

            <div className="space-y-6">

              {resumeItems.map((item, index) => (

                <div
                  key={index}

                  className="
                    flex
                    items-start
                    gap-4
                  "
                >

                  {/* ICON */}
                  <div
                    className="
                      w-12 h-12
                      rounded-2xl

                      bg-cyan-500/10
                      border border-cyan-400/20

                      flex
                      items-center
                      justify-center

                      text-cyan-300
                      shrink-0
                    "
                  >

                    {item.icon}

                  </div>

                  {/* TEXT */}
                  <div>

                    <h3 className="font-semibold text-lg text-white mb-1">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      {item.desc}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div>

          <div
            className="
              relative
              rounded-[32px]

              border border-white/10

              bg-[#0B1220]/70
              backdrop-blur-xl

              overflow-hidden

              p-8

              shadow-[0_0_60px_rgba(34,211,238,0.08)]
            "
          >

            {/* GLOW */}
            <div
              className="
                absolute
                inset-0

                bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_55%)]

                pointer-events-none
              "
            />

            {/* HEADER */}
            <div className="flex items-center justify-between mb-6">

              <h2 className="text-2xl font-semibold">
                Resume Preview
              </h2>

              <div className="flex items-center gap-2 text-green-400 text-sm">

                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />

                Up to date

              </div>

            </div>

            {/* PREVIEW CARD */}
            <div
              className="
                relative
                rounded-3xl
                overflow-hidden

                border border-white/10

                bg-gradient-to-br
                from-[#111827]
                to-[#0F172A]

                p-10
                min-h-[540px]

                flex
                flex-col
                justify-center
                items-center
                text-center
              "
            >

              {/* ICON */}
              <div
                className="
                  w-24 h-24
                  rounded-3xl

                  bg-cyan-500/10
                  border border-cyan-400/20

                  flex
                  items-center
                  justify-center

                  mb-8
                "
              >

                <FileText
                  size={52}
                  className="text-cyan-400"
                />

              </div>

              {/* TITLE */}
              <h3 className="text-3xl font-bold mb-4">
                Bhavitha Resume
              </h3>

              {/* TEXT */}
              <p
                className="
                  text-gray-400
                  max-w-md
                  leading-7
                  mb-10
                "
              >

                View my latest resume containing internships,
                projects, technical skills, certifications,
                and professional experience.

              </p>

{/* MINI STATS */}
<div
  className="
    grid
    grid-cols-2
    gap-3
    w-full
    max-w-sm
    mb-10
  "
>

  {stats.map((item, index) => (

    <div
      key={index}

      className="
        rounded-2xl
        border border-white/10

        bg-white/[0.03]
        backdrop-blur-md

        px-4 py-3

        flex
        items-center
        gap-3

        hover:border-cyan-400/30

        transition-all
        duration-300
      "
    >

      {/* ICON */}
      <div
        className="
          w-10 h-10
          rounded-xl

          bg-cyan-500/10
          border border-cyan-400/20

          flex
          items-center
          justify-center

          text-cyan-300
          shrink-0
        "
      >

        {item.icon}

      </div>

      {/* TEXT */}
      <div className="text-left">

        <h4 className="text-sm font-semibold text-white leading-none">
          {item.value}
        </h4>

        <p className="text-xs text-gray-400 mt-1">
          {item.label}
        </p>

      </div>

    </div>

  ))}

</div>

              {/* BUTTONS */}
<div className="flex flex-row gap-3 items-center justify-center flex-wrap">

  {/* PREVIEW BUTTON */}
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"

    className="
      relative
      inline-flex
      items-center
      justify-center
      gap-3

      overflow-hidden

      bg-gradient-to-r
      from-cyan-400
      via-blue-500
      to-purple-500

      hover:scale-[1.03]

      px-6 py-3
      rounded-2xl

      text-white
      font-semibold
      text-sm

      transition-all
      duration-300

      shadow-[0_0_40px_rgba(59,130,246,0.45)]
    "
  >

    <Eye size={18} className="relative z-10" />

    <span className="relative z-10">
      Open Preview
    </span>

  </a>

  {/* DOWNLOAD BUTTON */}
  <a
    href="/resume.pdf"
    download

    className="
      inline-flex
      items-center
      justify-center
      gap-3

      border border-white/15
      bg-white/[0.04]

      hover:bg-white/[0.08]
      hover:border-cyan-400/30
      hover:scale-[1.02]

      px-6 py-3
      rounded-2xl

      text-white
      font-medium
      text-sm

      transition-all
      duration-300

      backdrop-blur-md
    "
  >

    <Download size={18} />

    Download Resume

  </a>

</div>

            </div>

          </div>

        </div>

      </div>

      {/* FOOTER */}
      <div className="mt-28">

        <Footer />

      </div>

    </div>
  );
}