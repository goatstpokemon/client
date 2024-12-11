import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerClose,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-queries";
import { MenuIcon, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <header className="py-10">
      {isDesktop ? (
        <nav>
          <ul className="flex items-center justify-between">
            <div className="flex items-center gap-8 font-semibold text-gray-800">
              <li>
                <Link to={"/"}>
                  <img
                    src="src/assets/syntax-groot.png"
                    alt="logo"
                    className="h-14"
                  />
                </Link>
              </li>
              <li>
                <Link to={"/over-ons"}>Over Syntax</Link>
              </li>
              <li>
                <Link to={"/partners"}>Voor Partners</Link>
              </li>
              <li>
                <Link to={"/team"}>Het Team</Link>
              </li>
              <li>
                <Link to={"/lid-worden"}>Wordt Lid</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </div>
            <div>
              <li className="rounded-lg bg-syntax px-3 py-2">
                <Link to={""} className="font-semibold text-white">
                  Leden portaal
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      ) : (
        <Drawer direction="left">
          <div className="flex justify-between">
            <Link to={"/"}>
              <img
                src="src/assets/syntax-groot.png"
                alt="logo"
                className="h-14"
              />
            </Link>
            <DrawerTrigger className="w-fit">
              <div className="rounded-full bg-slate-900 p-3 text-white">
                <MenuIcon />
              </div>
            </DrawerTrigger>
          </div>
          <DrawerContent className="m-w-svw min-h-svh">
            <DrawerHeader className="container flex justify-end">
              <DrawerClose>
                <div className="rounded-full bg-slate-900 p-3 text-white">
                  <X />
                </div>
              </DrawerClose>
            </DrawerHeader>
            <nav className="px-4">
              <ul className="flex flex-col gap-10 text-4xl font-bold text-slate-900">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/over-ons"}>Over ons</Link>
                </li>
                <li>
                  <Link to={"/partners"}>Voor Partners</Link>
                </li>
                <li>
                  <Link to={"/team"}>Het Team</Link>
                </li>
                <li>
                  <Link to={"/lid-worden"}>Wordt Lid</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </nav>
          </DrawerContent>
        </Drawer>
      )}
    </header>
  );
};
export default Header;
