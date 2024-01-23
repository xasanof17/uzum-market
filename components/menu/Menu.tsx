"use client";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

type MenuProps = {
  children: React.ReactNode;
};

const Menu = ({ children }: MenuProps) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className="w-screen border-0 shadow-xl">
        <div className="container grid grid-cols-5">
          <div className="col-span-1 bg-red-500">salom</div>
          <div className="col-span-auto">auto</div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Menu;
