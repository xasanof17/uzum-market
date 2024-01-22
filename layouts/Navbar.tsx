import { Banner, Navigation } from "@/components/header";
import { Category } from "@/components/category";

const Navbar = () => {
  return (
    <header className="flex w-full flex-col bg-white">
      <Banner />
      <Navigation />
      <Category />
    </header>
  );
};

export default Navbar;
