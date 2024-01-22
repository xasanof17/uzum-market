import Image from "next/image";
import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";

const categories = [
  {
    title: "Elektronika",
  },
  {
    title: "Kiyim",
  },
  {
    title: "Poyabzallar",
  },
  {
    title: "Aksessuarlar",
  },
  {
    title: "Goʻzallik va parvarish",
  },
  {
    title: "Salomatlik",
  },
  {
    title: "Uy-roʻzgʻor buyumlari",
  },
  {
    title: "Qurilish va taʼmirlash",
  },
];

const Category = () => {
  return (
    <div className="container">
      <ul
        role="list"
        className="flex items-center justify-between space-x-5 overflow-x-auto pb-2 pr-3 transition-all duration-300 scrollbar-none lg:space-x-7"
      >
        <li>
          <Link href={"/"} className="flex items-center space-x-2">
            <div className="relative h-6 w-6">
              <Image
                src={"/assets/icons/union-icon.svg"}
                alt="icon"
                fill
                sizes="100vw"
              />
            </div>
            <span className="text-nowrap text-sm font-semibold">
              Muddatli to{"\u2019"}lov
            </span>
          </Link>
        </li>
        {categories.map(({ title }, i) => (
          <li key={i}>
            <Link href={"/"} className="link text-nowrap">
              {title}
            </Link>
          </li>
        ))}
        <li className="flex items-center space-x-1 hover:cursor-pointer">
          <span className="text-sm font-normal text-noble/60">Yana</span>
          <IoChevronDown className="text-[16px] text-noble/60" />
        </li>
      </ul>
    </div>
  );
};

export default Category;
