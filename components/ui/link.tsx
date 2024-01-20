"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

type NavLinkProps = {
  href: string;
  title: string;
};

const NavLink = ({ href, title }: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <>
      <Link
        className={cn(
          "text-base font-medium",
          pathname === "/" ? "text-blue-500" : "",
        )}
        href={href}
      >
        {title}
      </Link>
    </>
  );
};

export default NavLink;
