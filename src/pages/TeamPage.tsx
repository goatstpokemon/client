import Footer from "@/components/custom/layout/Footer";
import Header from "@/components/custom/layout/Header";
import Team from "@/components/custom/team/Team";

const TeamPage = () => {
  const teams = [
    {
      team: "Bestuur",
      leden: [
        {
          naam: "Jeroen van Roon",
          functie: "Voorzitter",
          foto: "src/assets/jonas.jpg",
          description:
            "Jeroen is de voorzitter van Syntax en zorgt ervoor dat alles op rolletjes loopt. Hij is het aanspreekpunt voor de vereniging en zorgt ervoor dat de vereniging op de juiste koers blijft.",
        },
        {
          naam: "Jeroen van Roon",
          functie: "Secretaris",
          foto: "src/assets/jonas.jpg",
          description:
            "Jeroen is de secretaris van Syntax en zorgt ervoor dat alle communicatie binnen de vereniging soepel verloopt. Hij houdt de leden op de hoogte van alle belangrijke zaken en zorgt ervoor dat alle vergaderingen goed verlopen.",
        },
        {
          naam: "Jeroen van Roon",
          functie: "Penningmeester",
          foto: "src/assets/jonas.jpg",
          description:
            "Jeroen is de penningmeester van Syntax en zorgt ervoor dat alle financiële zaken van de vereniging goed worden geregeld. Hij houdt de begroting bij en zorgt ervoor dat alle rekeningen op tijd worden betaald.",
        },
        {
          naam: "Jeroen van Roon",
          functie: "Intern",
          foto: "src/assets/jonas.jpg",
          description:
            "Jeroen is de interne zakenman van Syntax en zorgt ervoor dat alle interne zaken van de vereniging goed worden geregelden het onderhouden van contacten met andere verenigingen.",
        },
      ],
    },
    {
      team: "ASCII",
      leden: [
        {
          naam: "Jeroen van Roon",
          functie: "Voorzitter",
          foto: "src/assets/jonas.jpg",
          description:
            "Jeroen is de voorzitter van ASCII en is verantwoordelijk voor de activiteiten",
        },
        {
          naam: "Jeroen van Roon",
          functie: "Secretaris",
          foto: "src/assets/jonas.jpg",
          description:
            "Jeroen is de secretaris van ASCII en zorgt ervoor dat alles genotuleerd wordt.",
        },
        {
          naam: "Jeroen van Roon",
          functie: "Penningmeester",
          foto: "src/assets/jonas.jpg",
          description:
            "Jeroen is de penningmeester van ASCII en zorgt ervoor dat alle evenementen betaald zijn",
        },
        {
          naam: "Jeroen van Roon",
          functie: "Algemeen lid",
          foto: "src/assets/jonas.jpg",
          description:
            "Jeroen is algemeen lid van ASCII en ondersteunt de andere commissieleden waar nodig",
        },
      ],
    },
  ];
  return (
    <div className="container max-sm:max-w-[90vw] max-sm:px-4">
      <Header />
      <section>
        <h1 className="text-wrap text-center text-6xl font-bold text-syntax">
          Het team
        </h1>
        <p className="mt-4 text-center text-xl font-semibold">
          Dit zijn de leden van 2023/2024 die syntax draaiende houden
        </p>
        <div className="flex flex-col">
          {teams.map((team, i) => (
            <div key={i}>
              <Team team={team} idx={i} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default TeamPage;
