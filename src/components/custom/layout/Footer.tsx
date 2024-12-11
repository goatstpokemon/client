import { getCurrentYear } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = getCurrentYear();
  return (
    <footer className="flex flex-col justify-start xl:max-w-[70vw]">
      <section className="mb-10 flex gap-x-20">
        <article>
          <h3 className="text-2xl font-bold text-syntax">Socials</h3>
          <ul className="mt-4 flex gap-4">
            <li className="rounded-xl bg-syntax p-2 text-white">
              <Facebook />
            </li>
            <li className="rounded-xl bg-gray-900 p-2 text-white">
              <Instagram />
            </li>
            <li className="rounded-xl bg-syntax p-2 text-white">
              <Twitter />
            </li>
            <li className="rounded-xl bg-gray-900 p-2 text-white">
              <Linkedin />
            </li>
          </ul>
        </article>
        <article>
          <h3 className="text-2xl font-bold text-syntax">Links</h3>
          <ul className="mt-4 flex flex-col gap-2">
            <li>
              <Link to={""}>Statuten</Link>
            </li>
            <li>
              <Link to={""}>Huishuidelijke Regelement</Link>
            </li>
            <li>
              <Link to={""}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={""}>Algemene Voorwaarden</Link>
            </li>
          </ul>
        </article>
      </section>
      <section className="flex w-full flex-wrap gap-x-5 align-bottom md:gap-20">
        <div className="items-bottom flex flex-col">
          <h5 className="font-medium text-white">Copywrite</h5>
          <p>© 2014-{year} Syntax</p>
        </div>
        <div>
          <h5 className="font-medium text-syntax">KVK</h5>
          <p>60302445</p>
        </div>
        <div>
          <h5 className="font-medium text-syntax">IBAN</h5>
          <p>NL16BUNQ2206254980 t.n.v. Studievereniging Syntax </p>
        </div>
        <div>
          <h5 className="font-medium text-syntax">BTW-Nummer</h5>
          <p>NL853850057.B01</p>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
