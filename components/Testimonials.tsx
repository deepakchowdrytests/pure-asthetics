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
      text: "I got my B-12 and Myers Cocktail injections done here for a very reasonable price. The clinic is impeccable and the staff was very friendly and courteous. I would highly recommend this location",
      author: "Divya P",
      rating: 5,
    },
    {
      id: 2,
      text: "I had an amazing experience at Pure Aesthetics MD! Dr. Radhika Paluri took the time to understand exactly what I wanted and explained every step of the Botox treatment. The results are subtle yet noticeable — my forehead looks smoother, and I still look completely natural. The clinic is spotless, and everyone is so welcoming. I couldn’t be happier with my results and will definitely be coming back for future treatments!",
      author: "Jessica H",
      rating: 4,
    },
    {
      id: 3,
      text: "I started hair restoration treatments at Pure Aesthetics MD a few months ago and the difference has been incredible. Dr. Paluri customized my treatment plan and made sure I was comfortable the entire time. My hair feels fuller and healthier already! It’s clear they truly care about results and patient confidence. Highly recommend them to anyone considering hair restoration. You’ll be in great hands.",
      author: "Andy P",
      rating: 5,
    },
    {
      id: 4,
      text: "I can’t say enough good things about Pure Aesthetics MD! I joined their medical weight loss program a few months ago, and it’s been life-changing. The doctor took the time to understand my goals and helped design a plan that actually works for me. I’ve lost 15 pounds so far and feel more energetic and confident than I have in years. Highly recommend this clinic to anyone serious about achieving sustainable results!",
      author: "Linda A",
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
        <div className="w-full max-w-5xl mx-auto">
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
                    } flex items-center justify-center h-75 shadow shadow-muted-foreground/10 p-6`}
                  >
                    <div className="w-full flex items-center justify-between gap-4 h-full">
                      <div className="flex-1 h-full flex flex-col justify-between py-4 text-brand-text-primary">
                        <div>
                          <div className="flex gap-1 mb-4">
                            {renderStars(testimonial.rating)}
                          </div>
                          <p className="text-sm mb-4 font-medium leading-6.5">
                            {testimonial.text}
                          </p>
                        </div>
                        <p className="text-sm font-medium leading-relaxed">
                          — {testimonial.author}
                        </p>
                      </div>
                      {/* <div className="flex-shrink-0 h-full w-32 md:w-40">
                        <Image
                          width={160}
                          height={240}
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="h-full w-full object-cover object-top rounded-t-[80px]"
                        />
                      </div> */}
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
