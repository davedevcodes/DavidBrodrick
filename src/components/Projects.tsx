import { motion } from "framer-motion";
import site1 from "../assets/site1.png";
import site2 from "../assets/site2.png";
import site3 from "../assets/site3.png";

const projects = [
  {
    title: "ChainMarket",
    category: "Web3 / UI",
    image: site1,
    link: "https://chain-market.vercel.app/",
  },
  {
    title: "EverTidy",
    category: "SaaS Website",
    image: site2,
    link: "https://ever-tidy-laundry-service.vercel.app/",
  },
  {
    title: "SwiftCart",
    category: "Ecommerce",
    image: site3,
    link: "https://swiftcart-1-3g8n.onrender.com/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium mb-12 md:mb-20 text-center md:text-left">
          Recent Projects
        </h3>

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center cursor-pointer"
            >
              {/* Text */}
              <a href={project.link} className="order-2 md:order-1 text-center md:text-left">
                <p className="text-white/50 mb-2 text-sm md:text-base">{project.category}</p>
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold group-hover:text-orange-500 transition">
                  {project.title}
                </h4>
              </a>

              {/* Image */}
              <a href={project.link} className="overflow-hidden rounded-xl order-1 md:order-2">
                <img
                  src={project.image}
                  className="w-full h-64 md:h-[300px] lg:h-[350px] object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={project.title}
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
