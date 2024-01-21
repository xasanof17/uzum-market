import Link from "next/link";

type List = { title: string; href: string; icon?: string };

type LinkProps = {
  title: string;
  list: List[];
};

const links: LinkProps[] = [
  {
    title: "Biz haqimizda",
    list: [
      {
        title: "Topshirish punktlari",
        href: "/",
      },
      {
        title: "Vakansiyalar",
        href: "/",
      },
    ],
  },
  {
    title: "Foydalanuvchilarga",
    list: [
      {
        title: "Biz bilan bogʻlanish",
        href: "/",
      },
      {
        title: "Savol-Javob",
        href: "/",
      },
    ],
  },
  {
    title: "Tadbirkorlarga",
    list: [
      {
        title: "Uzumda soting",
        href: "/",
      },
      {
        title: "Sotuvchi kabinetiga kirish",
        href: "/",
      },
    ],
  },
  {
    title: "Ilovani yuklab olish",
    list: [
      {
        title: "App Store",
        href: "/",
        icon: "",
      },
      {
        title: "Google Play",
        href: "/",
        icon: "",
      },
    ],
  },
];

const Footer = () => {
  const variants = {
    title: "text-base font-medium text-noble",
    link: "text-sm font-normal text-noble/90 hover:text-violet-600 duration-300 transition-colors",
  };
  return (
    <footer className="mt-5 border-t-2 pt-5">
      <div className="container grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {links.map(({ title, list }, i) => (
          <div key={i} className="flex flex-col">
            <h3 className={variants.title}>{title}</h3>
            <ul className="flex flex-col">
              {list.map(({ title, href }, i) => (
                <li key={i}>
                  <Link href={href} className={variants.link}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* <div className="flex flex-col">
          <h3>Uzum ijtimoiy tarmoqlarda</h3>
          <div className="flex items-center space-x-2">icons</div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
