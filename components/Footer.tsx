import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Label } from "./ui/label";

const Footer = () => {
  return (
    <footer className="grid grid-cols-5 bg-brand-base-dark">
      <div className="col-span-1 hidden md:block">
        <Image
          src={"/images/footer-illustration.png"}
          alt=""
          width={2000}
          height={1200}
          className="w-64"
        />
      </div>
      <div className="col-span-5 md:col-span-4 md:pt-6 pb-3 px-4 md:px-0 relative flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-3 py-4 space-y-8 md:space-y-0 text-brand-secondary-dark">
          <div className="col-span-1 flex items-center">
            <Image
              src={"/images/logo-1.png"}
              alt=""
              width={2000}
              height={1200}
              className="w-40 md:w-60"
            />
          </div>
          <div className="col-span-1 md:space-y-5 flex md:flex-col md:items-start items-center justify-between ">
            <div className="space-y-2">
              <Label className="font-astrid">Phone</Label>
              <p className="flex items-center gap-1 text-[13px]">
                <PhoneIcon className="size-3.5" strokeWidth={1.5} />
                <span className="font-mono">123-456-7890</span>
              </p>
            </div>
            <div className="space-y-2">
              <Label className="font-astrid">Email</Label>
              <p className="flex items-center gap-1 text-[13px]">
                <MailIcon className="size-3.5" strokeWidth={1.5} />
                <span className="">info@pureaestheticsmd.org</span>
              </p>
            </div>
          </div>
          <div className="col-span-1 space-y-7 md:space-y-5">
            <div className="space-y-2">
              <Label className="font-astrid">Location</Label>
              <p className="flex items-center gap-1 text-[13px]">
                <MapPinIcon className="size-3.5" strokeWidth={1.5} />
                <span className="">123 Main St, Anytown, USA</span>
              </p>
            </div>
            <div className="space-y-2">
              <Label className="font-astrid">Follow Us</Label>
              <p className="flex items-center gap-4 text-[13px]">
                <Link href={""}>Facebook</Link>
                <Link href={""}>Instagram</Link>
                <Link href={""}>Twitter</Link>
              </p>
            </div>
          </div>
        </div>

        <nav className="py-6 border-y md:flex items-center justify-between px-6 uppercase hidden font-medium border-brand-primary-light text-brand-secondary-dark">
          <Link href={""}>Home</Link>
          <Link href={""}>About Us</Link>
          <Link href={""}>Services</Link>
          <Link href={""}>Membership</Link>
          <Link href={""}>Contact</Link>
          <Link href={""}>Careers</Link>
        </nav>

        <div className="flex flex-col md:items-center justify-center gap-7 md:gap-10 pt-2 pb-8">
          <h2 className="font-medium text-xl md:text-3xl text-brand-secondary-dark">
            Our Pure Aesthetics Treatments
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-0 space-y-4 md:space-y-0 justify-between w-full">
            <ul className="col-span-1 text-[13px] space-y-2 font-medium text-brand-secondary-dark/85">
              <Label className="mb-3.5 leading-5 font-semibold text-brand-secondary-dark">
                Face & Anti-Aging Services
              </Label>
              <li>Botox® Injections</li>
              <li>Dermal & Bio Fillers</li>
              <li>Sculptra®s</li>
              <li>PRP Microneedling</li>
            </ul>
            <ul className="col-span-1 text-[13px] space-y-2 font-medium text-brand-secondary-dark/85">
              <Label className="mb-3.5 leading-5 font-semibold text-brand-secondary-dark">
                Body & Wellness Services
              </Label>
              <li>Body Sculpting & Contouring</li>
              <li>Weight Loss Solutions</li>
              <li>Hair Restoration</li>
              <li>IV Nutrition Therapy</li>
            </ul>
            <ul className="col-span-1 text-[13px] space-y-2 font-medium text-brand-secondary-dark/85">
              <Label className="mb-3.5 leading-5 font-semibold text-brand-secondary-dark">
                Laser Treatments
              </Label>
              <li>Laser Hair Removal </li>
              <li>Laser Skin Rejuvenation</li>
              <li>Laser Tattoo & Pigment</li>
              <li>Removal</li>
            </ul>
            <ul className="col-span-1 text-[13px] space-y-2 font-medium text-brand-secondary-dark/85">
              <Label className="mb-3.5 leading-5 font-semibold text-brand-secondary-dark">
                Skin Care Services
              </Label>
              <li>RF Microneedling</li>
              <li>Medical Grade Acid Peels</li>
              <li>Acne Treatment</li>
            </ul>
            <ul className="col-span-1 text-[13px] space-y-2 font-medium text-brand-secondary-dark/85">
              <Label className="mb-3.5 leading-5 font-semibold text-brand-secondary-dark">
                Women’s Health Services
              </Label>
              <li>Urinary Incontinence</li>
              <li>Treatment</li>
              <li>Intimacy Wellness</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between h-4 md:pr-4">
          <Link href={"/"} className="text-[13px] text-brand-secondary-dark">
            Terms & conditions
          </Link>
          <h4 className="text-[13px] text-brand-secondary-dark hidden md:block">
            ©Pure Aesthetics MD 2025. All rights reserved.
          </h4>
          <Link href={"/"} className="text-[13px] text-brand-secondary-dark">
            Privacy Policy
          </Link>
        </div>

        <Image
          src={"/images/footer-illustration-2.png"}
          alt=""
          width={2000}
          height={1200}
          className="w-96 absolute bottom-0 right-0 opacity-75"
        />
      </div>
    </footer>
  );
};

export default Footer;
