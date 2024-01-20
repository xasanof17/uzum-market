import Link from "next/link";
import { IconType } from "react-icons";
import { FaRegUser, FaRegHeart } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";

type ActionButton = {
  href?: string;
  title: string;
  Icon: IconType;
};

const ActionButton = ({ href, title, Icon }: ActionButton) => {
  const variants = {
    base: "flex items-center space-x-2 px-3 py-2.5 hover:bg-slate-200/50 transition-all duration-300 rounded-sm",
    icon: "text-[18px] text-noble",
    title: "text-sm font-medium text-noble",
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
    <div className="flex items-center space-x-2">
      <ActionButton Icon={FaRegUser} title="Kirish" />
      <ActionButton Icon={FaRegHeart} title="Saralangan" />
      <ActionButton Icon={LuShoppingBag} title="Savat" />
    </div>
  );
};

export default Actions;
