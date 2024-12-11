import { Link } from "react-router-dom";

const Partners = () => {
  return (
    <section className="">
      <section className="pb-10">
        <h2 className="mt-10 text-6xl font-bold text-gray-900">Partners</h2>
        <article className="mt-10 flex flex-col items-center gap-10 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Link
            to={`#`}
            className="flex h-40 w-72 place-content-center items-center rounded-lg bg-white duration-150 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-syntax/10"
          >
            <img
              src="src/assets/syntax-groot.png"
              alt="placeholder"
              className="object-fit h-1/2 w-4/5 rounded-lg"
            />
          </Link>
          <Link
            to={`#`}
            className="flex h-40 w-72 place-content-center items-center rounded-lg bg-white hover:scale-105 hover:shadow-lg hover:shadow-syntax/10"
          >
            <img
              src="src/assets/syntax-groot.png"
              alt="placeholder"
              className="object-fit h-1/2 w-4/5 rounded-lg"
            />
          </Link>
          <Link
            to={`#`}
            className="flex h-40 w-72 place-content-center items-center rounded-lg bg-white hover:scale-105 hover:shadow-lg hover:shadow-syntax/10"
          >
            <img
              src="src/assets/syntax-groot.png"
              alt="placeholder"
              className="object-fit h-1/2 w-4/5 rounded-lg"
            />
          </Link>
          <Link
            to={`#`}
            className="flex h-40 w-72 place-content-center items-center rounded-lg bg-white hover:scale-105 hover:shadow-lg hover:shadow-syntax/10"
          >
            <img
              src="src/assets/syntax-groot.png"
              alt="placeholder"
              className="object-fit h-1/2 w-4/5 rounded-lg"
            />
          </Link>
          <Link
            to={`#`}
            className="flex h-40 w-72 place-content-center items-center rounded-lg bg-white hover:scale-105 hover:shadow-lg hover:shadow-syntax/10"
          >
            <img
              src="src/assets/syntax-groot.png"
              alt="placeholder"
              className="object-fit h-1/2 w-4/5 rounded-lg"
            />
          </Link>
        </article>
      </section>
    </section>
  );
};
export default Partners;
