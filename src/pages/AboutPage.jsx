import Footer from "../components/Footer";

export default function AboutPage() {

  return (

    <div className="text-white min-h-screen px-6 pt-28 pb-0">

      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-14">

          

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h1>

          <p className="text-gray-400 text-sm md:text-base">
            More about my journey and skills
          </p>

        </div>

        {/* ABOUT CARD */}
        <div className="bg-[#0B1220]/80 border border-white/10 rounded-3xl p-8 md:p-12 mb-10">

          {/* INTRO */}
          <p className="text-gray-300 leading-8 text-sm md:text-base mb-10">

            I’m a Computer Science Engineering graduate specialized in
            Cybersecurity and Blockchain Technology, focused on building
            secure, scalable, and user-centric digital solutions. With
            hands-on experience in MERN Stack development, Django,
            REST APIs, and database-driven applications, I enjoy
            transforming ideas into practical and impactful systems.

          </p>

          {/* POINTS SECTION */}
          <div className="space-y-8 mb-10">

            {/* POINT 1 */}
            <div className="flex gap-4">

              <span className="text-cyan-400 mt-1 text-lg">
                ◆
              </span>

              <div>

                <h3 className="text-white font-semibold text-base mb-2">
                  Full-Stack Development
                </h3>

                <p className="text-gray-400 leading-8 text-sm md:text-base">

                  Built and deployed scalable web applications including an
                  Online Blogging System, Hospital Management System, and
                  Mental Health Support Platform with a strong focus on
                  responsive UI, backend architecture, authentication
                  systems, and database-driven workflows.

                </p>

              </div>

            </div>

            {/* POINT 2 */}
            <div className="flex gap-4">

              <span className="text-cyan-400 mt-1 text-lg">
                ◆
              </span>

              <div>

                <h3 className="text-white font-semibold text-base mb-2">
                  Secure & Scalable Systems
                </h3>

                <p className="text-gray-400 leading-8 text-sm md:text-base">

                  Experienced in developing secure authentication flows,
                  REST-based applications, and modular backend systems
                  designed for performance, maintainability, and reliable
                  real-world usage across modern web platforms.

                </p>

              </div>

            </div>

            {/* POINT 3 */}
            <div className="flex gap-4">

              <span className="text-cyan-400 mt-1 text-lg">
                ◆
              </span>

              <div>

                <h3 className="text-white font-semibold text-base mb-2">
                  Internship & Industry Exposure
                </h3>

                <p className="text-gray-400 leading-8 text-sm md:text-base">

                  Gained practical development experience through internships
                  and technical programs at Vehinova and Indian Space Research
                  Organisation, working on collaborative projects,
                  real-world workflows, and emerging technologies.

                </p>

              </div>

            </div>

            {/* POINT 4 */}
            <div className="flex gap-4">

              <span className="text-cyan-400 mt-1 text-lg">
                ◆
              </span>

              <div>

                <h3 className="text-white font-semibold text-base mb-2">
                  Cybersecurity & Emerging Technologies
                </h3>

                <p className="text-gray-400 leading-8 text-sm md:text-base">

                  Passionate about cybersecurity, ethical hacking,
                  networking, and cloud technologies with continuous
                  exploration of secure software design, system reliability,
                  and modern development practices.

                </p>

              </div>

            </div>

            {/* POINT 5 */}
            <div className="flex gap-4">

              <span className="text-cyan-400 mt-1 text-lg">
                ◆
              </span>

              <div>

                <h3 className="text-white font-semibold text-base mb-2">
                  Problem Solving & Innovation
                </h3>

                <p className="text-gray-400 leading-8 text-sm md:text-base">

                  Focused on building impactful systems that combine usability,
                  efficiency, and meaningful user experiences while continuously
                  improving analytical thinking, technical research, and
                  software engineering skills.

                </p>

              </div>

            </div>

          </div>

          {/* QUOTE */}
          <div className="border-l-4 border-cyan-400 pl-5">

            <p className="italic text-white text-base leading-7 font-medium">

              "I aim to build secure, scalable, and impactful digital systems
              that combine modern development practices with cybersecurity
              principles to solve real-world problems and create reliable
              user experiences."

            </p>

          </div>

        </div>

        {/* VALUES CARD */}
        <div className="bg-[#0B1220]/80 border border-white/10 rounded-3xl p-6 md:p-8">

          <h2 className="text-xl font-bold mb-6">
            What I Value
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {/* CARD 1 */}
            <div className="bg-[#131c31] rounded-2xl p-5">

              <h3 className="text-base font-semibold mb-2">
                Continuous Learning
              </h3>

              <p className="text-gray-400 text-sm leading-6">
                Exploring new technologies every day.
              </p>

            </div>

            {/* CARD 2 */}
            <div className="bg-[#131c31] rounded-2xl p-5">

              <h3 className="text-base font-semibold mb-2">
                Secure Development
              </h3>

              <p className="text-gray-400 text-sm leading-6">
                Building scalable and secure applications.
              </p>

            </div>

            {/* CARD 3 */}
            <div className="bg-[#131c31] rounded-2xl p-5">

              <h3 className="text-base font-semibold mb-2">
                Problem Solving
              </h3>

              <p className="text-gray-400 text-sm leading-6">
                Solving real-world challenges through technology.
              </p>

            </div>

            {/* CARD 4 */}
            <div className="bg-[#131c31] rounded-2xl p-5">

              <h3 className="text-base font-semibold mb-2">
                Innovation
              </h3>

              <p className="text-gray-400 text-sm leading-6">
                Combining creativity with cybersecurity and development.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* FOOTER */}
      <div className="mt-12">

        <Footer />

      </div>

    </div>

  );

}