import { Button } from "@/components/ui/button";
import { Check, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MemberShipsPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-brand-base-dark py-12">
      <div className="w-[95%] md:w-11/12 h-full flex flex-col items-center justify-between gap-16">
        <div className="w-full md:w-10/12 flex flex-col items-center gap-6">
          <h1 className="text-2xl md:text-4xl font-semibold text-center leading-relaxed">
            Glow All Year Long With Exclusive Membership
          </h1>
          <p className="text-brand-text-primary text-sm md:text-base text-center max-w-3xl leading-relaxed">
            Invest in yourself with a membership at Pure Aesthetics MD. Our
            exclusive plans make it easy to maintain radiant skin, youthful
            confidence, and overall wellness all at an affordable price. Enjoy
            priority access, monthly perks, and savings on your favorite
            treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3 w-11/12 md:w-10/12">
          <div className="border border-b-3 border-black rounded-t-full overflow-hidden bg-[#F6F1EB]">
            <div className="aspect-square">
              <Image
                src={"/images/membership-1.png"}
                alt=""
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 flex flex-col justify-between h-[420px]">
              <div className="flex flex-col justify-between h-16">
                <h3 className="text-xl font-semibold">Glow Membership</h3>
                <p className="text-brand-text-primary text-sm md:text-base">
                  Perfect for ongoing skin health
                </p>
              </div>
              <div className="flex flex-col gap-3 border-y border-black py-4">
                <div className="flex items-center gap-2">
                  <Check
                    className="size-5 p-1 bg-brand-base-dark text-brand-text-primary rounded-full"
                    strokeWidth={1.5}
                  />
                  <span className="text-brand-secondary-dark/95 text-xs">
                    1 Signature Facial OR Medical-Grade Peel per month
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check
                    className="size-5 p-1 bg-brand-base-dark text-brand-text-primary rounded-full"
                    strokeWidth={1.5}
                  />
                  <span className="text-brand-secondary-dark/95 text-xs">
                    10% off injectables & advanced treatments
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check
                    className="size-5 p-1 bg-brand-base-dark text-brand-text-primary rounded-full"
                    strokeWidth={1.5}
                  />
                  <span className="text-brand-secondary-dark/95 text-xs">
                    10% off retail skincare product
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check
                    className="size-5 p-1 bg-brand-base-dark text-brand-text-primary rounded-full"
                    strokeWidth={1.5}
                  />
                  <span className="text-brand-secondary-dark/95 text-xs">
                    Complimentary birthday add-on
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-3xl font-semibold font-mono">$99/month</h2>
                <Button className="h-11 text-primary w-full bg-[#F9B9AF] hover:bg-[#F9B9AF]/90 border border-black border-b-5">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
          <div className="border border-b-3 border-black rounded-t-full overflow-hidden bg-[#F6F1EB]">
            <div className="aspect-square">
              <Image
                src={"/images/membership-2.png"}
                alt=""
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 flex flex-col justify-between h-[420px]">
              <div className="flex flex-col justify-between h-16">
                <h3 className="text-xl font-semibold">Radiance Membership</h3>
                <p className="text-brand-text-primary text-xs md:text-sm">
                  Best for clients who want flexibility & value.
                </p>
              </div>
              <div className="flex flex-col gap-3 border-y border-black py-4">
                <div className="flex items-center gap-2">
                  <Check
                    className="size-5 p-1 bg-brand-base-dark text-brand-text-primary rounded-full"
                    strokeWidth={1.5}
                  />
                  <span className="text-brand-secondary-dark/95 text-xs">
                    $199 monthly credit toward any service
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check
                    className="size-5 p-1 bg-brand-base-dark text-brand-text-primary rounded-full"
                    strokeWidth={1.5}
                  />
                  <span className="text-brand-secondary-dark/95 text-xs">
                    15% off injectables, lasers, and body treatments
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check
                    className="size-5 p-1 bg-brand-base-dark text-brand-text-primary rounded-full"
                    strokeWidth={1.5}
                  />
                  <span className="text-brand-secondary-dark/95 text-xs">
                    Complimentary skin analysis every 6 months
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check
                    className="size-5 p-1 bg-brand-base-dark text-brand-text-primary rounded-full"
                    strokeWidth={1.5}
                  />
                  <span className="text-brand-secondary-dark/95 text-xs">
                    Priority booking for events & promotions
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-3xl font-semibold font-mono">$199/month</h2>
                <Button className="h-11 text-primary w-full bg-[#F9B9AF] hover:bg-[#F9B9AF]/90 border border-black border-b-5">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
          <div className="border border-b-3 border-black rounded-t-full overflow-hidden bg-[#F6F1EB]">
            <div className="aspect-square">
              <Image
                src={"/images/membership-3.png"}
                alt=""
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 flex flex-col justify-between h-[420px]">
              <div className="flex flex-col justify-between h-16">
                <h3 className="text-xl font-semibold">Platinum Membership</h3>
                <p className="text-brand-text-primary text-sm md:text-base">
                  For the ultimate self-care experience.
                </p>
              </div>
              <div className="flex flex-col gap-3 border-y border-black py-4">
                <div className="flex items-center gap-2">
                  <Check
                    className="size-5 p-1 bg-brand-base-dark text-brand-text-primary rounded-full"
                    strokeWidth={1.5}
                  />
                  <span className="text-brand-secondary-dark/95 text-xs">
                    $400 monthly credit toward any treatment
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check
                    className="size-5 p-1 bg-brand-base-dark text-brand-text-primary rounded-full"
                    strokeWidth={1.5}
                  />
                  <span className="text-brand-secondary-dark/95 text-xs">
                    20% off all services & skincare products
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check
                    className="size-5 p-1 bg-brand-base-dark text-brand-text-primary rounded-full"
                    strokeWidth={1.5}
                  />
                  <span className="text-brand-secondary-dark/95 text-xs">
                    Free annual facial or peel
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check
                    className="size-5 p-1 bg-brand-base-dark text-brand-text-primary rounded-full"
                    strokeWidth={1.5}
                  />
                  <span className="text-brand-secondary-dark/95 text-xs">
                    Exclusive VIP event invitations
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-3xl font-semibold font-mono">$399/month</h2>
                <Button className="h-11 text-primary w-full bg-[#F9B9AF] hover:bg-[#F9B9AF]/90 border border-black border-b-5">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Button
          className="rounded-none rounded-tr-2xl font-normal px-6 bg-[#FF835A] hover:bg-[#FF835A]/90 text-brand-text-primary"
          asChild
        >
          <Link href="/book-now">
            <PhoneIcon className="size-4 mr-2" strokeWidth={1.5} />
            <span>Join our membership today</span>
          </Link>
        </Button>

        {/* Special offer section */}
        <div className="w-full md:w-10/12 py-16 bg-brand-secondary/5 flex items-center justify-center">
          <div className="w-11/12 md:w-10/12 space-y-10">
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-2xl md:text-4xl font-semibold text-brand-secondary-dark text-center">
                Special Offers
              </h2>
              <p className="text-brand-secondary-dark/95 text-center max-w-2xl">
                At Pure Aesthetics MD, we love rewarding our clients with
                seasonal specials and exclusive promotions. Check back often for
                new offers designed to help you look and feel your best at even
                better prices
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Offer 1 */}
              <div className="rounded-2xl overflow-hidden bg-brand-base border border-black border-b-4">
                <div className="relative h-56">
                  <Image
                    src={"/images/membership-1.png"}
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-3 p-4">
                  <h3 className="text-lg font-semibold text-brand-secondary-dark">
                    Grand Opening Special
                  </h3>
                  <p className="text-brand-secondary-dark/90 text-sm leading-6.5">
                    Enjoy $50 off your first Botox treatment, 50% off your first
                    chemical peel, and a complimentary consultation + skin
                    analysis. (Valid through October 31, 2025)
                  </p>
                </div>
              </div>

              <div className="col-span-1 md:col-span-2 flex flex-col gap-4 md:gap-6">
                <div className="flex items-center gap-4 bg-brand-base border border-black border-b-4 h-32 rounded-2xl overflow-hidden">
                  <Image
                    src={"/images/membership-2.png"}
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-56 h-full object-cover"
                  />
                  <div>
                    <h2>Bundle & Save</h2>
                    <p>Buy 2 Sculptra treatments, Get the 3rd FREE</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-brand-base border border-black border-b-4 h-32 rounded-2xl overflow-hidden">
                  <Image
                    src={"/images/membership-2.png"}
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-56 h-full object-cover"
                  />
                  <div>
                    <h2>Bundle & Save</h2>
                    <p>Buy 2 Sculptra treatments, Get the 3rd FREE</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-brand-base border border-black border-b-4 h-32 rounded-2xl overflow-hidden">
                  <Image
                    src={"/images/membership-2.png"}
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-56 h-full object-cover"
                  />
                  <div>
                    <h2>Bundle & Save</h2>
                    <p>Buy 2 Sculptra treatments, Get the 3rd FREE</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Button
                className="rounded-none rounded-tr-2xl font-normal px-6 bg-[#FF835A] hover:bg-[#FF835A]/90 text-brand-text-primary"
                asChild
              >
                <Link href="/book-now">
                  <PhoneIcon className="size-4" strokeWidth={1.5} />
                  <span>Claim your offer now</span>
                </Link>
              </Button>
              <p className="text-brand-secondary-dark/95 text-center max-w-2xl">
                These specials are available for a limited time only. Don’t miss
                your chance to save while investing in your confidence
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center min-h-[75vh] w-full bg-brand-secondary/5">
          <div className="w-11/12 md:w-10/12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
            <div className="aspect-square col-span-1">
              <Image
                src={"/images/membership-2.png"}
                alt=""
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center gap-6">
              <div className="w-full md:w-9/12 space-y-6">
                <h2 className="text-2xl md:text-4xl font-semibold text-brand-secondary-dark">
                  Why Join Us?
                </h2>
                <ul className="list-disc list-inside text-brand-secondary-dark text-sm md:text-base space-y-4">
                  <li>Save money on services you already love.</li>
                  <li>Stay consistent with treatments for best results.</li>
                  <li>Enjoy exclusive perks and members-only specials.</li>
                  <li>Flexible credits that roll over if unused.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberShipsPage;
