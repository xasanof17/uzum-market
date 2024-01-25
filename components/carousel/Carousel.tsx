"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const CarouselBlock = () => {
  return (
    <section id="carousel" className="container">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="h-[420px] w-full max-w-full"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[450px] w-full">
              {/* <Image
                src={"/assets/opengraph-image.jpg"}
                alt="carousel image"
                className="rounded-lg"
                fill
              /> */}
              <img src="/assets/opengraph-image.jpg" alt="title" className="w-full h-full object-center"/>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default CarouselBlock;
