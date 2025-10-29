import {
  DiamondIcon,
  EyeDropperIcon,
  ShieldIcon,
  TestTubeIcon,
} from "@/lib/icons";
import { ChevronRightIcon, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const services = [
  {
    title: "Physician-led expertise",
    description:
      "Every treatment plan is developed and overseen by a qualified medical doctor, ensuring safety and precision.",
    icon: <TestTubeIcon width={48} height={48} />,
    bg: "bg-[#F9B9AF]",
  },
  {
    title: "Personalized, natural results",
    description:
      "We focus on enhancing your features not changing them with treatments designed to bring out your best self.",
    icon: <EyeDropperIcon width={48} height={48} />,
    bg: "bg-[#F6D6D1]",
  },
  {
    title: "Advanced, medical grade technology",
    description:
      "We use only FDA-approved, medical-grade devices and products for optimal results.",
    icon: <ShieldIcon width={48} height={48} />,
    bg: "bg-[#F6D6D1]",
  },
  {
    title: "Affordable Luxury",
    description:
      "High-quality care should be accessible. That’s why we offer competitive pricing and membership programs.",
    icon: <DiamondIcon width={42} height={42} />,
    bg: "bg-[#F5F5F5]",
  },
];

const Services = () => {
  return (
    <section className="flex items-center py-11 justify-center bg-[#FFE4D7]">
      <div className="flex flex-col gap-12 w-10/12">
        <div className="flex flex-col items-center gap-8">
          <Sparkles
            className="size-7 text-brand-text-primary fill-brand-text-primary"
            strokeWidth={0.75}
          />
          <div className="flex flex-col items-center gap-3.5">
            <h3 className="text-2xl md:text-4xl font-medium text-brand-text-primary text-center">
              The ultimate destination for a natural & radiant beauty
            </h3>
            <p className="text-base md:text-lg text-brand-text-primary max-w-3xl text-center leading-relaxed">
              At Pure Aesthetics, we boost confidence with advanced,
              non-invasive solutions from body contouring and Botox® to laser
              hair removal and weight loss.
            </p>
          </div>
          <Button className="rounded-none rounded-tr-2xl font-normal w-40 bg-brand-secondary hover:bg-brand-secondary/85 text-white">
            <Link href={"/about"} className="flex items-center gap-1">
              <span>Learn more</span>
              <ChevronRightIcon className="size-4" strokeWidth={1.5} />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-brand-text-primary">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-full py-30 md:py-20 px-4 flex flex-col items-center gap-6 ${service.bg}`}
            >
              {service.icon}
              <div className="space-y-3">
                <h3 className="text-base font-medium text-brand-text-primary text-center">
                  {service.title}
                </h3>
                <p className="text-brand-text-secondary font-normal text-sm text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
