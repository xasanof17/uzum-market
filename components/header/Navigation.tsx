import Image from "next/image";
import Link from "next/link";
import NavigationForm from "./NavigationForm";
import Actions from "./Actions";
import { GrMenu } from "react-icons/gr";

const Navigation = () => {
  return (
    <nav role="navigation" className="container flex flex-col">
      <div className="flex items-center justify-between space-x-3 py-2 md:py-3 xl:space-x-5 xl:py-4">
        <Link
          href={"/"}
          className="relative h-10 w-[200px] lg:w-[180px] xl:w-[215px]"
        >
          <Image
            src={"/assets/logo.svg"}
            fill
            alt="Uzum Logo"
            sizes="100vw"
            priority
          />
        </Link>
        <div className="flex flex-1 items-center lg:space-x-2">
          <button
            role="menu"
            className="hidden items-center space-x-2 rounded-sm bg-slate-200/30 px-3 py-2 lg:flex xl:px-5"
          >
            <div className="relative h-6 w-6">
              <Image
                src={"/assets/icons/catalog-icon.svg"}
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
        <button
          type="button"
          className="block rounded-full bg-slate-100 px-2.5 py-2 md:hidden"
        >
          <GrMenu size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
