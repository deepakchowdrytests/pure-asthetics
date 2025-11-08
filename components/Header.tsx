"use client";
import { PhoneIcon } from "@/lib/icons";
import { ChevronDown, TextAlignEnd, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Separator } from "./ui/separator";

// Constants
const PHONE_NUMBER = "tel:+16038000333";
const PHONE_CTA = "Book your consultation now";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/treatments", label: "Treatments" },
  { href: "/contact", label: "Contact" },
];

const serviceCategories = [
  {
    title: "Face & Anti-Aging Treatments",
    titleLink: "/treatments/featured#face-anti-aging",
    items: [
      { name: "Botox® Injections", href: "/treatments/all#botox-injection" },
      { name: "Dermal & Bio Fillers", href: "/treatments/all#dermal-fillers" },
      {
        name: "Biostimulators : Radiesse® & Sculptra®",
        href: "/treatments/all#biostimulators",
      },
      { name: "PRP Microneedling", href: "/treatments/all#prp-micro-needling" },
    ],
  },
  {
    title: "Body & Wellness Treatments",
    titleLink: "/treatments/featured#body-wellness",
    items: [
      {
        name: "Body Sculpting & Contouring",
        href: "/treatments/all#body-sculpting",
      },
      {
        name: "Weight Loss Solutions",
        href: "/treatments/all#weight-loss-solutions",
      },
      { name: "Hair Restoration", href: "/treatments/all#hair-restoration" },
      { name: "IV Nutrition Therapy", href: "/treatments/all#iv-nutrition" },
    ],
  },
  {
    title: "Laser Treatments",
    titleLink: "/treatments/featured#laser-treatments",
    items: [
      {
        name: "Laser Hair Removal",
        href: "/treatments/all#laser-hair-removal",
      },
      {
        name: "Laser Skin Rejuvenation",
        href: "/treatments/all#laser-skin-rejuvenation",
      },
      {
        name: "Laser Tattoo & Pigment Removal",
        href: "/treatments/all#laser-tattoo-pigment-removal",
      },
    ],
  },
  {
    title: "Skin Care Treatments",
    titleLink: "/treatments/featured#skin-care",
    items: [
      { name: "RF Microneedling", href: "/treatments/all#rf-microneedling" },
      {
        name: "Medical Grade Acid Peels",
        href: "/treatments/all#medical-grade-acid-peeling",
      },
      { name: "Acne Treatment", href: "/treatments/all#acne-treatment" },
    ],
  },
  {
    title: "Women's Health Treatments",
    titleLink: "/treatments/featured#womens-health",
    items: [
      {
        name: "Urinary Incontinence Treatment",
        href: "/treatments/all#urinary-incontinence-treatment",
      },
      { name: "Intimacy Wellness", href: "/treatments/all#intimacy-wellness" },
    ],
  },
];

const aboutMenuItems = [
  { label: "Memberships", href: "" },
  { label: "Promotions", href: "#promotions" },
  { label: "Careers", href: "" },
];

// Reusable Components
const ServiceCategory = ({
  title,
  titleLink,
  items,
  onLinkClick,
}: {
  title: string;
  titleLink: string;
  items: { name: string; href: string }[];
  onLinkClick?: () => void;
}) => (
  <div className="flex flex-col gap-3">
    <SmoothScrollLink
      href={titleLink}
      onClick={onLinkClick}
      className="hover:text-brand-text-primary/80 text-brand-text-primary transition-colors duration-200 flex items-center gap-1 cursor-pointer hover:no-underline font-medium font-astrid"
    >
      {title}
    </SmoothScrollLink>
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <SmoothScrollLink
          key={item.name}
          className="text-brand-text-primary/80 hover:text-brand-text-primary transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer hover:no-underline text-sm"
          href={item.href}
          onClick={onLinkClick}
        >
          {item.name}
        </SmoothScrollLink>
      ))}
    </div>
  </div>
);

const SmoothScrollLink = ({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const [path, hash] = href.split("#");

    if (hash) {
      // If navigating to a different page
      if (path && path !== "/") {
        router.push(path);
        // Wait for page to load before scrolling
        setTimeout(() => {
          const element = document.getElementById(hash);
          element?.scrollIntoView({ behavior: "smooth" });
          onClick?.();
        }, 500);
      } else {
        // Same page scroll
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: "smooth" });
        onClick?.();
      }
    } else {
      router.push(href);
      onClick?.();
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};

