import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const MembershipProgram = () => {
  return (
    <div className="flex flex-col items-center justify-center md:min-h-[60vh] relative border-black">
      <Image
        src={"/img/intro.jpg"}
        alt="intro"
        width={1000}
        height={1000}
        className="object-cover w-full h-full"
      />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-full w-3/5 md:w-1/2 flex flex-col items-center justify-center">
        <div className="w-11/12 md:w-10/12 flex flex-col items-center gap-3 md:gap-8">
          <h2 className="text-base md:text-3xl uppercase font-medium text-brand-secondary-dark text-center">
            Introducing Our Membership Program
          </h2>
          <div className="md:flex flex-col items-center gap-2 hidden">
            <h3 className="text-base md:text-xl uppercase font-medium text-brand-secondary-dark text-center">
              Glow All Year Long
            </h3>
            <p className="text-center text-brand-secondary-dark/80">
              Join our exclusive membership for VIP pricing, priority booking,
              and monthly perks. Perfect for those who want consistent,
              affordable self-care.
            </p>
          </div>
          <div className="md:flex flex-col items-center gap-2 hidden">
            <h3 className="text-base md:text-xl uppercase font-medium text-brand-secondary-dark text-center">
              Membership Benefits:
            </h3>
            <ul className="text-center list-disc flex flex-col items-center gap-1 text-brand-secondary-dark/80">
              <li>Discounts on all services</li>
              <li>Free annual skin analysis</li>
              <li>Members-only promotions</li>
            </ul>
          </div>
          <Button
            className="rounded-none rounded-tr-2xl text-xs md:text-base font-thin md:w-40 bg-[#FF835A] hover:bg-[#FF835A]/90 text-brand-text-primary"
            asChild
            size="sm"
          >
            <Link href="/memberships">
              <span>Learn more</span>
              <ChevronRight className="size-4" strokeWidth={1.5} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MembershipProgram;
