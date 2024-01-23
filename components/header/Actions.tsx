import Link from "next/link";
import { IconType } from "react-icons";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiUser } from "react-icons/bi";
import { BsBag } from "react-icons/bs";

type ActionButton = {
  href?: string;
  title: string;
  Icon: IconType;
};

const ActionButton = ({ href, title, Icon }: ActionButton) => {
  const variants = {
    base: "flex items-center space-x-2 px-3 py-2.5 hover:bg-slate-200/50 transition-all duration-300 rounded-sm",
    icon: "text-[22px] lg:text-[20px] text-noble",
    title: "hidden lg:inline text-sm font-medium text-noble",
  };
  if (href) {
    <Link href={"#!"} className={variants.base}>
      <Icon className={variants.icon} />
      <p className={variants.title}>{title}</p>
    </Link>;
  } else {
    return (
      <button type="button" className={variants.base}>
        <Icon className={variants.icon} />
        <p className={variants.title}>{title}</p>
      </button>
    );
  }
};

const Actions = () => {
  return (
    <div className="hidden items-center md:flex lg:space-x-2">
      <ActionButton Icon={BiUser} title="Kirish" />
      <ActionButton Icon={IoMdHeartEmpty} title="Saralangan" />
      <ActionButton Icon={BsBag} title="Savat" />
    </div>
  );
};

export default Actions;
