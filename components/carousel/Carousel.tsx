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
    <section id="carousel" className="container mt-3">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="h-[280px] w-full max-w-full md:h-[330px] lg:h-[380px] xl:h-[420px]"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[280px] w-full md:h-[330px] lg:h-[380px] xl:h-[420px]">
                <Image
                  src={"/assets/carousel/shaxzoda.png"}
                  alt="carousel image"
                  className="rounded-lg"
                  fill
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        salom bolalar
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default CarouselBlock;
