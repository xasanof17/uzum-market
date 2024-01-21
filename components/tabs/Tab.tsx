import Link from "next/link";
import { IconType } from "react-icons";

type TabProps = {
  Icon: IconType;
  title: string;
  href: string;
};

const Tab = ({ Icon, title, href }: TabProps) => {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center space-y-1"
    >
      <Icon className="text-[23px] text-black" />
      <p className="text-[12px] font-medium text-noble sm:text-sm">{title}</p>
    </Link>
  );
};

export default Tab;
