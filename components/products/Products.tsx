import { GoChevronRight } from "react-icons/go";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="container flex flex-col py-8">
      <div className="mb-5 flex items-center md:space-x-2">
        <h2 className="text-xl font-bold text-noble lg:text-2xl xl:text-3xl">
          Arzon narxlar
        </h2>
        <GoChevronRight className="text-[25px] text-noble lg:text-[30px]" />
      </div>
      <div className="grid grid-cols-1 gap-2 xm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default Products;
