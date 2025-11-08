"use client";

import { Button } from "@/components/ui/button";
import { PhoneIcon } from "@/lib/icons";
import {
  bodyAndWellnessTreatments,
  faceAntiAgingtreatments,
  intimacyTreatments,
  laserTreatments,
  skinCareTreatments,
} from "@/lib/services";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, Suspense } from "react";

export type Treatment = {
  id: string;
  title: string;
  tagline: string;
  imageSrc: string;
  imageAlt: string;
  ctaText: string;
  ctaHref: string;
  imageOnRight?: boolean; // desktop position
  sections: Array<
    | { type: "p"; heading: string; text: string }
    | { type: "ul"; heading: string; items: string[] }
  >;
};

/** Reusable section with left/right image on desktop and stacked on mobile */
const TreatmentSection: React.FC<{ data: Treatment }> = ({ data }) => {
  const imgOrder = data.imageOnRight ? "md:order-2" : "md:order-1";
  const contentOrder = data.imageOnRight ? "md:order-1" : "md:order-2";

  return (
    <>
      <div
        id={data.id.startsWith("#") ? data.id.substring(1) : data.id}
        aria-labelledby={`${data.id}-title`}
        className="h-16"
      ></div>
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
        {/* Image + title/cta column */}
        <div
          className={`flex flex-col items-center col-span-1 gap-10 ${imgOrder}`}
        >
          <div className="aspect-square md:size-80 rounded-3xl overflow-hidden">
            <Image
              src={data.imageSrc}
              alt={data.imageAlt}
              width={640}
              height={640}
              priority={false}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col items-center space-y-2.5 text-center">
            <h3 className="text-2xl font-medium text-brand-text-primary">
              {data.title}
            </h3>
            <p className="text-brand-text-primary">{data.tagline}</p>
          </div>

          <Button
            className="rounded-none rounded-tr-2xl font-thin px-6 bg-[#FF835A] hover:bg-[#FF835A]/90 text-brand-text-primary"
            asChild
          >
            <Link href={"tel:+16038000333"} aria-label={data.ctaText}>
              <PhoneIcon width={16} height={16} />
              <span className="">{data.ctaText}</span>
            </Link>
          </Button>
        </div>

        {/* Content column */}
        <div
          className={`col-span-1 md:col-span-2 flex justify-center ${contentOrder}`}
        >
          <div className="w-11/12 md:w-10/12 space-y-10">
            <h2
              id={`${data.id}-title`}
              className="text-4xl font-medium text-brand-text-primary text-center md:text-left"
            >
              {data.title}
            </h2>

            {data.sections.map((block, i) =>
              block.type === "p" ? (
                <div key={i} className="space-y-2.5">
                  <h3 className="text-xl text-brand-text-primary font-medium">
                    {block.heading}
                  </h3>
                  <p className="text-brand-text-primary leading-relaxed text-sm whitespace-pre-line">
                    {block.text.includes("\n") ? (
                      <>
                        <span className="font-semibold leading-8">
                          {block.text.split("\n")[0]}
                        </span>
                        {"\n" + block.text.split("\n").slice(1).join("\n")}
                      </>
                    ) : (
                      block.text
                    )}
                  </p>
                </div>
              ) : (
                <div key={i} className="space-y-2.5">
                  <h3 className="text-xl text-brand-text-primary font-medium">
                    {block.heading}
                  </h3>
                  <ul className="list-disc text-brand-text-primary text-sm pl-5 space-y-4">
                    {block.items.map((li, idx) => (
                      <li key={idx}>{li}</li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

const ServicesPageContent = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Enable smooth scrolling for the entire document
    document.documentElement.style.scrollBehavior = "smooth";

    const serviceId = searchParams.get("service");
    if (serviceId) {
      // Add a longer delay to ensure the page has fully rendered and images loaded
      setTimeout(() => {
        scrollToService(serviceId);
      }, 500);
    }

    // Cleanup function to reset scroll behavior when component unmounts
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, [searchParams]);

  const scrollToService = (serviceId: string) => {
    const targetId = serviceId.startsWith("#") ? serviceId.slice(1) : serviceId;
    const element = document.getElementById(targetId);

    if (element) {
      // You can tune this to match your sticky header height
      const headerOffset = 200;

      // Get absolute offsetTop instead of bounding rect (more stable)
      const offsetPosition = element.offsetTop - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#FAD1B2]">
      <div className="w-full flex justify-center">
        <div className="w-11/12 md:w-11/12 flex flex-col items-center py-16">
          <h1 className="text-4xl font-medium text-brand-text-primary">
            Face And Anti Aging
          </h1>

          {faceAntiAgingtreatments.map((t) => (
            <TreatmentSection key={t.id} data={t} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center bg-[#F7E2D2]">
        <div className="w-11/12 md:w-11/12 flex flex-col items-center py-16">
          <h1 className="text-4xl font-medium text-brand-text-primary">
            Body & Wellness Treatments
          </h1>

          {bodyAndWellnessTreatments.map((t) => (
            <TreatmentSection key={t.id} data={t} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center bg-[#FFF2E8]">
        <div className="w-11/12 md:w-11/12 flex flex-col items-center py-16">
          <h1 className="text-4xl font-medium text-brand-text-primary">
            Laser Treatments
          </h1>

          {laserTreatments.map((t) => (
            <TreatmentSection key={t.id} data={t} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center bg-[#FFF5ED]">
        <div className="w-11/12 md:w-11/12 flex flex-col items-center py-16">
          <h1 className="text-4xl font-medium text-brand-text-primary">
            Skin Care Wellness
          </h1>

          {skinCareTreatments.map((t) => (
            <TreatmentSection key={t.id} data={t} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center bg-[#FFFAF6]">
        <div className="w-11/12 md:w-11/12 flex flex-col items-center py-16">
          <h1 className="text-4xl font-medium text-brand-text-primary">
            Women’s Health Treatments
          </h1>

          {intimacyTreatments.map((t) => (
            <TreatmentSection key={t.id} data={t} />
          ))}
        </div>
      </div>
    </main>
  );
};

const FaceAndAntiAgingPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicesPageContent />
    </Suspense>
  );
};

export default FaceAndAntiAgingPage;
