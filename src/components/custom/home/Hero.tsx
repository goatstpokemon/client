import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative mx-auto flex flex-col gap-4 max-sm:mb-[10rem] sm:mb-[30rem] md:mb-[8rem] xl:mb-0 xl:py-12">
      <motion.div
        initial={{ scaleY: 1, opacity: 1, backgroundColor: "white" }}
        animate={{ scaleY: 0, opacity: 1, backgroundColor: "white" }}
        exit={{ scaleY: 0, opacity: 0, backgroundColor: "none" }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-0 h-[50vh] w-full origin-top"
      />
      <h1 className="text-nowrap text-4xl font-bold text-syntax">
        Wij zijn Syntax
      </h1>
      <sub className="mb-7 text-2xl font-medium">
        De informatica studievereniging van hogeschool Leiden{" "}
      </sub>
      <section className="relative flex h-fit flex-col gap-y-10 md:gap-x-10 lg:flex-row lg:gap-y-0">
        <motion.div
          initial={{ scaleY: 1, opacity: 1, backgroundColor: "white" }}
          animate={{ scaleY: 0, opacity: 1, backgroundColor: "white" }}
          exit={{ scaleY: 0, opacity: 0, backgroundColor: "none" }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-0 h-[50vh] w-full origin-top"
        />
        <section className="lg:h-auto">
          <img
            src="src/assets/bungalan.webp"
            alt="foto van de vereniging"
            className="h-full rounded-xl bg-center object-cover"
          />
        </section>
        <section className="relative flex flex-col justify-between gap-10 max-sm:gap-10 md:flex-row lg:flex-col xl:w-[25rem]">
          <motion.div
            initial={{ scaleY: 1, opacity: 1, backgroundColor: "white" }}
            animate={{ scaleY: 0, opacity: 1, backgroundColor: "white" }}
            exit={{ scaleY: 0, opacity: 0, backgroundColor: "none" }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-0 h-[50vh] w-full origin-top"
          />
          <section className="flex h-[25rem] w-full flex-col justify-evenly rounded-xl bg-gray-900 lg:h-[20rem]">
            <p className="p-4 text-2xl font-medium text-slate-50 lg:text-xl">
              Studeren is meer dan colleges en tentamens. Studenten horen elkaar
              helpen, meer samenwerken, zo bereik je meer en heb je er een leven
              lang plezier van.
            </p>
            <p className="p-4 text-xl font-normal text-slate-50 lg:text-lg xl:text-xl">
              S.V Syntax
            </p>
          </section>
          <motion.div
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="align-center z-10 flex flex-row items-center justify-center gap-14 rounded-xl bg-syntax px-2 max-sm:justify-around max-sm:py-5 sm:h-16 md:h-[25rem] md:w-[40vw] md:flex-col-reverse lg:h-14 lg:w-full lg:flex-row 2xl:h-14"
          >
            <h2 className="text-nowrap text-xl text-white">Wordt hier lid</h2>
            <motion.div
              animate={{ rotate: isHovered ? 10 : 0 }}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white align-middle"
            >
              <ArrowUpRight />
            </motion.div>
          </motion.div>
        </section>
      </section>
    </div>
  );
};
export default Hero;
