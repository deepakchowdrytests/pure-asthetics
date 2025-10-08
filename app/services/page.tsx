"use client";

import { services } from "@/components/FeaturedServices";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PhoneIcon } from "@/lib/icons";
import { Calendar, ChevronRight, PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Drop this file at app/services/page.tsx (Next.js App Router)
export default function ServicesPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#fff7f6]">
      {/* FEATURED SERVICES */}
      <section className="flex items-center justify-center min-h-screen py-12 bg-[#969B59]">
        <div className="w-11/12 flex flex-col items-center justify-center gap-8 md:gap-16">
          <h1 className="text-2xl md:text-6xl text-center text-white">
            Premium Skincare Services
            <br />
            for Radiant Results
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary-dark w-full px-4">
            Featured Services
          </h2>

          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            className=""
          >
            <CarouselContent className="gap-0">
              {services.map((s, i) => (
                <CarouselItem
                  key={s.id}
                  className="basis-full md:basis-1/4 cursor-pointer"
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
                              : "bg-[#FCF3EE]"
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
            <CarouselPrevious className="size-9 bg-[#FFEFD7] border-none text-brand-text-primary translate-x-14 translate-y-3" />
            <CarouselNext className="size-9 bg-[#FFEFD7] border-none text-brand-text-primary -translate-x-14 translate-y-3" />
          </Carousel>

          <div className="mt-10 flex flex-col gap-8 items-center justify-center">
            <p className="text-center max-w-3xl text-base md:text-xl text-white leading-relaxed">
              At Pure Aesthetics MD, we offer a wide range of physician-led
              aesthetic and wellness treatments designed to help you look and
              feel your best safely, naturally, and affordably.
            </p>
            <Button className="rounded-none rounded-tr-2xl font-normal px-7 bg-white hover:bg-brand-secondary-dark/85 text-brand-text-primary hover:text-white">
              <Link href="/services/featured">
                <span>View all services</span>
              </Link>
              <ChevronRight className="size-4" strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section
        id="faq"
        className="flex items-center justify-center bg-[#fff7f6] w-full py-12 min-h-screen"
      >
        <div className="w-11/12 md:w-10/12 flex flex-col items-center">
          <h2 className="mb-8 text-center text-brand-secondary-dark text-3xl">
            Frequently Asked Questions
          </h2>

          <div className="grid gap-5 md:grid-cols-2 w-full">
            {faqs.map((col, idx) => (
              <div key={idx} className="space-y-4">
                {col.map((q) => (
                  <Card
                    key={q.q}
                    className="border-0 bg-[#FEE0D9] shadow-sm shadow-muted rounded-none rounded-tr-[48px] py-3.5"
                  >
                    <CardContent className="p-0">
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1" className="border-0">
                          <AccordionTrigger className="px-5 py-3 text-left hover:no-underline flex items-center gap-2 justify-start text-brand-text-primary [&[data-state=open]>svg]:rotate-180">
                            <PlusIcon className="size-4" />
                            <span className="font-medium font-astrid">
                              {q.q}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="font-shippori px-5 pb-5 text-sm text-brand-text-primary leading-relaxed pt-1.5">
                            {q.a}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIG CTA BANNER */}
      <section className="flex items-center justify-center w-full rounded-tr-[100px] md:rounded-tr-[150px] bg-[#512729] py-6 md:py-12 text-[#FF835A]">
        <div className="w-11/12 md:w-10/12 flex flex-col items-center space-y-1">
          <h3 className="text-2xl md:text-4xl break-words text-wrap">
            Not sure which treatment is right for you?
          </h3>
          <p className="max-w-2xl text-sm md:text-base opacity-90 leading-relaxed">
            Schedule a consultation and let us create a personalized plan just
            for you.
          </p>
          <div className="mt-6 md:mt-10 w-full flex items-center justify-center">
            <Button className="rounded-none rounded-tr-2xl font-normal px-7 bg-[#FF835A] hover:bg-[#FF835A]/85 text-brand-text-primary w-full md:w-auto">
              <Link
                href={"tel:+16038000333"}
                className="flex items-center gap-2"
              >
                <PhoneIcon width={20} height={20} />
                <span>Book a consultation now</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

const faqs: { q: string; a: string }[][] = [
  [
    {
      q: "Are treatments at Pure Aesthetics MD safe?",
      a: "Yes. All of our services are performed or overseen by a board‑certified physician using FDA‑approved products and technology. Your safety and comfort are always our priorities.",
    },
    {
      q: "How much downtime should I expect?",
      a: "Most treatments are non‑surgical and involve little to no downtime. We’ll outline aftercare clearly during your consultation so you know what to expect based on your personalized plan.",
    },
    {
      q: "How soon will I see results?",
      a: "It depends on the treatment. Some procedures show immediate results, while others appear gradually over several weeks. We’ll set realistic expectations during your visit.",
    },
    {
      q: "Do treatments hurt?",
      a: "Most treatments involve only minimal discomfort. We use topical numbing agents and advanced techniques to ensure you’re as comfortable as possible.",
    },
    {
      q: "Do you offer financing or payment plans?",
      a: "Yes. We provide flexible options, including memberships, package pricing, and financing through third‑party partners.",
    },
  ],
  [
    {
      q: "Will my results look natural?",
      a: "Absolutely. Our philosophy is to enhance your natural beauty—not change who you are. Each treatment plan is customized to deliver subtle, refreshed results that look like you, only better.",
    },
    {
      q: "How soon will I see results?",
      a: "Many clients notice improvements within days, with best results developing over a few weeks depending on the service.",
    },
    {
      q: "How long do results last?",
      a: "Longevity varies by treatment. Fillers last 6–18 months, neuromodulators 3–4 months, lasers several months to years with maintenance. We’ll guide you on upkeep.",
    },
    {
      q: "How much do treatments cost?",
      a: "Pricing is personalized based on treatment type and area(s). You’ll receive a clear, tailored quote during your consultation, along with any seasonal promotions or membership savings.",
    },
    {
      q: "What if I’m not sure which treatment is right for me?",
      a: "Book a consultation. Our physician will evaluate your goals and recommend a personalized plan crafted just for you.",
    },
  ],
];
