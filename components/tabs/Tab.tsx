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
      <p className="hidden font-medium text-noble xm:block xm:text-[12px] sm:text-sm">
        {title}
      </p>
    </Link>
  );
};

export default Tab;
