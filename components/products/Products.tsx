import { GoChevronRight } from "react-icons/go";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="container flex flex-col py-8">
      <div className="mb-5 flex items-center space-x-2">
        <h2 className="text-3xl font-bold text-noble">Arzon narxlar</h2>
        <GoChevronRight className="text-[30px] text-noble" />
      </div>
      <div className="grid  grid-cols-2 gap-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5">
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