const CTAButton = ({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => (
  <Button
    className={`rounded-none rounded-tr-2xl font-normal bg-[#FF835A] hover:bg-[#FF835A]/90 text-brand-text-primary ${className}`}
    asChild
  >
    <Link href={PHONE_NUMBER} onClick={onClick}>
      <PhoneIcon width={16} height={16} />
      <span>{PHONE_CTA}</span>
    </Link>
  </Button>
);

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openHoverCard, setOpenHoverCard] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Hide header when scrolling down
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <>
      <header
        className={`bg-brand-base-dark sticky top-0 flex items-center justify-center mx-auto transition-all duration-300 h-16 md:h-28 z-50 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-[95%] md:w-11/12 h-full flex items-center justify-between">
          <Link href="/" className="z-50 min-w-40 ml-2 md:ml-0">
            <Image
              src="/logos/logo-1.png"
              alt="Pure Aesthetics MD"
              width={160}
              height={60}
              className="w-28 md:w-60 object-cover"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm text-brand-text-primary font-shippori font-medium">
            {navLinks.map((link) => (
              <Fragment key={link.href}>
                {link.href === "/treatments" ? (
                  <HoverCard
                    open={openHoverCard === "treatments"}
                    onOpenChange={(open) =>
                      setOpenHoverCard(open ? "treatments" : null)
                    }
                  >
                    <HoverCardTrigger
                      className="flex items-center gap-1 cursor-pointer font-semibold"
                      onClick={() => router.push("/treatments")}
                    >
                      Treatments
                      <ChevronDown
                        className="size-4 mt-0.5"
                        strokeWidth={1.5}
                      />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-screen translate-y-8 bg-brand-base-dark shadow-none border-brand-text-primary/20 border-b border-t-0 rounded-none border-x-0 py-10">
                      <div className="flex gap-10 w-11/12 mx-auto">
                        {serviceCategories.map((category) => (
                          <ServiceCategory
                            key={category.title}
                            {...category}
                            onLinkClick={() => setOpenHoverCard(null)}
                          />
                        ))}
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ) : link.href === "/about" ? (
                  <HoverCard
                    open={openHoverCard === "about"}
                    onOpenChange={(open) =>
                      setOpenHoverCard(open ? "about" : null)
                    }
                  >
                    <HoverCardTrigger
                      className="flex items-center gap-1 cursor-pointer font-semibold"
                      onClick={() => router.push("/about")}
                    >
                      About
                      <ChevronDown
                        className="size-4 mt-0.5"
                        strokeWidth={1.5}
                      />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-44 translate-y-2 shadow-none bg-brand-base-dark px-3 border-brand-text-primary/20 py-3 text-brand-text-primary">
                      <div className="flex flex-col justify-between gap-2">
                        {aboutMenuItems.map((item, index) => (
                          <Fragment key={item.label}>
                            <SmoothScrollLink
                              href={item.href}
                              onClick={() => setOpenHoverCard(null)}
                              className="text-brand-text-primary/80 hover:text-brand-text-primary text-sm"
                            >
                              {item.label}
                            </SmoothScrollLink>
                            {index < aboutMenuItems.length - 1 && (
                              <Separator className="bg-brand-text-primary/25" />
                            )}
                          </Fragment>
                        ))}
                      </div>
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
            <CTAButton className="px-5 text-xs" />
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
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-brand-base-dark/95 backdrop-blur-xs flex flex-col transition-transform duration-300 ease-in-out transform z-50 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        <button onClick={toggleMenu} className="absolute top-3 right-3">
          <X className="text-brand-text-primary size-6" strokeWidth={1.5} />
        </button>
        <div className="flex items-center justify-center pt-10 border-brand-text-primary/10">
          <Image
            src="/logos/logo-2.png"
            alt="Logo"
            width={140}
            height={50}
            className="object-cover w-40"
          />
        </div>

        <div className="overflow-y-auto flex-1 px-6 py-14 space-y-4 text-brand-text-primary">
          <Link
            href="/"
            onClick={closeMenu}
            className="block text-lg font-thin hover:text-[#FF835A] transition-colors font-astrid"
          >
            Home
          </Link>

          {/* Accordion for Treatments (Services) */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="treatments" className="border-b-0 gap-0">
              <AccordionTrigger className="text-lg font-medium hover:no-underline font-astrid py-2 mt-1">
                Treatments
              </AccordionTrigger>
              <AccordionContent className="space-y-2 pl-4">
                <Accordion type="single" collapsible className="w-full">
                  {serviceCategories.map((category) => (
                    <AccordionItem
                      key={category.title}
                      value={category.title}
                      className="border-b-0"
                    >
                      <AccordionTrigger className="text-sm font-bold hover:no-underline py-2.5">
                        {category.title}
                      </AccordionTrigger>
                      <AccordionContent className="pl-4 space-y-4 mt-2">
                        {category.items.map((item) => (
                          <SmoothScrollLink
                            key={item.name}
                            href={item.href}
                            onClick={closeMenu}
                            className="text-brand-text-primary/80 hover:text-[#FF835A] transition-colors block font-semibold text-[13px]"
                          >
                            {item.name}
                          </SmoothScrollLink>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AccordionContent>
            </AccordionItem>

            {/* Accordion for About */}
            <AccordionItem value="about" className="border-b-0">
              <AccordionTrigger className="text-lg font-medium hover:no-underline font-astrid py-2 mt-1.5">
                About
              </AccordionTrigger>
              <AccordionContent className="pl-4 space-y-4 mt-2">
                {aboutMenuItems.map((item) => (
                  <SmoothScrollLink
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className="block text-sm text-brand-text-primary hover:text-[#FF835A] transition-colors font-bold"
                  >
                    {item.label}
                  </SmoothScrollLink>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="block text-lg font-medium hover:text-[#FF835A] transition-colors font-astrid"
          >
            Contact
          </Link>
        </div>

        <div className="px-6 pb-6 mt-auto">
          <CTAButton
            className="w-full justify-center py-5 text-base"
            onClick={closeMenu}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
