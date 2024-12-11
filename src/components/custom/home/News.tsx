import { getCurrentMonth } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();
  const currentMonth = getCurrentMonth();
  const id = 1;
  return (
    <div className="flex flex-col items-start">
      <h2 className="mb-2 text-6xl font-bold text-syntax">Nieuws</h2>
      <h3 className="mb-10 text-5xl font-semibold">{currentMonth}</h3>
      <div className="relative">
        <div className="absolute -left-8 -top-3 flex h-12 w-20 items-center justify-center rounded-xl bg-syntax align-middle font-semibold text-white shadow-md max-sm:size-12">
          1 Jaar
        </div>
        <div
          onClick={() => navigate(`/nieuws/${id}`)}
          className="size-80 cursor-pointer rounded-xl bg-white px-5 py-14 shadow-lg"
        >
          <h1 className="text-2xl font-bold">Nieuwsbrief #1</h1>
          <p className="mt-4 font-medium">
            Wij willen een meerwaarde bieden aan de studenten Informatica. Dit
            doen wij door het organiseren van extra (gast)college's voor lastige
            modules en nieuwe ontwikkelingen binnen de IT.
          </p>
        </div>
      </div>
      <Link to="/nieuws" className="mt-5 text-2xl font-bold text-syntax">
        Meer Nieuws
      </Link>
    </div>
  );
};
export default News;
