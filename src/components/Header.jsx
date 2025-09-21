import { FiSearch } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const nav = ["Home", "Services", "Projects", "Pages", "Blog", "Contact Us"];

export default function Header() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });



  // Variants
  const pillVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
    },
  };

  return (
    <section
      ref={ref}
      className="relative h-screen w-full bg-cover bg-center text-white before:absolute before:inset-0 before:bg-black/60 before:content-['']"
      style={{
        backgroundImage:
          "url('https://usmansheikhinternational.com/wp-content/uploads/Usman-Sheikh-Hero-Section-Image-scaled.jpg')",
      }}
    >
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        {/* nav bar as-is */}
        <nav className="flex items-center justify-between py-6">
          <h1 className="text-3xl font-bold tracking-wide">
            <img src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/logo.svg" />
          </h1>

          <ul className="hidden items-center space-x-5 text-sm font-medium lg:flex custom-font">
            {nav.map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="flex items-left gap-1 transition-colors hover:text-gray-300"
                >
                  {l}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-6 text-sm lg:flex">
            <button className="rounded-full bg-[#cfa75e] px-7 py-3.5 font-bold text-white hover:bg-amber-600">
              Get A Quote!
            </button>
            <button className="glass-btn">
              <FiSearch className="text-white" size={24} />
            </button>
            <button className="glass-btn">
              <BsThreeDotsVertical className="text-white" size={20} />
            </button>
          </div>
          <button className="lg:hidden"></button>
        </nav>

        {/* hero content with motion */}
        <div className="flex-1 flex flex-col justify-center">
          {/* pill */}
          <motion.span
            variants={pillVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="self-start inline-flex items-center gap-2 rounded-full border border-white/40 px-3 py-1 text-xs font-bold text-white"
          >
            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
            FAST AND RELIABLE
          </motion.span>

          {/* heading */}
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-4 w-full text-left text-7xl font-bold leading-tight md:text-7xl lg:text-8xl"
          >
            The Art of Stunning <br /> Interior Design
          </motion.h2>

          {/* paragraph */}
          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="px-30 mt-7 max-w-3xl text-gray-200 text-xl"
          >
            Whether it's your home, office, or a commercial <br /> project, we
            are always dedicated to bringing <br /> your vision to life.
          </motion.p>
        </div>
      </div>
      
    </section>
  );
}
