import { motion } from "framer-motion";
import { FaXTwitter, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-0 items-center">
          {/* LEFT */}
          <div className="text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold"
            >
              DavidBrodrick
            </motion.h2>

            <p className="text-white/60 mt-4 max-w-sm mx-auto md:mx-0">
              Front-end developer, UI/UX designer, content writer — learning and
              building in the blockchain world.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex gap-6 mt-6 md:mt-0">
            {[
              {
                icon: <FaXTwitter size={20} />,
                href: "https://x.com/BuildsInWeb3",
                label: "X",
              },
              {
                icon: <FaLinkedinIn size={20} />,
                href: "https://www.linkedin.com/in/david-brodrick-3186a8312/",
                label: "LinkedIn",
              },
              {
                icon: <FaGithub size={20} />,
                href: "https://github.com/davedevcodes",
                label: "GitHub",
              },
              {
                icon: <FaWhatsapp size={20} />,
                href: "https://wa.me/2347046116677",
                label: "WhatsApp",
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:border-orange-500 text-white/70 hover:text-orange-500 transition"
                aria-label={item.label}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-center md:justify-between text-sm text-white/40 gap-2 md:gap-0">
          <p>© {new Date().getFullYear()} DavidBrodrick. All rights reserved.</p>
          <p>Built with React, Tailwind & Motion</p>
        </div>
      </div>
    </footer>
  );
}
