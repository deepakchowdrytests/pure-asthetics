import {
  DiamondIcon,
  EyeDropperIcon,
  ShieldIcon,
  TestTubeIcon,
} from "@/lib/icons";
import { ChevronRightIcon, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    title: "Physician-led expertise",
    description:
      "Every treatment plan is developed and overseen by a qualified medical doctor, ensuring safety and precision.",
    icon: <TestTubeIcon width={40} height={40} />,
    bg: "bg-[#F9B9AF]",
  },
  {
    title: "Personalized, natural results",
    description:
      "We focus on enhancing your features not changing them with treatments designed to bring out your best self.",
    icon: <EyeDropperIcon width={40} height={40} />,
    bg: "bg-[#F6D6D1]",
  },
  {
    title: "Advanced, medical grade technology",
    description:
      "We use only FDA-approved, medical-grade devices and products for optimal results.",
    icon: <ShieldIcon width={40} height={40} />,
    bg: "bg-[#F6D6D1]",
  },
  {
    title: "Affordable Luxury",
    description:
      "High-quality care should be accessible. That’s why we offer competitive pricing and membership programs.",
    icon: <DiamondIcon width={36} height={36} />,
    bg: "bg-[#F5F5F5]",
  },
];

const Services = () => {
  return (
    <section className="flex items-center py-15 md:py-0 min-h-screen justify-center bg-[#FFE4D7]">
      <div className="flex flex-col gap-12 w-10/12">
        <div className="flex flex-col items-center gap-6">
          <Sparkles className="size-5" strokeWidth={1.5} />
          <div className="text-center">
            <h3 className="text-4xl font-medium text-brand-text-primary mb-4">
              The ultimate destination for a natural & radiant beauty
            </h3>
            <p className="text-lg text-brand-text-primary max-w-3xl text-center">
              At Pure Aesthetics, we boost confidence with advanced,
              non-invasive solutions from body contouring and Botox® to laser
              hair removal and weight loss.
            </p>
          </div>
          <Button className="rounded-none rounded-tr-2xl font-normal w-40 bg-brand-secondary hover:bg-brand-secondary/85 text-white">
            <span>Learn more</span>
            <ChevronRightIcon className="size-4" strokeWidth={1.5} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-brand-text-primary">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-full py-24 px-6 flex flex-col items-center gap-6 ${service.bg}`}
            >
              {service.icon}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-brand-text-primary text-center">
                  {service.title}
                </h3>
                <p className="text-brand-text-secondary text-sm text-center leading-5">
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
