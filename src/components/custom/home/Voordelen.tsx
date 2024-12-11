import { GlassWater, ThumbsUpIcon, Users } from "lucide-react";
import { motion } from "framer-motion";
const Voordelen = () => {
  return (
    <section className="relative h-fit max-sm:flex max-sm:max-w-[90vw] max-sm:flex-col max-sm:items-center sm:w-full">
      {" "}
      <section className="relative flex h-fit w-full items-center justify-center bg-dot-black/[0.2] md:h-[50rem]">
        <div className="pointer-events-none absolute inset-0 -top-12 z-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

        <section className="relative z-10 w-full">
          <h2 className="text-6xl font-bold">Voordelen van Syntax</h2>
          <section className="mt-20 grid grid-cols-1 place-items-center gap-y-24 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative">
              <motion.div
                initial={{ rotate: "-12deg" }}
                whileHover={{ rotate: "5deg" }}
                className="absolute -left-8 -top-8 flex size-20 -rotate-12 items-center justify-center rounded-xl bg-syntax align-middle shadow-md max-sm:size-12"
              >
                <Users size={40} className="text-white max-sm:size-[20px]" />
              </motion.div>
              <div className="size-80 rounded-xl bg-white px-5 py-14 shadow-lg">
                <h1 className="text-2xl font-bold">Onderlinge contacten</h1>
                <p className="mt-4 font-medium">
                  Wij vinden het belangrijk dat studenten uit verschillende
                  jaren en afstudeerrichtingen met elkaar in contact komen. Je
                  bent tenslotte allemaal met dezelfde onderwerpen en vakken
                  bezig en je kunt daarin veel van elkaar leren.
                </p>
              </div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ rotate: "-12deg" }}
                whileHover={{ rotate: "5deg" }}
                className="absolute -left-8 -top-8 flex size-20 -rotate-12 items-center justify-center rounded-xl bg-gray-800 align-middle shadow-md max-sm:size-12"
              >
                <ThumbsUpIcon
                  size={40}
                  className="text-white max-sm:size-[20px]"
                />
              </motion.div>
              <div className="size-80 rounded-xl bg-white px-5 py-14 shadow-lg">
                <h1 className="text-2xl font-bold">Ondersteuning</h1>
                <p className="mt-4 font-medium">
                  Wij willen een meerwaarde bieden aan de studenten Informatica.
                  Dit doen wij door het organiseren van extra (gast)college's
                  voor lastige modules en nieuwe ontwikkelingen binnen de IT.
                </p>
              </div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ rotate: "-12deg" }}
                whileHover={{ rotate: "5deg" }}
                className="absolute -left-8 -top-8 flex size-20 -rotate-12 items-center justify-center rounded-xl bg-syntax align-middle shadow-md max-sm:size-12"
              >
                <GlassWater
                  size={40}
                  className="text-white max-sm:size-[20px]"
                />
              </motion.div>
              <div className="size-80 rounded-xl bg-white px-5 py-14 shadow-lg">
                <h1 className="text-2xl font-bold">Leuke Activiteiten</h1>
                <p className="mt-4 font-medium">
                  Wij vinden dat er naast de studie moet voldoende ruimte moet
                  zijn voor leuke dingen. Wij willen daarom verschillende
                  activiteiten organiseren zoals talks, workshops, borrels en
                  uitstapjes
                </p>
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};
export default Voordelen;
