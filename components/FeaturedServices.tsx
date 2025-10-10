"use client";
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
import { useRouter } from "next/navigation";

export const services = [
  {
    title: "Face & Anti-Aging",
    desc: "Smooth, refresh, and rejuvenate your appearance with physician-administered injectables and advanced treatments.",
    img: "/img/featured-1.jpg",
    alt: "Face & Anti-Aging",
    id: "#face-anti-aging",
  },
  {
    title: "Body & Wellness",
    desc: "Feel confident inside and out with non-invasive solutions that target body concerns and support overall well-being.",
    img: "/img/f-service-4.jpg",
    alt: "Body & Wellness",
    id: "#body-wellness",
  },
  {
    title: "Laser Treatments",
    desc: "Advanced technology for skin renewal, hair reduction, and pigment correction. ",
    img: "/img/about-1.jpg",
    alt: "Laser Treatments",
    id: "#laser-treatments",
  },
  {
    title: "Skin Care",
    desc: "Transform your skin with treatments tailored to your unique needs.",
    img: "/services/service-1.png",
    alt: "Skin Care",
    id: "#skin-care",
  },
  {
    title: "Women’s Health",
    desc: "Confidential care to restore comfort, confidence, and intimacy.",
    img: "/img/featured-4.jpg",
    alt: "Women's Health",
    id: "#women-health",
  },
];

export function FeaturedServicesSection() {
  const router = useRouter();
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
          <Link
            href="/services/featured"
            className="flex items-center gap-1 md:justify-start justify-center mt-4 md:mt-0 z-50"
          >
            <Button className="rounded-none rounded-tr-2xl font-normal px-7 bg-[#FCF3EE] hover:bg-[#FCF3EE]/85 text-brand-text-primary text-sm md:text-base">
              View all services
              <ChevronRight className="size-4" strokeWidth={1.5} />
            </Button>
          </Link>
        </div>

        {/* Carousel */}
        <Carousel
          className=""
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
        >
          <CarouselContent className="gap-0">
            {services.map((s, i) => (
              <CarouselItem
                key={s.id}
                className="basis-full md:basis-1/4 gap-0 cursor-pointer"
                onClick={() => router.push(`/services/featured${s.id}`)}
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
                            : i === 3
                            ? "bg-[#FFF9F6]"
                            : "bg-[#FFEFD7]"
                        } absolute bottom-0 left-0 right-0 min-h-28 p-3 md:p-3 text-brand-text-primary gap-2 flex flex-col justify-center rounded-tr-[75px]`}
                      >
                        <h3 className="text-sm font-medium line-clamp-1">
                          {s.title}
                        </h3>
                        <p className="line-clamp-3 text-xs leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Arrows */}
          <CarouselPrevious className="size-9 bg-[#FFEFD7] border-none text-brand-text-primary translate-x-14 translate-y-3" />
          <CarouselNext className="size-9 bg-[#FFEFD7] border-none text-brand-text-primary -translate-x-14 translate-y-3" />
        </Carousel>
      </div>
    </section>
  );
}

export default FeaturedServicesSection;
