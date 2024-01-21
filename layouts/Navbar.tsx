import { Banner, Navigation } from "@/components/header";

const Navbar = () => {
  return (
    <header className="sticky left-0 top-0 flex w-full flex-col">
      <Banner />
      <Navigation />
    </header>
  );
};

export default Navbar;
