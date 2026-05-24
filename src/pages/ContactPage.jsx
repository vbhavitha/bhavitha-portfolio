import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BadgeCheck } from "lucide-react";
import Footer from "../components/Footer";

export default function ContactPage() {

  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {

    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_glw4awk",
        "template_9iynsd5",
        form.current,
        "uCxIlvKDNiuzyjAnd"
      )

      .then(

        () => {

          alert("Message sent successfully!");

          form.current.reset();

          setLoading(false);

        },

        (error) => {

          console.log(error.text);

          alert("Failed to send message.");

          setLoading(false);

        }

      );

  };

  return (

    <div className="text-white min-h-screen px-6 pt-28 pb-0">

      {/* HEADING */}
      <div className="text-center mb-16">

        

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Get in Touch
        </h1>

        <p className="text-gray-400 text-sm md:text-base">
          Want to contact or collaborate? Ping me up.
        </p>

      </div>

      {/* CONTACT SECTION */}
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6">

        {/* LEFT SIDE */}
<div className="
  bg-[#0B1220]/55

  border border-cyan-500/15

  rounded-[30px]

  p-8

  h-fit

  backdrop-blur-xl

  shadow-[0_0_40px_rgba(34,211,238,0.06)]

  relative
  overflow-hidden
">

  {/* GLOW */}
  <div
    className="
      absolute
      inset-0

      bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_40%)]

      pointer-events-none
    "
  />



          <h2
  className="
    text-3xl
    font-bold
    mb-8
    relative
    z-10
  "
>
            Connect
          </h2>

          <div className="space-y-6">

            {/* EMAIL */}
            <a
              href="mailto:bhavitha.vakkalagadda@gmail.com"
              className="
  flex items-center gap-4

  text-gray-300

  hover:text-cyan-400

  transition-all duration-300

  border border-cyan-500/10

  hover:border-cyan-400/20

  bg-cyan-500/[0.03]

  rounded-2xl

  px-5 py-4

  hover:bg-cyan-500/[0.05]

  relative
  z-10
"
            >

              <span className="text-lg">✉</span>

              <span>
                bhavitha.vakkalagadda@gmail.com
              </span>

            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/vbhavitha"
              target="_blank"
              rel="noopener noreferrer"
              className="
  flex items-center gap-4

  text-gray-300

  hover:text-cyan-400

  transition-all duration-300

  border border-cyan-500/10

  hover:border-cyan-400/20

  bg-cyan-500/[0.03]

  rounded-2xl

  px-5 py-4

  hover:bg-cyan-500/[0.05]

  relative
  z-10
"
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.699-2.782.605-3.369-1.344-3.369-1.344-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.523 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>

              <span>
                github.com/vbhavitha
              </span>

            </a>

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com/in/vakkalagadda-bhavitha"
              target="_blank"
              rel="noopener noreferrer"
              className="
  flex items-center gap-4

  text-gray-300

  hover:text-cyan-400

  transition-all duration-300

  border border-cyan-500/10

  hover:border-cyan-400/20

  bg-cyan-500/[0.03]

  rounded-2xl

  px-5 py-4

  hover:bg-cyan-500/[0.05]

  relative
  z-10
"
            >

              <span className="text-lg">in</span>

              <span>
                linkedin.com/in/vakkalagadda-bhavitha
              </span>

            </a>

{/* CREDLY */}
<a
  href="https://www.credly.com/users/v-bhavitha"
  target="_blank"
  rel="noopener noreferrer"
  className="
    flex items-center gap-4

    text-gray-300

    hover:text-cyan-400

    transition-all duration-300

    border border-cyan-500/10

    hover:border-cyan-400/20

    bg-cyan-500/[0.03]

    rounded-2xl

    px-5 py-4

    hover:bg-cyan-500/[0.05]

    relative
    z-10
  "
>

  <BadgeCheck className="w-5 h-5" />

  <span>
    credly.com/users/v-bhavitha
  </span>

</a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="
  bg-[#0B1220]/55

  border border-cyan-500/15

  rounded-[32px]

  p-8 md:p-10

  backdrop-blur-xl

  shadow-[0_0_40px_rgba(34,211,238,0.06)]

  relative
  overflow-hidden
">
  {/* FORM GLOW */}
<div
  className="
    absolute
    inset-0

    bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.10),transparent_40%)]

    pointer-events-none
  "
/>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >

            {/* NAME + EMAIL */}
            <div className="grid md:grid-cols-2 gap-5">

              {/* NAME */}
              <div>

                <label className="block mb-2 text-sm font-medium">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required

                  className="
                    w-full
                    bg-[#131C30]/80

border border-cyan-500/10

focus:border-cyan-400/30

rounded-2xl

transition-all duration-300 px-4 py-3 text-sm
                    outline-none
                    text-white
                  "
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className="block mb-2 text-sm font-medium">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required

                  className="
                    w-full
                    bg-[#131C30]/80

border border-cyan-500/10

focus:border-cyan-400/30

rounded-2xl

transition-all duration-300 px-4 py-3 text-sm
                    outline-none
                    text-white
                  "
                />

              </div>

            </div>

            {/* SUBJECT */}
            <div>

              <label className="block mb-2 text-sm font-medium">
                Subject
              </label>

              <input
                type="text"
                name="title"
                placeholder="What's this about?"
                required

                className="
                  w-full
                  bg-[#131C30]/80

border border-cyan-500/10

focus:border-cyan-400/30

rounded-2xl

transition-all duration-300 px-4 py-3 text-sm
                  outline-none
                  text-white
                "
              />

            </div>

            {/* MESSAGE */}
            <div>

              <label className="block mb-2 text-sm font-medium">
                Message
              </label>

              <textarea
                rows="6"
                name="message"
                placeholder="Have a project or idea? Let’s connect and bring it to life together."
                required

                className="
                  w-full
                  bg-[#131C30]/80

border border-cyan-500/10

focus:border-cyan-400/30

rounded-2xl

transition-all duration-300 px-4 py-3 text-sm
                  outline-none
                  resize-none
                  text-white
                "
              />

            </div>

            {/* BUTTON */}
            <button
              type="submit"

              disabled={loading}

              className="
  inline-flex items-center justify-center gap-3

  bg-cyan-400
  hover:bg-cyan-300

  text-black
  text-sm
  font-semibold

  px-7 py-3

  rounded-2xl

  transition-all duration-300

  hover:scale-105

  shadow-[0_0_25px_rgba(34,211,238,0.25)]
"
            >

              {loading ? "Sending..." : "Send Message"}

            </button>

          </form>

        </div>

      </div>

      {/* FOOTER */}
      <div className="mt-24">

        <Footer />

      </div>

    </div>

  );

}