import Image from "next/image";
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
        icon: "/assets/icons/apple.svg",
      },
      {
        title: "Google Play",
        href: "/",
        icon: "/assets/icons/google-play.svg",
      },
    ],
  },
];

const socials = [
  {
    title: "Instagram",
    href: "https://instagram.com/1henotorious_",
    icon: "/assets/icons/insta.svg",
  },
  {
    title: "Telegram",
    href: "https://instagram.com/1henotorious_",
    icon: "/assets/icons/tg.svg",
  },
  {
    title: "Youtube",
    href: "https://instagram.com/1henotorious_",
    icon: "/assets/icons/youtube.svg",
  },
  {
    title: "Facebook",
    href: "https://instagram.com/1henotorious_",
    icon: "/assets/icons/facebook.svg",
  },
];

const Footer = () => {
  const variants = {
    title: "text-sm lg:text-base font-medium text-noble",
    link: "text-[13px] md:text-sm font-normal text-noble/90 hover:text-violet-600 duration-300 transition-colors",
  };
  const year = new Date().getFullYear();
  return (
    <footer className="mt-5 border-t-2 pb-[40px] pt-5 xm:pb-[65px] md:pb-0">
      <div className="container grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {links.map(({ title, list }, i) => (
          <div key={i} className="flex flex-col">
            <h3 className={variants.title}>{title}</h3>
            <ul
              className={`flex ${
                list.some((item) => item.icon)
                  ? "mt-2 flex-row space-x-3"
                  : "flex-col"
              }`}
            >
              {list.map(({ title, href, icon }, i) => (
                <li key={i} className={icon && "flex items-center"}>
                  {!icon ? (
                    <Link href={href} className={variants.link}>
                      {title}
                    </Link>
                  ) : (
                    <Link
                      href={href}
                      className="group flex items-center space-x-2 rounded-md p-1 hover:bg-slate-50/80"
                    >
                      <div className="relative h-6 w-6">
                        <Image src={icon} alt={title} fill sizes="100vw" />
                      </div>
                      <span className="text-sm font-medium text-noble transition-all duration-300 group-hover:text-violet-600 md:text-[12px] lg:text-sm">
                        {title}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col">
          <h3 className={variants.title}>Uzum ijtimoiy tarmoqlarda</h3>
          <ul className="mt-2 flex items-center space-x-2">
            {socials.map(({ title, href, icon }, i) => (
              <li key={i}>
                <Link
                  href={href}
                  target="blank"
                  className="flex items-center justify-center"
                >
                  <div className="relative h-8 w-8">
                    <Image src={icon} alt={title} fill sizes="100vw" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container mt-12 flex flex-col items-center justify-between space-y-2 border-t py-3 md:flex-row md:space-y-0">
        <ul className="flex flex-col items-center space-x-3 xm:flex-row">
          <li>
            <Link href={"/"} className={variants.title}>
              Mahfiylik kelishuvi
            </Link>
          </li>
          <li>
            <Link href={"/"} className={variants.title}>
              Foydalanuvchi kelishuvi
            </Link>
          </li>
        </ul>
        <Link
          href={"https://milleniumcompany.tech"}
          target="blank"
          className={`${variants.title} hover:text-violet-600`}
        >
          &copy; Millenium {year}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
