"use client";
import { PhoneIcon } from "@/lib/icons";
import { ChevronDown, TextAlignEnd, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/memberships", label: "Memberships" },
    { href: "/contact", label: "Contact Us" },
    { href: "/careers", label: "Careers" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 flex items-center justify-center mx-auto z-50 transition-all duration-300 ${scrolled
          ? "bg-[#FFEFD7] h-12 md:h-16 w-[95%] md:w-11/12 translate-y-2 rounded-lg md:rounded-xl"
          : "bg-brand-base-dark h-14 md:h-18 w-full"
          }`}
      >
        <div className="w-[95%] md:w-11/12 h-full flex items-center justify-between">
          <Link href="/" className="z-50 min-w-40 ml-2 md:ml-0">
            {scrolled ? (
              <Image
                src={"/logos/logo-3.png"}
                alt="Pure Aesthetics MD"
                width={160}
                height={60}
                className="w-8 md:w-10 object-cover"
              />
            ) : (
              <Image
                src={"/logos/logo-1.png"}
                alt="Pure Aesthetics MD"
                width={160}
                height={60}
                className="w-28 md:w-40 object-cover"
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={`hidden md:flex items-center space-x-8 text-sm text-brand-text-primary font-shippori font-medium`}
          >
            {navLinks.map((link) => (
              <Fragment key={link.href}>
                {link.href === "/services" ? (
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div
                        className="hover:text-brand-text-primary/75 transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer"
                      >
                        {link.label}
                        <ChevronDown className="size-4 mt-[3px]" strokeWidth={1.5} />
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="py-0 bg-brand-base-dark">
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="hover:text-brand-text-primary/75 transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer hover:no-underline">
                            Face & Anti-Aging Services
                            <ChevronDown className="size-3.5 mt-[3px]" strokeWidth={1.5} />
                          </AccordionTrigger>
                          <AccordionContent className="pl-3 space-y-3">
                            <Link href="/services/all#botox-injection" className="hover:text-brand-text-primary/75 transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer hover:no-underline text-xs">
                              Botox® Injections
                            </Link>
                            <Link href="/services/all#dermal-fillers" className="hover:text-brand-text-primary/75 transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer hover:no-underline text-xs">
                              Dermal & Bio Fillers
                            </Link>
                            <Link href="/services/all#biostimulators" className="hover:text-brand-text-primary/75 transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer hover:no-underline text-xs">
                              Biostimulators : Radiesse® & Sculptra®
                            </Link>
                            <Link href="/services/all#prp-micro-needling" className="hover:text-brand-text-primary/75 transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer hover:no-underline text-xs">
                              PRP Microneedling
                            </Link>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger className="hover:text-brand-text-primary/75 transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer hover:no-underline">
                            Body & Wellness Services
                            <ChevronDown className="size-3.5 mt-[3px]" strokeWidth={1.5} />
                          </AccordionTrigger>
                          <AccordionContent className="pl-3 space-y-3">
                            <Link href="/services/all#body-sculpting" className="hover:text-brand-text-primary/75 transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer hover:no-underline text-xs">
                              Body Sculpting & Contouring
                            </Link>
                            <Link href="/services/all#weight-loss-solutions" className="hover:text-brand-text-primary/75 transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer hover:no-underline text-xs">
                              Weight Loss Solutions
                            </Link>
                            <Link href="/services/all#hair-restoration" className="hover:text-brand-text-primary/75 transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer hover:no-underline text-xs">
                              Hair Restoration
                            </Link>
                            <Link href="/services/all#iv-nutrition" className="hover:text-brand-text-primary/75 transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer hover:no-underline text-xs">
                              IV Nutrition Therapy
                            </Link>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                          <AccordionTrigger className="hover:text-brand-text-primary/75 transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer hover:no-underline">
                            Laser Treatments
                            <ChevronDown className="size-3.5 mt-[3px]" strokeWidth={1.5} />
                          </AccordionTrigger>
                          <AccordionContent className="pl-3 space-y-3">
                            <Link href="/services/all#laser-hair-removal" className="hover:text-brand-text-primary/75 transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer hover:no-underline text-xs">
                              Laser Hair Removal
                            </Link>
                            <Link href="/services/all#laser-skin-rejuvenation" className="hover:text-brand-text-primary/75 transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer hover:no-underline text-xs">
                              Laser Skin Rejuvenation
                            </Link>
                            <Link href="/services/all#laser-tattoo-pigment-removal" className="hover:text-brand-text-primary/75 transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer hover:no-underline text-xs">
                              Laser Tattoo & Pigment Removal
                            </Link>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                          <AccordionTrigger className="hover:text-brand-text-primary/75 transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer hover:no-underline">
                            Skin Care Services
                            <ChevronDown className="size-3.5 mt-[3px]" strokeWidth={1.5} />
                          </AccordionTrigger>
                          <AccordionContent className="pl-3 space-y-3">
                            <Link href="/services/all#rf-microneedling" className="hover:text-brand-text-primary/75 transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer hover:no-underline text-xs">
                              RF Microneedling
                            </Link>
                            <Link href="/services/all#medical-grade-acid-peeling" className="hover:text-brand-text-primary/75 transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer hover:no-underline text-xs">
                              Medical Grade Acid Peels
                            </Link>
                            <Link href="/services/all#acne-treatment" className="hover:text-brand-text-primary/75 transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer hover:no-underline text-xs">
                              Acne Treatment
                            </Link>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                          <AccordionTrigger className="hover:text-brand-text-primary/75 transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer hover:no-underline">
                            Women&apos;s Health Services
                            <ChevronDown className="size-3.5 mt-[3px]" strokeWidth={1.5} />
                          </AccordionTrigger>
                          <AccordionContent className="pl-3 space-y-3">
                            <Link href="/services/all#urinary-incontinence-treatment" className="hover:text-brand-text-primary/75 transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer hover:no-underline text-xs">
                              Urinary Incontinence Treatment
                            </Link>
                            <Link href="/services/all#intimacy-wellness" className="hover:text-brand-text-primary/75 transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer hover:no-underline text-xs">
                              Intimacy Wellness
                            </Link>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </HoverCardContent>
                  </HoverCard>
                ) : (
                  <Link
                    href={link.href}
                    className="hover:text-brand-text-primary/75 transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </Link>
                )}
              </Fragment>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              className="rounded-none rounded-tr-2xl font-normal px-5 bg-[#FF835A] hover:bg-[#FF835A]/90 text-brand-text-primary text-xs"
              asChild
            >
              <Link href="tel:+16038000333">
                <PhoneIcon width={16} height={16} />
                <span>Book your consultation now</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X
                strokeWidth={1.5}
                className="size-5 text-brand-text-primary transition-all duration-200"
              />
            ) : (
              <TextAlignEnd
                strokeWidth={1.5}
                className="size-5 text-brand-text-primary transition-all duration-200"
              />
            )}
          </button>

          {/* Mobile Menu */}
        </div>
      </header>
      <div
        className={`fixed inset-0 bg-brand-base z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
      >
        <nav className="flex flex-col items-center space-y-6 text-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand-text-primary hover:text-[#FF835A] transition-colors duration-200"
              onClick={() => {
                setIsOpen(false);
                document.body.style.overflow = "auto";
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          className="mt-8 rounded-none rounded-tr-2xl font-normal px-6 bg-[#FF835A] hover:bg-[#FF835A]/90 text-brand-text-primary text-base"
          asChild
        >
          <Link
            href="tel:+16038000333"
            onClick={() => {
              setIsOpen(false);
              document.body.style.overflow = "auto";
            }}
          >
            <PhoneIcon width={16} height={16} />
            <span>Book your consultation now</span>
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Header;
