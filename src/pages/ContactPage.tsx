import Footer from "@/components/custom/layout/Footer";
import Header from "@/components/custom/layout/Header";
import { motion } from "framer-motion";
const ContactPage = () => {
  return (
    <div className="container max-sm:max-w-[90vw] max-sm:px-4">
      <Header />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="my-10"
      >
        <h1 className="text-6xl font-bold text-syntax">Contact</h1>
        <p className="mt-10">
          Heb je een vraag of wil je meer informatie over Syntax? Neem dan
          contact met ons op via onderstaande gegevens.
        </p>
        <div className="mt-10">
          <h2 className="text-4xl font-bold">Contactgegevens</h2>
          <p className="mt-5 flex flex-col">
            <span className="font-bold">E-mail:</span>{" "}
            <a href="mailto:bestuur@syntaxleiden.nl">bestuur@syntaxleiden.nl</a>
          </p>
          <p className="flex flex-col">
            <span className="flex flex-col font-bold">
              E-mail voor bedrijven:
            </span>{" "}
            <a href="mailto:extern@syntaxleiden.nl">extern@syntaxleiden.nl</a>
          </p>
          <p className="flex flex-col gap-2">
            <span className="font-bold">Vestigingsadres</span>{" "}
            <address>
              Zernikedreef 11 <br /> 2333 CK Leiden
            </address>
          </p>
          <p className="flex flex-col gap-2">
            <span className="font-bold">Postadres</span>{" "}
            <address>
              N.A.V secretariaat S.V. Syntax <br /> Zernikedreef 11 <br /> 2333
              CK Leiden <br /> Lokaal G3.170
            </address>
          </p>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};
export default ContactPage;
