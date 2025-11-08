"use client";
import { EnvelopeIcon, MessageIcon, PhoneIcon, UserIcon } from "@/lib/icons";
import { PenSquare } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
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
    <div className="flex items-center justify-center min-h-screen py-6 md:py-0 bg-[#FAD1B2] relative overflow-">
      {/* Decorative circles */}
      <Image
        src="/images/footer-illustration-2.png"
        alt="circle"
        className="absolute bottom-0 right-0 w-[500px] opacity-30"
        width={1000}
        height={1000}
      />

      <div className="w-11/12 md:w-10/12 relative text-brand-text-primary">
        <div className="grid grid-cols-1 md:grid-cols-9 gap-6 md:gap-16 items-start">
          {/* Left side - Images */}
          <div className="space-y-6 md:col-span-4 hidden md:block">
            <div className="">
              <Image
                src="/img/f-service-9.jpg"
                alt="Beauty treatment"
                className="w-full h-80 object-cover rounded-tr-[85px]"
                width={600}
                height={400}
              />
            </div>
            <div className="">
              <Image
                src="/img/gallery-2.jpeg"
                alt="Facial treatment"
                className="w-full h-80 object-cover rounded-tr-[85px]"
                width={600}
                height={400}
              />
            </div>
          </div>

          {/* Right side - Form */}
          <div className="col-span-1 md:col-span-5 py-4 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-medium text-brand-text-primary">
                Fill out and submit the form below and we will contact you.
              </h2>
              <p>As an added bonus receive 10% off.</p>
            </div>

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
              <Button className="rounded-none rounded-tr-2xl font-normal bg-[#FF835A] hover:bg-[#FF835A]/85 text-brand-text-primary mt-6">
                <MessageIcon width={16} height={16} />
                <span>Submit</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
