"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { TbShoppingBagPlus } from "react-icons/tb";

const ProductCard = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex flex-col rounded-sm transition-all duration-300 hover:cursor-pointer hover:shadow-md">
      <Link href={"/"} className="relative w-full overflow-hidden bg-slate-100">
        <div className="relative h-[400px] w-full rounded-sm transition-all duration-300 hover:scale-105 xm:h-[250px] md:h-[300px]">
          <Image
            src={"/assets/product.png"}
            fill
            alt="product title"
            sizes="100vw"
          />
        </div>
        <div className="absolute right-2 top-2">
          <button onClick={() => setLiked((prev) => !prev)} type="button">
            {!liked ? (
              <IoMdHeartEmpty className="h-6 w-6 text-noble" />
            ) : (
              <IoMdHeart className="h-6 w-6 text-violet-600" />
            )}
          </button>
        </div>
        <div className="absolute bottom-0 left-0">
          <span className="rounded-md bg-violet-600 px-1.5 py-1 text-[11px] font-medium text-white md:text-[13px]">
            Eksklyuziv
          </span>
        </div>
      </Link>
      <div className="flex flex-col px-2 py-3">
        <Link href={"/"}>
          <h3 className="text-[12px] font-normal text-noble md:text-sm">
            Kungaboqar yog&apos;i Oila tanlovi, tozalangan va xidsizlantirilgan,
            9
          </h3>
        </Link>
        <div className="mt-1 flex items-center space-x-2 text-[11px] font-light text-slate-500 md:text-[13px]">
          <BsStarFill className="h-4 w-4 text-yellow-500" />
          <span>4.9 (4092 sharx)</span>
        </div>
        <div className="mt-2 inline">
          <span className="inline rounded-sm bg-[#FF0] px-1.5 py-1 text-[11px] font-medium text-noble md:text-[12px]">
            1 560 so&apos;m/oyiga
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[11px] font-normal text-slate-400 line-through md:text-[13px]">
              15000 so&apos;m
            </span>
            <span className="text-[12px] font-medium text-noble md:text-sm">
              13 000 so&apos;m
            </span>
          </div>
          <button
            type="button"
            className="h-full rounded-full border-2 px-1.5 hover:bg-slate-100 md:px-2"
          >
            <TbShoppingBagPlus className="h-5 w-5 text-noble md:h-6 md:w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
