import { motion } from "framer-motion";

export default function About() {
  return (
    <main id="about" className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="pt-28 md:pt-40 pb-16 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-orange-500 font-medium text-xl md:text-2xl mb-4 md:mb-6"
          >
            About Me
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-7xl font-bold leading-snug md:leading-tight max-w-5xl mx-auto md:mx-0"
          >
            Front-end Developer, UI/UX Designer, Content Writer —
            <br />
            learning and building in the Blockchain world.
          </motion.h1>
        </div>
      </section>

      {/* BIO */}
      <section className="pb-16 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-white/70 leading-relaxed text-base md:text-lg">
              I’m a frontend developer and UI/UX designer focused on building
              clean, intuitive digital experiences. I care deeply about how
              things feel — not just how they look.
              <br />
              <br />
              Alongside development, I write content that simplifies complex
              ideas and tells clear product stories. Currently, I’m exploring
              and building within the blockchain space, learning how decentralized
              technologies can reshape user experience and ownership.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-white/70 leading-relaxed text-base md:text-lg">
              My approach blends technical precision with design thinking.
              I enjoy working at the intersection of logic and creativity —
              where interfaces are both functional and expressive.
              <br />
              <br />
              Whether it’s a landing page, dashboard, or Web3 product, I aim
              to build things that feel effortless to use and hard to forget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ROLES */}
      <section className="pb-16 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center md:text-left"
          >
            What I Do
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {[
              "Front-end Development",
              "UI / UX Design",
              "Content Writing",
              "Blockchain Learning & Building",
            ].map((role, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
                className="border border-white/10 rounded-xl p-6 md:p-8 hover:border-orange-500/50 transition"
              >
                <span className="text-orange-500 text-sm md:text-base">
                  #{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold mt-2 md:mt-3">{role}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="pb-20 md:pb-40 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-white/80"
          >
            “Good design disappears. Great design guides.”
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mt-4 md:mt-8 text-white/60 text-base md:text-lg"
          >
            I’m constantly learning, refining, and building — one project at a time.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
