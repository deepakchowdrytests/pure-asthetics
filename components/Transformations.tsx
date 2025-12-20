import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PhoneIcon } from "@/lib/icons";
import { Smile } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Transformations = () => {
  const transformations = [
    {
      id: 1,
      category: "Botox treatments",
      beforeImage: "/botox-before.jpg",
      afterImage: "/botox-after.jpg",
    },
    {
      id: 2,
      category: "Lip & Cheek Filler treatments",
      beforeImage: "/lip-cheek-filler-before.jpg",
      afterImage: "/lip-cheek-filler-after.jpg",
    },
    {
      id: 3,
      category: "Sculptra & Filler & Botox treatments",
      beforeImage: "/sculptra-filler-botox-before.jpg",
      afterImage: "/sculptra-filler-botox-after.jpg",
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-[#FFE4D7] flex items-center justify-center">
      <div className="w-11/12 md:w-8/12 space-y-12">
        {/* Title */}
        <h2 className="text-2xl md:text-5xl text-center text-brand-text-primary">
          See the transformation
        </h2>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 1,
              breakpoints: {
                '(min-width: 768px)': {
                  slidesToScroll: 2,
                },
              },
            }}
            className="w-full"
          >
            <CarouselContent>
              {transformations.map((transformation) => (
                <CarouselItem
                  key={transformation.id}
                  className="basis-full md:basis-1/2"
                >
                  <div className="p-1">
                    {/* Category Badge */}
                    <div className="flex justify-center mb-4">
                      <span className="inline-flex items-center gap-2 border border-brand-text-primary text-brand-text-primary px-3 py-1.5 rounded-t-full rounded-br-full text-sm font-medium">
                        <Smile className="size-4 mt-px" strokeWidth={1.5} />
                        {transformation.category}
                      </span>
                    </div>

                    {/* Before/After Images */}
                    <div className="grid grid-cols-2 gap-2">
                      {/* Before */}
                      <div>
                        <div className="relative overflow-hidden rounded-t-full rounded-br-full aspect-[3/4] mb-3">
                          <Image
                            width={1200}
                            height={1200}
                            src={transformation.beforeImage}
                            alt="Before treatment"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-center text-lg text-brand-text-primary">
                          Before
                        </p>
                      </div>

                      {/* After */}
                      <div>
                        <div className="relative overflow-hidden rounded-t-full rounded-b-3xl aspect-[3/4] mb-3">
                          <Image
                            width={1200}
                            height={1200}
                            src={transformation.afterImage}
                            alt="After treatment"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-center text-lg text-brand-text-primary">
                          After
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="size-9 bg-[#FFEFD7] border-none text-brand-text-primary translate-x-14 translate-y-3" />
            <CarouselNext className="size-9 bg-[#FFEFD7] border-none text-brand-text-primary -translate-x-14 translate-y-3" />
          </Carousel>
        </div>

        {/* CTA Section */}
        <div className="w-full">
          <div className="bg-[#F9B9AF] rounded-md md:rounded-full flex flex-col gap-4 md:gap-0 md:flex-row md:items-center justify-between p-4 md:py-8 md:px-12">
            <div className="flex-1 space-y-2">
              <h3 className="text-xl md:text-4xl text-brand-text-primary">
                Ready for radiant skin?
              </h3>
              <p className="text-sm md:text-base text-brand-text-primary">
                Book your personalized skincare session today and discover your
                natural glow.
              </p>
            </div>
            <Button className="flex items-center gap-2 bg-[#FF835A] hover:bg-[#FF835A]/85 text-brand-text-primary rounded-none rounded-tr-2xl">
              <Link
                href={"tel:+16038000333"}
                className="flex items-center gap-1"
              >
                <PhoneIcon width={20} height={20} />
                Schedule my Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transformations;
