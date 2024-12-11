import Footer from "@/components/custom/layout/Footer";
import Header from "@/components/custom/layout/Header";
import { getCurrentYear } from "@/lib/utils";
import { motion } from "framer-motion";
const AboutPage = () => {
  const year = getCurrentYear();
  return (
    <div className="container max-sm:max-w-[90vw] max-sm:px-4">
      <Header />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <article>
          <h1 className="my-10 text-6xl font-bold text-syntax">Over ons</h1>
          <section className="flex aspect-video flex-col justify-between gap-20 xl:aspect-auto xl:flex-row">
            <img
              src="src/assets/bungalan.webp"
              alt=""
              className="aspect-video rounded-xl bg-cover bg-center bg-no-repeat xl:max-w-xl"
            />
            <p className="text-lg xl:max-w-xl">
              Studievereniging Syntax heeft als doel de studie ervaring te
              vergroten door het organiseren van verschillende (buitenschoolse)
              activiteiten. Syntax bestaat uit een bestuur en haar commissies,
              deze commissies zijn naast het bestuur net zo belangrijk. Ze
              zorgen bijvoorbeeld voor het organiseren van onze activiteiten
              iedere maand, of organiseren onze studiereis. Ben je benieuwd
              welke commissies we hebben, neem dan een kijkje op onze team
              pagina. Dit alles draagt bij aan een geweldige studeerervaring met
              veel unieke terugblikken en vrienden! Wil je meer over ons weten?
              Spreek ons aan op de hogeschool of neem een kijkje op de contact
              pagina. Groetjes van het bestuur {year - 1} - {year}
            </p>
          </section>
        </article>
        <article className="my-14">
          <h1 className="my-10 text-6xl font-bold text-gray-900">
            Geschiedenis
          </h1>
          <section className="flex flex-col-reverse justify-between gap-20 xl:flex-row">
            <section>
              <p className="text-lg xl:max-w-xl">
                Op de eindbarbecue van studievereniging Exon bio-informatica
                kwamen Jacek en Wessel verwikkeld in een vraagstuk. “Waarom is
                er eigenlijk geen studievereniging voor Informatica?” Na het
                vraagstuk aan studiegenoot Gijs te hebben voorgelegd is besloten
                na de zomervakantie verder te gaan met de uitwerking van dit
                idee. Toen op school bleek dat naast docenten, ook de
                opleidingsmanager hier over te spreken was, werd begonnen met
                het maken van een plan. Na de krachten te hebben gebundeld met
                Wendy en Joel duurde het niet lang meer voordat de vereniging
                daadwerkelijk vorm kreeg. Na overleg werd besloten een vacature
                te plaatsen voor de functie van secretaris. Hier vond te
                introductie van zowel Mathijs als Joshua plaats. Mathijs zou de
                functie van secretaris op zich nemen en Joshua bracht het idee
                met zich mee om (toekomstige) commissies te beheren. Het bestuur
                was compleet, en samen hebben zij de volgende speerpunten
                opgesteld. Deze dienen als visie voor de vereniging en worden
                tot op de dag van vandaag gebruikt als richtlijnen bij
                besluiten.
              </p>
              <ul className="mt-5 list-disc text-xl">
                <li>
                  Het bevorderen van de contacten tussen studenten en
                  medewerkers van de opleiding Informatica.{" "}
                </li>
                <li>Het bevorderen van de kwaliteit van de opleiding.</li>
                <li>
                  Een aanvulling bieden voor de opleiding of specifieke modules
                  d.m.v. extra colleges of bijeenkomsten.{" "}
                </li>
                <li>
                  Het vinden en aanbieden van stage- en carrière posities.
                </li>
                <li>
                  Het bevorderen van de contacten tussen de studenten onderling.
                  En dat is hoe Studievereniging Syntax is ontstaan. Elk bestuur
                  doet zijn best om zich aan deze regels te houden; om zo de
                  vereniging en haar leden te helpen groeien.
                </li>
              </ul>
            </section>
            <img
              src="src/assets/bungalan.webp"
              alt=""
              className="aspect-video h-fit rounded-xl bg-cover bg-center bg-no-repeat xl:max-w-xl"
            />
          </section>
        </article>
      </motion.section>
      <Footer />
    </div>
  );
};
export default AboutPage;
