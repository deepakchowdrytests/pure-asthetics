import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const services = [
  {
    title: "Injectables & Anti‑Aging Solutions",
    desc: "Smooth lines, restore volume, and refresh your appearance with expert-administered treatments.",
    img: "/img/featured-1.jpg",
    alt: "Injectable treatment close-up",
  },
  {
    title: "Laser Treatments",
    desc: "State‑of‑the‑art technology for hair removal, skin rejuvenation, and tattoo removal for all skin types.",
    img: "/img/featured-2.jpg",
    alt: "Laser skincare procedure",
  },
  {
    title: "Body Sculpting & Wellness",
    desc: "Non‑invasive body contouring, weight support, and nutrition guidance to help you feel your best.",
    img: "/img/featured-3.jpg",
    alt: "Body contouring treatment",
  },
  {
    title: "Women's Health & Intimacy",
    desc: "Confidential, physician‑directed treatments for comfort, confidence, and long‑term wellness.",
    img: "/img/featured-4.jpg",
    alt: "Women's health appointment",
  },
];

export function FeaturedServicesSection() {
  return (
    <section className="flex items-center justify-center pt-12 md:pt-0 min-h-[90vh] bg-[#969B59] relative">
      {/* Decorative floral watermark */}
      <Image
        src={"/images/featured-illustration.png"}
        alt=""
        width={1000}
        height={1000}
        className="absolute top-0 left-0 w-60 h-full object-cover opacity-50"
      />
      <div className="w-11/12 flex flex-col items-center justify-end h-full gap-12">
        <div className="w-11/12 md:w-10/12 flex gap-3 md:gap-0 flex-col md:flex-row justify-between">
          <h2
            id="featured-services-heading"
            className="text-5xl text-brand-secondary-dark"
          >
            Featured services
          </h2>

          <p className="text-white text-base max-w-96 leading-relaxed">
            Whether you&apos;re new to skincare or a seasoned pro, our services
            are here to help you achieve your healthiest skin. Explore our
            tailored offerings below.
          </p>
          <Button className="rounded-none rounded-tr-2xl font-normal w-44 bg-[#FCF3EE] hover:bg-[#FCF3EE]/85 text-brand-text-primary">
            <Link href="/services/featured" className="flex items-center gap-1">
              <span>View all services</span>
              <ChevronRight className="size-4" strokeWidth={1.5} />
            </Link>
          </Button>
        </div>

        {/* Carousel */}
        <Carousel className="">
          <CarouselContent className="gap-0">
            {services.map((s, i) => (
              <CarouselItem
                key={s.title}
                className="basis-full md:basis-1/4 gap-0"
              >
                <div className="group">
                  <div className="overflow-hidden rounded-tl-4xl aspect-[4/6]">
                    <div className="h-full relative">
                      <Image
                        src={s.img}
                        alt={s.alt}
                        width={1000}
                        height={1000}
                        className="h-full object-cover"
                      />
                      {/* Text panel with creamy rounded shape */}
                      <div
                        className={`${
                          i === 0
                            ? "bg-[#FCF3EE]"
                            : i === 1
                            ? "bg-[#FFEFD7]"
                            : i === 2
                            ? "bg-[#FEE0D9]"
                            : i === 3 && "bg-[#FFF9F6]"
                        } absolute bottom-0 left-0 right-0 h-24 p-3 md:p-4 text-brand-text-primary gap-2 flex flex-col justify-center rounded-tr-[75px]`}
                      >
                        <h3 className="text-sm font-semibold line-clamp-1">
                          {s.title}
                        </h3>
                        <p className="line-clamp-2 text-xs">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Arrows */}
          <CarouselPrevious className="translate-x-12 md:translate-x-8" />
          <CarouselNext className="-translate-x-12 md:-translate-x-8" />
        </Carousel>
      </div>
    </section>
  );
}

export default FeaturedServicesSection;
