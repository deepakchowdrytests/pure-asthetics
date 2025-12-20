import { PhoneIcon } from "@/lib/icons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const GrandOpening = () => {
  return (
    <div
      id="promotions"
      className="flex flex-col items-center justify-center min-h-[90vh] bg-[#FAD1B2] py-12"
    >
      <div className="w-11/12 flex flex-col items-center gap-6">
        <h2 className="text-2xl md:text-4xl font-medium text-brand-secondary-dark">
          HOLIDAY GLOW SPECIALS
        </h2>
        <div className="h-48 w-full">
          <Image
            src={"/img/special-1.jpg"}
            alt=""
            width={1000}
            height={1000}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-lg md:text-2xl font-medium text-brand-secondary-dark text-center">
              Celebrate the Season with Beauty, Confidence, & Cheer
            </h3>
            <p className="text-base text-brand-secondary-dark/80 text-center">
              For a limited time, enjoy exclusive Grand Opening offers
            </p>
            <ul className="list-disc list-inside text-center text-brand-secondary-dark/80 space-y-2">
              <li>40% Off Body Sculpting & Contouring Services</li>
              <li>40% Off EM Pelvis Treatments</li>
              <li>15% Off IV Nutrition Therapies</li>
              <li>15% Off Laser Hair Removal Treatments</li>
              <li>20% Off Other Services</li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-lg md:text-2xl font-medium text-brand-secondary-dark text-center">
              Valid thru November 30, 2025
            </h3>
            <p className="text-base text-brand-secondary-dark/80 text-center">
              Don’t miss these special savings reserve your spot today!
            </p>
            <Button
              className="rounded-none rounded-tr-2xl font-thin px-8 bg-[#FF835A] hover:bg-[#FF835A]/90 text-brand-text-primary"
              asChild
            >
              <Link href="tel:+16038000333">
                <PhoneIcon width={16} height={16} />
                <span>Claim your offer today</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrandOpening;
