import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Profile from "../assets/profile.png";

export default function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Gradient */}
      <div className="absolute rounded-b-3xl inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-red-600" />
      <div className="absolute rounded-t-3xl bg-gradient-to-br from-black/5 to-black/50 min-w-screen min-h-screen h-full w-full top-0 left-0 right-0 bottom-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">
        {/* NAV */}
        <Navbar />
        

        {/* HERO GRID */}
        <div className="flex flex-col text-center md:text-left md:flex-row items-center mt-40 sm:mt-28 md:mt-20 lg:mt-12">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white/80 text-2xl font-semibold">Hey, I’m a</p>

            <h2 className="text-5xl flex md:text-7xl lg:text-9xl font-bold leading-tight text-white">
              Frontend <br /> Developer
            </h2>

          </motion.div>

          <div className="max-w-sm h-full md:max-w-md absolute right-auto md:right-0 lg:right-0 md:top-96 top-3/4  z-20 space-y-1 md:space-y-2 lg:space-y-4">
              <span className="text-white text-xl md:text-3xl lg:text-5xl font-medium">Great design should feel invisible.</span>
              <p className="text-white/80 text-md md:text-md lg:text-lg">
                I build interfaces that
                connect and convert.
              </p>
          </div>

            {/* SERVICES */}
            <div className="grid grid-cols-2 md:flex justify-between w-full top-[85vh] absolute z-20">
              {[
                "Web Development",
                "UI / UX Design",
                "Content Writing",
                "Blockchain Learning & Building",
              ].map((item, i) => (
                <div key={i}>
                  <span className="text-orange-400 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 block">
                    # {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-normal text-white/70 text-sm sm:text-md md:text-lg lg:text-xl">{item}</p>
                </div>
              ))}
            </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-[5]"
          >
            <img
              src={Profile}
              className="w-full lg:max-w-xl mx-auto lg:rounded-none rounded-full"
              alt="Portrait of David Brodrick"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
