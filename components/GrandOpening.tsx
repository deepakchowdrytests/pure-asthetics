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
          NEW YEAR SPECIALS
        </h2>
        <div className="h-48 w-full">
          <Image
            src={"/img/new-year.jpg"}
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
              For a limited time, enjoy exclusive New Year offers
            </p>
            <ul className="list-disc list-inside text-center text-brand-secondary-dark/80 space-y-4">
              <div className="flex flex-col items-start gap-1">
                <li className="font-bold">
                  Holiday Glow Botox + Filler Special Combo
                </li>
                <p className="pl-6">
                  {" "}
                  Botox for $5/unit, with purchase 1 syringe filler for
                  face/lips for $499 (regular price $599/syringe)
                </p>
              </div>
              <div className="flex flex-col items-start gap-1">
                <li className="font-bold">Holiday Renewal Package</li>
                <p className="pl-6">
                  Perfect Derma Peel for $149, when you get a minimum of 40
                  units of Botox at $7/unit
                </p>
              </div>

              <div className="flex flex-col items-start gap-1">
                <li className="font-bold">Brighten & Tighten Trio Package</li>
                <p className="pl-6">
                  One Radio Frequency Microneedling + Salmon DNA Session + 1 PRP
                  Boost Session for $ 399
                </p>
              </div>

              <div className="flex flex-col items-start gap-1">
                <li className="font-bold">Holiday Lift & Plump Package</li>
                <p className="pl-6">
                  1 syringe Mid-Face Filler + 1 syringe Lip Filler for $999
                  (regular price $1,299)
                </p>
              </div>

              <div className="flex flex-col items-start gap-1">
                <li className="font-bold">Slim & Sculpt Holiday Package</li>
                <p className="pl-6">
                  4 Weeks GLP-1 Injections + 8 EMS Abdomen Sessions + B12 shot
                  for $399($730 value)
                </p>
                <span className="pl-7">Or</span>
                <p className="pl-6">
                  12 Weeks GLP-1 Injections + 8 EMS Abdomen Sessions + B12 shot
                  for $799($1,030 value)
                </p>
              </div>

              <div className="flex flex-col items-start gap-1">
                <li className="font-bold">
                  Glass Skin Salmon DNA Deluxe Package
                </li>
                <p className="pl-6">
                  Microneedling with Salmon DNA sessions for $199/session or
                  $499/3 pack
                </p>
              </div>

              <div className="flex flex-col items-start gap-1">
                <li className="font-bold">Laser Resurfacing</li>
                <p className="pl-6">
                  Single Session: $199; 3-Pack: $499 (regular price $799)
                </p>
              </div>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-lg md:text-2xl font-medium text-brand-secondary-dark text-center">
              Valid thru Jan 31, 2026
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
