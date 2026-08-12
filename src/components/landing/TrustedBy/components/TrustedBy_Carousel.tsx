"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import TrustedBy_Card from "./TrustedBy_Card";
import { brands } from "@/data/brands";

export default function TrustedBy_Carousel() {
  return (
    <Carousel
      dir="rtl"
      opts={{
        align: "start",
        loop: true,
        direction: "rtl",
      }}
      className="mt-5 w-full"
    >
      <CarouselContent>
        {brands.map((brand) => (
          <CarouselItem
            key={brand.id}
            className="
              basis-1/2
              sm:basis-1/3
              md:basis-1/4
              lg:basis-1/5
            "
          >
            <TrustedBy_Card brand={brand} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}