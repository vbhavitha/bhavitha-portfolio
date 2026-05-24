import Footer from "../components/Footer";
import certificationsData from "../data/certificationsData";

function CertificationSection({ title, data }) {

  return (

    <div className="mb-20">

      {/* SECTION TITLE */}
      <div className="mb-8">

        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          {title}
        </h2>

        <div className="w-16 h-[2px] bg-cyan-400 rounded-full" />

      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {data.map((cert, index) => (

          <div
            key={index}
            className="
              bg-[#0B1220]/80
              border border-white/10
              rounded-2xl
              overflow-hidden

              hover:border-cyan-400/40
              hover:-translate-y-1

              transition-all duration-300
            "
          >

            {/* IMAGE */}
            <div className="h-44 overflow-hidden border-b border-white/10">

              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover"
              />

            </div>

            {/* CONTENT */}
            <div className="p-5">

              {/* TOP */}
              <div className="flex justify-between items-start gap-4 mb-2">

                <h3 className="text-base font-semibold leading-6">
                  {cert.title}
                </h3>

                <span className="text-xs text-gray-500 whitespace-nowrap">
                  {cert.date}
                </span>

              </div>

              {/* ISSUER */}
              <p className="text-cyan-400 text-sm mb-5">
                {cert.issuer}
              </p>

              {/* VERIFY */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-sm
                  text-cyan-400
                  font-semibold

                  hover:text-cyan-300

                  transition
                "
              >

                Verify Credential →

              </a>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default function CertificationsPage() {

  return (

    <div className="text-white min-h-screen px-6 pt-28 pb-0">

      {/* TITLE */}
      <div className="text-center mb-16">

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Certifications & Achievements
        </h1>

        <p className="text-gray-400 text-sm md:text-base">
          Technical certifications, badges, and learning accomplishments
        </p>

      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto">

        <CertificationSection
          title="Global Certifications"
          data={certificationsData.global}
        />

        <CertificationSection
          title="HackerRank Certifications"
          data={certificationsData.hackerrank}
        />
{/*
        <CertificationSection
          title="Salesforce & Trailhead"
          data={certificationsData.salesforce}
        />

        <CertificationSection
          title="Credly Badges"
          data={certificationsData.credly}
        />
    */}
      </div>

      {/* FOOTER */}
      <div className="mt-20">

        <Footer />

      </div>

    </div>

  );

}