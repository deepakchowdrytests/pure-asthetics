"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The results were better than I imagined. The body contouring helped me tone my abdomen and thighs without any downtime.",
      author: "Ankitha K. Babu, Student",
      image: "/images/transform-2.png",
      rating: 5,
    },
    {
      id: 2,
      text: "I'm so grateful I found Pure Aesthetics! My skin has never looked this good. The anti-aging treatments are gentle but powerful. I finally feel comfortable in my skin again!",
      author: "Emma T.",
      image: "/images/transform-4.png",
      rating: 5,
    },
    {
      id: 3,
      text: "The staff is incredibly professional and caring. Every treatment feels luxurious and the results speak for themselves. Highly recommend!",
      author: "Sarah M., Business Owner",
      image: "/images/transform-2.png",
      rating: 5,
    },
    {
      id: 4,
      text: "Amazing experience from start to finish. The consultation was thorough and the treatments exceeded my expectations. My confidence has never been higher!",
      author: "Jessica L.",
      image: "/images/transform-4.png",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(rating)].map((_, index) => (
      <Star
        key={index}
        className="size-3.5 fill-brand-text-primary"
        strokeWidth={1.5}
      />
    ));
  };

  return (
    <div className="flex items-center justify-center py-16 md:py-0 min-h-[70vh] bg-[#FCF3EE] relative">
      <div className="w-11/12 md:w-10/12 space-y-12 z-20">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl text-center text-brand-text-primary">
          Our clients love their results
        </h2>

        {/* Testimonials Carousel */}
        <div className="w-full max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2">
                  <div
                    className={`${
                      index % 2 === 0
                        ? "bg-[#FFEFD7]"
                        : "bg-[#FFF9F6]/50 backdrop-blur-[1.5px]"
                    } flex items-center justify-center h-72 shadow shadow-muted-foreground/10 p-4`}
                  >
                    <div className="w-full flex items-center justify-between gap-4 h-full">
                      <div className="flex-1 h-full flex flex-col justify-between py-4 text-brand-text-primary">
                        <div>
                          <div className="flex gap-1 mb-4">
                            {renderStars(testimonial.rating)}
                          </div>
                          <p className="text-sm mb-4 leading-relaxed">
                            {testimonial.text}
                          </p>
                        </div>
                        <p className="text-sm font-medium leading-relaxed">
                          — {testimonial.author}
                        </p>
                      </div>
                      <div className="flex-shrink-0 h-full w-32 md:w-40">
                        <Image
                          width={160}
                          height={240}
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="h-full w-full object-cover object-top rounded-t-[80px]"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious className="relative top-0 left-0 -translate-x-0 -translate-y-0 border-brand-text-primary/5 text-brand-text-primary bg-[#FF835A] hover:bg-[#FF835A]/75 hover:text-brand-text-primary" />
              <CarouselNext className="relative top-0 right-0 -translate-x-0 -translate-y-0 border-brand-text-primary/5 text-brand-text-primary  bg-[#FF835A] hover:bg-[#FF835A]/75 hover:text-brand-text-primary" />
            </div>
          </Carousel>
        </div>
      </div>

      <Image
        src="/images/testimonial-illustration.png"
        width={400}
        height={800}
        alt="doctor"
        className="absolute top-0 right-0 h-full opacity-50"
      />
    </div>
  );
};

export default Testimonials;
