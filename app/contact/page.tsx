"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  EnvelopeIcon,
  EyeDropperIcon,
  MessageIcon,
  PhoneIcon,
  UserIcon,
} from "@/lib/icons";
import { Instagram, PenSquare } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-16 bg-brand-base-dark">
      <div className="flex items-center justify-center min-h-[40vh] pb-16">
        <div className="w-11/12 md:w-10/12 flex flex-col gap-12">
          <div className="space-y-4">
            <h3 className="text-brand-text-primary text-3xl font-semibold">
              Contact Us
            </h3>
            <p className="text-brand-text-primary">
              We’d Love to Hear From You Whether you’re ready to book your first
              treatment or simply want to learn more about our services, our
              team is here to help. At Pure Aesthetics MD, we pride ourselves on
              providing personalized, physician-led care in a welcoming
              environment.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-brand-text-primary text-3xl font-semibold">
              Clinic information
            </h3>
            <p className="text-brand-text-primary">
              Address: Pure Aesthetics MD, 110 Daniel Webster Hwy,Nashua, NH
              03060
            </p>
            <div className="space-y-3 grid grid-cols-1 md:grid-cols-2 list-none text-sm text-brand-text-primary max-w-3xl">
              <li>Call us: 603 800 0333</li>
              <li>Follow Us</li>
              <li>Email: info@pureaestheticsmd.org</li>

              <li>Stay up-to-date on specials,events, and skincare tips:</li>
              <li>Website: www.PureAestheticsMD.org</li>

              <li className="flex items-center gap-2">
                <Instagram className="size-3" strokeWidth={1.5} />
                @Pure_Aesthetics_MD
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 flex flex-col items-center">
        <div className="w-11/12 min-h-80 flex flex-col items-center gap-16 py-6">
          <h4 className="text-brand-text-primary text-xl uppercase text-center">
            Hours of Operation
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-8 md:gap-6">
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-brand-text-primary text-lg uppercase">Sun</h3>
              <Image
                src="/images/clock-sun.svg"
                alt="Sun"
                width={57}
                height={57}
              />
              <p className="text-brand-text-primary">10 AM - 6 PM</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-brand-text-primary text-lg uppercase">Mon</h3>
              <Image
                src="/images/clock-mon.svg"
                alt="Mon"
                width={57}
                height={57}
              />
              <p className="text-brand-text-primary">CLOSED</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-brand-text-primary text-lg uppercase">Tue</h3>
              <Image
                src="/images/clock-sun.svg"
                alt="Sun"
                width={57}
                height={57}
              />
              <p className="text-brand-text-primary">10 AM - 6 PM</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-brand-text-primary text-lg uppercase">Wed</h3>
              <Image
                src="/images/clock-sun.svg"
                alt="Sun"
                width={57}
                height={57}
              />
              <p className="text-brand-text-primary">10 AM - 7 PM</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-brand-text-primary text-lg uppercase">Thu</h3>
              <Image
                src="/images/clock-sun.svg"
                alt="Sun"
                width={57}
                height={57}
              />
              <p className="text-brand-text-primary">10 AM - 7 PM</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-brand-text-primary text-lg uppercase">Fri</h3>
              <Image
                src="/images/clock-sun.svg"
                alt="Sun"
                width={57}
                height={57}
              />
              <p className="text-brand-text-primary">10 AM - 7 PM</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-brand-text-primary text-lg uppercase">Sat</h3>
              <Image
                src="/images/clock-sun.svg"
                alt="Sun"
                width={57}
                height={57}
              />
              <p className="text-brand-text-primary">10 AM - 6 PM</p>
            </div>
          </div>
          <p className="text-brand-text-primary text-sm text-center">
            (Extended hours available by appointment.)
          </p>
        </div>
        <div className="w-11/12 relative text-brand-text-primary py-12">
          <div className="grid grid-cols-1 md:grid-cols-9 gap-6 md:gap-16 items-start">
            {/* Left side - Images */}
            <div className="space-y-6 md:col-span-4 hidden md:block">
              <div className="">
                <Image
                  src="/img/featured-1.jpg"
                  alt="Beauty treatment"
                  className="w-full h-80 object-cover rounded-tr-[85px]"
                  width={600}
                  height={400}
                />
              </div>
              <div className="">
                <Image
                  src="/img/featured-2.jpg"
                  alt="Facial treatment"
                  className="w-full h-80 object-cover rounded-tr-[85px]"
                  width={600}
                  height={400}
                />
              </div>
            </div>

            {/* Right side - Form */}
            <div className="col-span-1 md:col-span-5 py-4 space-y-6">
              <h2 className="text-2xl font-medium text-brand-text-primary">
                You may also fill out the form below and we will respond as
                quickly as possible.
              </h2>

              <div className="space-y-4">
                {/* Full Name */}
                <div className="flex flex-col gap-1 h-18 rounded-lg py-3 px-3.5 bg-[#FEE0D9]">
                  <div className="flex items-center gap-1">
                    <UserIcon width={18} height={18} />
                    <Label>Full name</Label>
                  </div>
                  <Input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    className="h-full border-none rounded-none focus-visible:ring-0 shadow-none px-1"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1 h-18 rounded-lg py-3 px-3.5 bg-[#FEE0D9]">
                    <div className="flex items-center gap-1">
                      <EnvelopeIcon width={18} height={18} />
                      <Label>Email</Label>
                    </div>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="h-full border-none rounded-none focus-visible:ring-0 shadow-none px-1"
                    />
                  </div>
                  <div className="flex flex-col gap-1 h-18 rounded-lg py-3 px-3.5 bg-[#FEE0D9]">
                    <div className="flex items-center gap-1">
                      <PhoneIcon width={16} height={16} />
                      <Label>Phone</Label>
                    </div>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="h-full border-none rounded-none focus-visible:ring-0 shadow-none px-1"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-3 min-h-18 rounded-lg py-3 px-3.5 bg-[#FEE0D9]">
                  <div className="flex items-center gap-1">
                    <PenSquare width={16} height={16} strokeWidth={1.75} />
                    <Label>Message</Label>
                  </div>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={6}
                    className="h-full border-none rounded-none focus-visible:ring-0 shadow-none px-1 min-h-60 max-h-72"
                  />
                </div>

                {/* Submit Button */}
                <Button className="rounded-none rounded-tr-2xl font-normal w-40 bg-[#FF835A] hover:bg-[#FF835A]/85 text-brand-text-primary mt-6">
                  <MessageIcon width={16} height={16} />
                  <span>Submit</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full h-60 md:h-80">
        <div className="h-full relative flex items-center justify-end">
          <div className="bg-[#5D2B2B] h-full w-full md:w-4/6 z-30 flex flex-col justify-center items-center md:rounded-tr-[150px] relative">
            <div className="w-11/12 md:w-10/12 space-y-3 md:space-y-6">
              <h2 className="text-xs md:text-2xl font-bold text-[#FF835A] leading-relaxed">
                Ready for Radiant skin?
              </h2>
              <p className="text-[10px] leading-relaxed md:text-sm text-[#FF835A] max-w-52 md:max-w-[28rem]">
                Start your journey to healthier, glowing skin with our
                personalized skincare solutions. Whether you’re looking to
                rejuvenate, hydrate, or address specific concerns, our experts
                are here to help.
              </p>
              <Button
                size="sm"
                className="rounded-none rounded-tr-2xl font-normal px-6 bg-[#FF835A] hover:bg-[#FF835A]/85 text-brand-text-primary text-xs md:text-sm"
              >
                {/* <PhoneIcon width={16} height={16} /> */}
                <span>
                  Book{" "}
                  <span className="hidden md:inline">your consultation</span>{" "}
                  now
                </span>
              </Button>
            </div>
            <Image
              width={2000}
              height={1200}
              src={"/images/cta-illustration.png"}
              alt="Treatment closeup"
              className="h-full w-1/2 absolute top-0 right-0"
            />
          </div>
          <div className="md:flex items-center justify-center w-2/5 hidden">
            <div className="flex w-10/12 gap-2 flex-col">
              <EyeDropperIcon width={36} height={36} />
              <h3 className="text-xs md:text-2xl font-bold text-brand-text-primary leading-relaxed">
                Sustainable Beauty
              </h3>
              <p className="text-sm text-brand-text-primary max-w-sm">
                Our eco-conscious approach ensures that our products are kind to
                the environment and your skin.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
