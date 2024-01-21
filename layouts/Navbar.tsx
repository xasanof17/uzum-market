import { Banner, Navigation } from "@/components/header";
import { Category } from "@/components/category";

const Navbar = () => {
  return (
    <header className="sticky left-0 top-0 flex w-full flex-col">
      <Banner />
      <Navigation />
      <Category />
    </header>
  );
};

export default Navbar;
