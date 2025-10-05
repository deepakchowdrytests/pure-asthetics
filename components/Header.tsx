"use client";
import { PhoneIcon } from "@/lib/icons";
import { TextAlignEnd, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

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
        className={`sticky top-0 flex items-center justify-center mx-auto z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FFEFD7] h-12 md:h-16 w-[95%] md:w-11/12 translate-y-2 rounded-lg md:rounded-xl"
            : "bg-brand-base-dark h-14 md:h-18 w-full"
        }`}
      >
        <div className="w-[98%] md:w-11/12 h-full flex items-center justify-between">
          <Link href="/" className="z-50 min-w-40">
            {scrolled ? (
              <Image
                src={"/images/logo-3.png"}
                alt="Pure Aesthetics MD"
                width={160}
                height={60}
                className="w-12 md:w-16 object-cover"
              />
            ) : (
              <Image
                src={"/images/logo-1.png"}
                alt="Pure Aesthetics MD"
                width={160}
                height={60}
                className="w-24 md:w-28 object-cover"
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={`hidden md:flex items-center space-x-8 text-sm text-brand-text-primary font-shippori font-medium`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-brand-text-primary/50 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              className="rounded-none rounded-tr-2xl font-thin w-40 bg-[#FF835A] hover:bg-[#FF835A]/90 text-brand-text-primary"
              asChild
            >
              <Link href="/book-now">
                <PhoneIcon width={16} height={16} />
                <span>Schedule now</span>
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
        className={`fixed inset-0 bg-brand-base z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
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
          className="mt-8 rounded-none rounded-tr-2xl font-normal w-1/2 bg-[#FF835A] hover:bg-[#FF835A]/90 text-brand-text-primary text-base"
          asChild
        >
          <Link
            href="/book-now"
            onClick={() => {
              setIsOpen(false);
              document.body.style.overflow = "auto";
            }}
          >
            <PhoneIcon width={16} height={16} />
            <span>Schedule now</span>
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Header;
