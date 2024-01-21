import Link from "next/link";
import { MdLocationOn } from "react-icons/md";

const Banner = () => {
  return (
    <section className="hidden bg-slate-100 py-1 lg:block">
      <div className="container flex flex-row items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            <MdLocationOn className="text-[18px] text-noble" />
            <p className="text-sm font-normal text-noble">Shahar: </p>
            <button
              type="button"
              className="text-sm font-medium text-noble underline underline-offset-2"
            >
              Toshkent
            </button>
          </div>
          <p className="text-sm font-medium text-noble">Topshirish punktlari</p>
        </div>
        <p className="text-sm text-slate-500/80">
          Buyurtmangizni 1 kunda bepul yetkazib beramiz!
        </p>
        <div className="flex items-center space-x-5 text-sm font-medium text-noble">
          <div className="flex items-center space-x-4">
            <Link href={"#!"}>Savol-javoblar</Link>
            <Link href={"#!"}>Buyurtmalar</Link>
          </div>
          <Link href={"#!"}>Uzbekcha</Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
