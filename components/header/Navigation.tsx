import Image from "next/image";
import Link from "next/link";
import NavigationForm from "./NavigationForm";
import Actions from "./Actions";

const Navigation = () => {
  return (
    <nav role="navigation" className="container flex flex-col">
      <div className="flex items-center justify-between space-x-5 py-4">
        <Link href={"/"} className="relative h-10 w-[215px]">
          <Image
            src={"/assets/logo.svg"}
            fill
            alt="Uzum Logo"
            sizes="100vw"
            priority
          />
        </Link>
        <div className="flex flex-1 items-center space-x-2">
          <button
            role="menu"
            className="flex items-center space-x-2 rounded-sm bg-slate-200/30 px-5 py-2 "
          >
            <div className="relative h-6 w-6">
              <Image
                src={"/assets/catalog-icon.svg"}
                alt="catalog"
                fill
                sizes="100vw"
              />
            </div>
            <p className="text-sm font-medium text-violet-600">Katalog</p>
          </button>
          <NavigationForm />
        </div>
        <Actions />
      </div>
    </nav>
  );
};

export default Navigation;
