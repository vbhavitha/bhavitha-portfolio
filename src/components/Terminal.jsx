export default function Terminal() {
  return (
    <section className="py-24 px-6">

      <div className="max-w-4xl mx-auto bg-black rounded-2xl border border-cyan-400 p-6 shadow-lg shadow-cyan-500/20">

        <p className="text-green-400">
          $ whoami
        </p>

        <p className="text-white mb-4">
          Vakkalagadda Bhavitha
        </p>

        <p className="text-green-400">
          $ skills
        </p>

        <p className="text-white mb-4">
          Cybersecurity | Django | MERN | AWS
        </p>

        <p className="text-green-400">
          $ mission
        </p>

        <p className="text-white">
          Building secure digital systems and modern web applications.
        </p>

      </div>

    </section>
  )
}