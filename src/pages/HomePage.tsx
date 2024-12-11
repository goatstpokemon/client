import Hero from "@/components/custom/home/Hero";
import News from "@/components/custom/home/News";
import Partners from "@/components/custom/home/Partners";
import UpComingEvents from "@/components/custom/home/UpComingEvents";
import Voordelen from "@/components/custom/home/Voordelen";
import Footer from "@/components/custom/layout/Footer";
import Header from "@/components/custom/layout/Header";
import { motion } from "framer-motion";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-y-10 sm:container max-sm:mx-auto max-sm:max-w-[90vw] max-sm:px-4">
      <Header />
      <Hero />
      <motion.section
        initial={{ opacity: 0, x: 500 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        viewport={{ margin: "-300px", once: true }}
      >
        <Voordelen />
      </motion.section>
      <motion.section
        className="flex flex-col gap-y-10 md:flex-row md:justify-around md:gap-0 xl:my-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-300px", once: true }}
      >
        <UpComingEvents />
        <News />
      </motion.section>
      <Partners />
      <Footer />
    </div>
  );
};
export default HomePage;
