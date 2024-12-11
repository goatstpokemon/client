import Partners from "@/components/custom/home/Partners";
import Footer from "@/components/custom/layout/Footer";
import Header from "@/components/custom/layout/Header";

const PartnerPage = () => {
  return (
    <div className="container max-sm:max-w-[90vw] max-sm:px-4">
      <Header />
      <section className="">
        <article className="flex flex-col-reverse justify-between gap-10 md:flex-row">
          <section className="w-full md:w-1/2">
            <h1 className="my-10 text-6xl font-bold text-syntax">
              Partner Worden
            </h1>
            <p>
              Studievereniging Syntax is altijd op zoek naar enthousiaste
              partners om toffe activiteiten mee te organiseren. Bent u
              geïnteresseerd in een samenwerking met Syntax? Neem dan contact op
              met onze Extern, via extern@syntaxleiden.nl. Denk voor een
              samenwerking bijvoorbeeld aan het organiseren van:
            </p>
            <ul className="my-4 ml-5 list-disc">
              <li>Rondleidingen</li>
              <li>Workshops</li>
              <li>Lezingen</li>
              <li>Trainingen</li>
              <li>Borrels</li>
            </ul>
            <p>
              In overleg kunnen natuurlijk ook andere leuke/interessante
              activiteiten worden georganiseerd. Hiernaast biedt Syntax ook de
              mogelijkheid aan om via social media, onze nieuwsbrief en ons
              eigen vacaturebank systeem honderden Informatica studenten op de
              hoogte te houden van bedrijfsevenementen en vacatures. Neem voor
              een prijsindicatie contact op met onze Extern.
            </p>
          </section>
          <img
            src="
          /src/assets/foto-jacek.webp"
            alt=""
            className="w-full rounded-xl md:w-1/2"
          />
        </article>
        <Partners />
      </section>
      <Footer />
    </div>
  );
};
export default PartnerPage;
