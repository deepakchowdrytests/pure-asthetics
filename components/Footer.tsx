import { Instagram, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Label } from "./ui/label";

const Footer = () => {
  return (
    <footer className="grid grid-cols-5 bg-brand-base-dark">
      <div className="col-span-1 hidden md:block">
        <Image
          src={"/images/footer-illustration-1.png"}
          alt=""
          width={2000}
          height={1200}
          className="w-64 opacity-30"
        />
      </div>
      <div className="col-span-5 md:col-span-4 md:pt-6 pb-3 px-4 md:px-0 relative flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-3 py-4 space-y-8 md:space-y-0 text-brand-secondary-dark">
          <div className="col-span-1 flex items-center">
            <Image
              src={"/logos/logo-1.png"}
              alt=""
              width={2000}
              height={1200}
              className="w-40 md:w-60"
            />
          </div>
          <div className="col-span-1 md:space-y-5 flex md:flex-col md:items-start items-center justify-between ">
            <div className="space-y-2">
              <Label className="font-astrid">Phone</Label>
              <div className="flex items-center gap-1">
                <PhoneIcon className="size-3.5" strokeWidth={1.5} />
                <span className="font-medium leading-relaxed text-[13px]">
                  (603) 800-0333
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="font-astrid">Email</Label>
              <div className="flex items-center gap-1">
                <MailIcon className="size-3.5" strokeWidth={1.5} />
                <span className="font-medium leading-relaxed text-[13px]">
                  info@pureaestheticsmd.org
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-1 space-y-7 md:space-y-5">
            <div className="space-y-2">
              <Label className="font-astrid">Location</Label>
              <div className="flex gap-1.5">
                <MapPinIcon className="size-3.5 mt-1" strokeWidth={1.5} />
                <span className="leading-relaxed font-medium text-[13px]">
                  110 Daniel Webster Hwy, Nashua, <br /> NH 03060 (with Rashda's
                  Beauty Salon)
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="font-astrid">Follow Us</Label>
              <div className="flex items-center gap-1.5">
                <Instagram className="size-3.5 mt-px" strokeWidth={1.5} />
                <Link
                  href={""}
                  className="font-medium leading-relaxed text-[13px]"
                >
                  @Pure_Aesthetics_MD
                </Link>
              </div>
            </div>
          </div>
        </div>

        <nav className="py-6 border-y md:flex items-center justify-between px-6 uppercase hidden font-bold border-brand-primary-light text-brand-secondary-dark font-shippori">
          <Link href={"/"} className="font-semibold leading-relaxed text-sm">
            Home
          </Link>
          <Link
            href={"/about"}
            className="font-semibold leading-relaxed text-sm"
          >
            About Us
          </Link>
          <Link
            href={"/services"}
            className="font-semibold leading-relaxed text-sm"
          >
            Services
          </Link>
          <Link
            href={"/memberships"}
            className="font-semibold leading-relaxed text-sm"
          >
            Membership
          </Link>
          <Link
            href={"/contact"}
            className="font-semibold leading-relaxed text-sm"
          >
            Contact
          </Link>
          <Link
            href={"/careers"}
            className="font-semibold leading-relaxed text-sm"
          >
            Careers
          </Link>
        </nav>

        <div className="flex flex-col md:items-center justify-center gap-7 md:gap-10 pt-2 pb-8">
          <h2 className="font-medium text-xl md:text-3xl text-brand-secondary-dark">
            Our Pure Aesthetics Treatments
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5 space-y-4 md:space-y-0 justify-between w-full">
            <div className="col-span-1 space-y-4">
              <div>
                <Link
                  href={"/services/featured#face-anti-aging"}
                  className="font-astrid font-medium text-brand-secondary-dark"
                >
                  Face & Anti-Aging Services
                </Link>
              </div>
              <ul className="space-y-4 md:space-y-3 text-xs md:text-[13px] text-brand-secondary-dark/85">
                <li>
                  <Link
                    href={"/services/all#botox-injection"}
                    className="font-medium"
                  >
                    Botox® Injections
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/services/all#dermal-fillers"}
                    className="font-medium"
                  >
                    Dermal & Bio Fillers
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/services/all#biostimulators"}
                    className="font-medium"
                  >
                    Sculptra®s
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/services/all#prp-micro-needling"}
                    className="font-medium"
                  >
                    PRP Microneedling
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1 space-y-4">
              <div>
                <Link
                  href={"/services/featured#body-wellness"}
                  className="font-astrid font-medium text-brand-secondary-dark"
                >
                  Body & Wellness Services
                </Link>
              </div>
              <ul className="space-y-4 md:space-y-3 text-xs md:text-[13px] text-brand-secondary-dark/85">
                <li>
                  <Link
                    href={"/services/all#body-sculpting"}
                    className="font-medium"
                  >
                    Body Sculpting & Contouring
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/services/all#weight-loss-solutions"}
                    className="font-medium"
                  >
                    Weight Loss Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/services/all#hair-restoration"}
                    className="font-medium"
                  >
                    Hair Restoration
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/services/all#iv-nutrition"}
                    className="font-medium"
                  >
                    IV Nutrition Therapy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1 space-y-4">
              <div>
                <Link
                  href={"/services/featured#laser-treatments"}
                  className="font-astrid font-medium text-brand-secondary-dark"
                >
                  Laser Treatments
                </Link>
              </div>
              <ul className="space-y-4 md:space-y-3 text-xs md:text-[13px] text-brand-secondary-dark/85">
                <li>
                  <Link
                    href={"/services/all#laser-hair-removal"}
                    className="font-medium"
                  >
                    Laser Hair Removal
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/services/all#laser-skin-rejuvenation"}
                    className="font-medium"
                  >
                    Laser Skin Rejuvenation
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/services/all#laser-tattoo-pigment-removal"}
                    className="font-medium"
                  >
                    Laser Tattoo & Pigment Removal
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1 space-y-4">
              <div>
                <Link
                  href={"/services/featured#skin-care"}
                  className="font-astrid font-medium text-brand-secondary-dark"
                >
                  Skin Care Services
                </Link>
              </div>
              <ul className="space-y-4 md:space-y-3 text-xs md:text-[13px] text-brand-secondary-dark/85">
                <li>
                  <Link
                    href={"/services/all#rf-microneedling"}
                    className="font-medium"
                  >
                    RF Microneedling
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/services/all#medical-grade-acid-peeling"}
                    className="font-medium"
                  >
                    Medical Grade Acid Peels
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/services/all#acne-treatment"}
                    className="font-medium"
                  >
                    Acne Treatment
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1 space-y-4">
              <div>
                <Link
                  href={"/services/featured#womens-health"}
                  className="font-astrid font-medium text-brand-secondary-dark"
                >
                  Women’s Health Services
                </Link>
              </div>
              <ul className="space-y-4 md:space-y-3 text-xs md:text-[13px] text-brand-secondary-dark/85">
                <li>
                  <Link
                    href={"/services/all#urinary-incontinence-treatment"}
                    className="font-medium"
                  >
                    Urinary Incontinence Treatment
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/services/all#intimacy-wellness"}
                    className="font-medium"
                  >
                    Intimacy Wellness
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between h-4 md:pr-4">
          <Link href={"/"} className="text-[13px] font-bold text-[#FF835A]">
            Terms & conditions
          </Link>
          <p className="text-[13px] font-bold text-[#FF835A] hidden md:block">
            ©Pure Aesthetics MD 2025. All rights reserved.
          </p>
          <Link href={"/"} className="text-[13px] font-bold text-[#FF835A]">
            Privacy Policy
          </Link>
        </div>

        <Image
          src={"/images/footer-illustration-2.png"}
          alt=""
          width={2000}
          height={1200}
          className="w-96 absolute bottom-0 right-0 opacity-50"
        />
      </div>
    </footer>
  );
};

export default Footer;
