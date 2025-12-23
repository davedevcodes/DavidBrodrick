import { motion } from "framer-motion";
import { FaXTwitter, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa6";

export default function Contact() {
  return (
    <main id="contact" className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-orange-500 font-medium text-xl md:text-2xl mb-4 md:mb-6"
          >
            Contact
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-7xl font-bold leading-snug md:leading-tight max-w-4xl mx-auto md:mx-0"
          >
            Let’s connect and
            <br />
            build something meaningful.
          </motion.h1>
        </div>
      </section>

      {/* LINKS */}
      <section className="pb-20 md:pb-40 px-6">
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
          {[
            {
              label: "X (Twitter)",
              value: "@BuildsInWeb3",
              href: "https://x.com/BuildsInWeb3",
              icon: <FaXTwitter size={24} />,
            },
            {
              label: "LinkedIn",
              value: "Connect professionally",
              href: "https://www.linkedin.com/in/david-brodrick-3186a8312/",
              icon: <FaLinkedinIn size={24} />,
            },
            {
              label: "GitHub",
              value: "View my code",
              href: "https://github.com/davedevcodes",
              icon: <FaGithub size={24} />,
            },
            {
              label: "WhatsApp",
              value: "Chat directly",
              href: "https://wa.me/2347046116677",
              icon: <FaWhatsapp size={24} />,
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between border border-white/10 rounded-2xl px-6 sm:px-8 py-4 sm:py-6 hover:border-orange-500/50 transition"
            >
              <div className="mb-2 sm:mb-0">
                <p className="text-sm md:text-base text-white/50">{item.label}</p>
                <p className="text-xl md:text-2xl font-semibold">{item.value}</p>
              </div>

              <span className="text-2xl md:text-3xl text-white/60 group-hover:text-orange-500 transition">
                {item.icon}
              </span>
            </motion.a>
          ))}
        </div>
      </section>
    </main>
  );
}
