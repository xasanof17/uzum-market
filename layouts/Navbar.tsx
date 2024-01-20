import { Banner, Navigation } from "@/components/header";
import NavLink from "@/components/ui/link";
import { links } from "@/data";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky left-0 top-0 flex w-full flex-col">
      <Banner />
      <Navigation />
    </header>
  );
};

export default Navbar;
