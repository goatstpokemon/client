import { useAnimate } from "framer-motion";

type TeamType = {
  team: string;
  leden: {
    naam: string;
    functie: string;
    foto: string;
    description: string;
  }[];
};

interface TeamProps {
  team: TeamType;
  idx: number;
}

interface TeamMemberProps {
  lid: {
    naam: string;
    functie: string;
    foto: string;
    description: string;
  };
}

const Team = ({ team, idx }: TeamProps) => {
  return (
    <div>
      <h2
        className={`my-10 text-4xl font-bold ${
          idx % 2 ? "text-syntax" : "text-gray-900"
        }`}
      >
        {team.team}
      </h2>
      <div className="flex gap-10 overflow-x-scroll md:gap-12">
        {team.leden.map((lid) => (
          <TeamMember lid={lid} />
        ))}
      </div>
    </div>
  );
};
const TeamMember = ({ lid }: TeamMemberProps) => {
  const [scope, animate] = useAnimate();

  const handleAnimate = async () => {
    animate(scope.current, {
      scaleX: 1,
      opacity: 1,
      transform: "translateX(0%)",
      backgroundColor: "rgb(87 181 232)",
      color: "white",
      transition: { duration: 0.5, easeIn: [0.23, 1, 0.32, 1] },
    });
  };

  const hideAnimation = async () => {
    animate(scope.current, {
      scaleX: 0,
      transform: "translateX(-100%)",
      opacity: 1,
      backgroundColor: "rgb(87 181 232)",
      color: "white",
      transition: { duration: 0.5, easeOut: [0.23, 1, 0.32, 1] },
    });
  };

  return (
    <div
      key={lid.naam}
      className="relative mb-5 flex flex-col gap-10 overflow-hidden"
      onMouseEnter={() => handleAnimate()}
      onMouseLeave={() => hideAnimation()}
    >
      <img
        src={lid.foto}
        alt={lid.naam}
        className="aspect-square h-52 w-52 max-w-2xl rounded-lg object-cover"
      />
      <div>
        <h3 className="text-2xl font-bold text-syntax">{lid.naam}</h3>
        <p className="text-lg font-semibold text-gray-800">{lid.functie}</p>
      </div>
      <article
        ref={scope}
        className="absolute left-0 top-0 h-52 w-52 rounded-lg p-2 text-sm text-transparent"
      >
        <p>{lid.description}</p>
      </article>
    </div>
  );
};
export default Team;
