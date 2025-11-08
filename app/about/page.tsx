import { Button } from "@/components/ui/button";
import { PhoneIcon } from "@/lib/icons";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="min-h-screen bg-[#FCF3EE] flex items-center flex-col justify-center">
      {/* Hero Section */}
      <div className="flex md:items-center items-end justify-center w-full relative min-h-[80vh] md:h-screen overflow-hidden">
        <Image
          src={"/images/about-illustration-1.png"}
          alt=""
          width={2000}
          height={1200}
          className="w-80 absolute -bottom-80 left-0 hidden md:block opacity-30"
        />
        <section className="w-11/12 md:w-10/12 h-full relative">
          <h1 className="text-3xl font-medium mb-6 text-brand-text-primary absolute top-10 left-1/2 -translate-x-1/2 hidden md:block">
            Your Journey to Radiant skin starts here
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 h-full">
            <div className="hidden relative h-11/12 md:flex flex-col justify-end col-span-1">
              <div className="flex justify-start w-72 rounded-3xl overflow-hidden">
                <Image
                  src={"/img/about-1.jpg"}
                  alt="Facial treatment"
                  width={2000}
                  height={1200}
                  className="object-cover aspect-square w-full h-full"
                />
              </div>
              <div className="w-full flex justify-end aspect-[1/1]">
                <Image
                  src={"/img/about-2.jpg"}
                  alt="Consultation"
                  width={2000}
                  height={1200}
                  className="w-72 h-72 -translate-y-24 aspect-square object-cover rounded-3xl overflow-hidden"
                />
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col justify-center items-center">
              <div className="w-full md:w-8/12 space-y-6 md:space-y-10">
                <h1 className="text-3xl md:text-4xl font-medium mb-6 text-brand-text-primary md:hidden">
                  Your journey to radiant skin starts here
                </h1>
                <div className="space-y-5">
                  <p className="text-base md:text-xl leading-7 text-justify text-brand-text-primary">
                    At Pure Aesthetics MD, we blend science, care, and expertise
                    to enhance confidence at every stage of your journey.
                  </p>
                  <p className="text-base md:text-xl leading-7 text-justify text-brand-text-primary">
                    Our advanced, physician-led treatments are designed to
                    deliver results that look natural, feel effortless, and are
                    always tailored to your beauty and wellness goals.
                  </p>
                </div>
                <Button className="rounded-none rounded-tr-2xl font-normal w-40 bg-[#FF835A] hover:bg-[#FF835A]/85 text-brand-text-primary">
                  <Link
                    href={"tel:+16038000333"}
                    className="flex items-center gap-1"
                  >
                    <PhoneIcon width={20} height={20} />
                    <span>Schedule now</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <Image
          src={"/images/about-illustration-2.png"}
          alt=""
          width={2000}
          height={1200}
          className="w-96 absolute -bottom-96 right-0 rotate-6 hidden md:block opacity-30"
        />
      </div>

      <section className="flex flex-col items-center justify-center gap-8 w-11/12 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <div className="col-span-1 md:col-span-2 space-y-8 md:space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-brand-text-primary">
                Our Philosophy
              </h2>
              <p className="text-base text-brand-text-primary leading-7 text-justify mb-2">
                At Pure Aesthetics MD, we believe beauty should feel natural and
                safe. That’s why every treatment we offer is physician-led,
                combining the art of aesthetics with the science of medicine.
              </p>
              <p className="text-base text-brand-text-primary leading-7 text-justify">
                Our goal is simple: help you look and feel your best without
                compromising your health, confidence, or individuality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-brand-text-primary">
                Our Story
              </h2>
              <p className="text-base text-brand-text-primary leading-7 text-justify">
                Pure Aesthetics MD was founded on a commitment to provide trusted, medically
                supervised aesthetic care in a warm and welcoming environment. We understand that your
                appearance impacts your confidence, and we’re here to ensure you feel empowered every
                step of the way. Whether you’re looking for subtle anti-aging treatments or complete skin
                rejuvenation, we deliver results that look natural, never overdone.
              </p>
            </div>
          </div>

          <div className="col-span-1 rounded-tl-[120px] overflow-hidden">
            <Image
              src={"/img/gallery-5.jpeg"}
              alt=""
              width={2000}
              height={1200}
              className="w-96"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <div className="col-span-1 md:col-span-2 space-y-8 md:space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-brand-text-primary">
                Our Mission
              </h2>
              <p className="text-base text-brand-text-primary leading-7 text-justify">
                To deliver safe, effective, and physician-directed aesthetic treatments that enhance natural
                beauty, restore confidence, and promote overall well-being - all in a professional and
                welcoming setting.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-brand-text-primary">
                Our Vision
              </h2>
              <p className="text-base text-brand-text-primary leading-7 text-justify">
                To be the most trusted medical aesthetics destination in Southern New Hampshire,
                recognized for clinical excellence, personalized care, and natural-looking results.
              </p>
            </div>
          </div>

          <div className="col-span-1 rounded-br-[120px] overflow-hidden">
            <Image
              src={"/img/about-1.jpg"}
              alt=""
              width={2000}
              height={1200}
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-[#FCF3EE] w-11/12 md:w-10/12 py-12 md:py-24">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16 items-center">
            <div className="relative col-span-1 hidden md:block rounded-l-[120px] overflow-hidden">
              <Image
                width={2000}
                height={1200}
                src={"/img/gallery-1.jpeg"}
                alt="Radiant skin"
              />
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col justify-center items-center">
              <div className="w-full md:w-11/12">
                <h2 className="text-3xl md:text-3xl font-medium mb-8 text-brand-text-primary">
                  What Makes Us Different
                </h2>
                <ul className="space-y-6 text-brand-text-primary text-justify">
                  <li>
                    <h3 className="font-medium text-lg mb-2 text-brand-text-primary">
                      Board-Certified Physician Oversight
                    </h3>
                    <p className="text-base text-brand-text-primary leading-7">
                      Every treatment plan is developed and overseen
                      by a qualified medical doctor, ensuring safety and precision.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-medium text-lg mb-2 text-brand-text-primary">
                      Natural Approach
                    </h3>
                    <p className="text-base text-brand-text-primary leading-7">
                      We focus on enhancing your features not changing them with
                      treatments designed to bring out your best self.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-medium text-lg mb-2 text-brand-text-primary">
                      Cutting-Edge Technology
                    </h3>
                    <p className="text-base text-brand-text-primary leading-7">
                      We use only FDA-approved, medical-grade devices and
                      products for optimal results.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-medium text-lg mb-2 text-brand-text-primary">
                      Affordable Luxury
                    </h3>
                    <p className="text-base text-brand-text-primary leading-7">
                      High quality care should be accessible. We are committed
                      to honest pricing and transparent communication.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative col-span-1 md:hidden rounded-3xl overflow-hidden">
              <Image
                width={2000}
                height={1200}
                src={"/img/gallery-1.jpeg"}
                alt="Radiant skin"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Dr. Radhika Paluri */}
      <section className="w-11/12 md:w-10/12">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 items-center">
          <div className="col-span-2 mb-2 md:mb-0">
            <div className="w-full md:w-11/12">
              <h2 className="text-3xl md:text-3xl font-medium mb-6 text-brand-text-primary">
                Meet Dr. Radhika Paluri, MD
              </h2>
              <p className="text-base text-brand-text-primary leading-7 mb-4 text-justify">
                Dr. Radhika Paluri, MD, is a board-certified physician with years of experience in medical
                aesthetics and wellness care. Her passion is helping patients feel confident in their skin
                through safe, evidence-based treatments. Known for her gentle touch and artistic eye, Dr.
                Paluri takes the time to understand your unique goals, creating customized plans for
                beautiful, natural results.
              </p>
            </div>
          </div>
          <div className="relative col-span-1 rounded-r-[120px] overflow-hidden">
            <Image
              width={2000}
              height={1200}
              src={"/img/doctor-1.jpg"}
              alt="Dr. Radhika Paluri"
              className=" w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <div className="relative">
        <section className="flex items-center justify-center z-20 py-12">
          <div className="w-11/12">
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-4xl font-medium text-brand-text-primary">
                Our Commitment
              </h2>
              <p className="text-base text-brand-text-primary leading-relaxed">
                Your safety, comfort, and satisfaction come first. Every treatment at Pure Aesthetics MD is
                performed or supervised by a physician, ensuring you receive expert care in a calm,
                professional environment.
              </p>
            </div>
          </div>
        </section>

        <Image
          width={2000}
          height={1200}
          src={"/images/about-illustration-1.png"}
          alt="Dr. Radhika Paluri"
          className="w-80 absolute top-0 left-0 opacity-30"
        />

        <Image
          width={2000}
          height={1200}
          src={"/images/about-illustration-2.png"}
          alt="Dr. Radhika Paluri"
          className="w-80 absolute bottom-0 right-0 hidden md:block opacity-30"
        />

        {/* What our clients say */}
        <section className="z-20 bg-[#FFEFD7]/45 min-h-[70vh] flex items-center justify-center py-12 md:py-0">
          <div className="w-11/12 flex flex-col items-center gap-12">
            <div className="flex flex-col items-center">
              <h2 className="text-2xl lg:text-4xl font-medium mb-4 text-brand-text-primary">
                What our clients say
              </h2>
              <p className="flex items-center gap-1 text-center">
                5/5
                <span className="flex justify-center gap-1 text-amber-500 text-base">
                  ★★★★★
                </span>
                50 reviews on Google
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-3 w-11/12 md:w-9/12">
              <div className="flex flex-col-reverse items-center gap-3 md:max-w-72 justify-evenly h-11/12">
                <div className="flex gap-3 bg-[#FEE0D9] p-3 rounded-lg">
                  <Image
                    src={"/images/transform-4.png"}
                    alt=""
                    width={2000}
                    height={1200}
                    className="w-12 h-12 object-cover"
                  />
                  <div className="space-y-1">
                    <h3 className="text-base font-medium">
                      Adharsh Rangappa. CEO
                    </h3>
                    <p className="text-sm leading-6">
                      “From consultation to results, the process was seamless. I
                      felt safe and cared for throughout.”
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1 bg-[#FFEFD7] p-3 rounded-tr-[60px]">
                  <h3 className="text-base font-medium">Sarah M.</h3>
                  <p className="text-sm leading-6">
                    My skin has never felt better! The team truly understands my
                    needs and provides the best care possible.
                  </p>
                </div>
              </div>

              <div className="relative md:w-72 h-72 rounded-[50px] overflow-hidden rounded-bl-none">
                <Image
                  src={"/img/gallery-6.jpg"}
                  alt="Happy client"
                  width={2000}
                  height={1200}
                  className="w-full h-full object-cover mb-4"
                />
              </div>

              <div className="flex flex-col items-center gap-3 md:max-w-72 justify-evenly h-11/12">
                <div className="flex gap-3 bg-[#FEE0D9] p-3 rounded-lg">
                  <Image
                    src={"/images/transform-2.png"}
                    alt=""
                    width={2000}
                    height={1200}
                    className="w-12 h-12 object-cover"
                  />
                  <div className="space-y-1">
                    <h3 className="text-base font-medium">
                      Adharsh Rangappa. CEO
                    </h3>
                    <p className="text-sm leading-6">
                      “From consultation to results, the process was seamless. I
                      felt safe and cared for throughout.”
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1 bg-[#FFEFD7] p-3 rounded-tr-[60px]">
                  <h3 className="text-base font-medium">Sarah M.</h3>
                  <p className="text-sm leading-6">
                    My skin has never felt better! The team truly understands my
                    needs and provides the best care possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="w-full h-40 md:h-80">
        <div className="h-full relative flex items-center justify-end">
          <Image
            src={"/img/cta-1.jpg"}
            alt="Treatment closeup"
            width={2000}
            height={1200}
            className="h-full absolute top-0 left-0 object-cover"
          />
          <div className="bg-[#5D2B2B] h-full w-full md:w-3/5 z-30 flex flex-col justify-center items-center md:rounded-tl-[150px] relative">
            <div className="w-11/12 md:w-10/12 space-y-3 md:space-y-6">
              <h2 className="text-sm md:text-2xl font-medium text-[#FF835A] leading-relaxed">
                Ready to experience the Pure <br /> difference?
              </h2>
              <p className="text-[10px] leading-relaxed md:text-sm text-[#FF835A] max-w-52 md:max-w-full">
                Ready to achieve radiant, healthy skin? Let us help you get
                started today.
              </p>
              <Button
                size="sm"
                className="rounded-none rounded-tr-2xl font-normal px-6 bg-[#FF835A] hover:bg-[#FF835A]/85 text-brand-text-primary text-xs md:text-sm"
              >
                {/* <PhoneIcon width={16} height={16} /> */}
                <Link
                  href={"tel:+16038000333"}
                  className="flex items-center gap-1"
                >
                  <PhoneIcon width={20} height={20} />
                  Book{" "}
                  <span className="hidden md:inline">
                    your consultation
                  </span>{" "}
                  now
                </Link>
              </Button>
            </div>
            <Image
              width={2000}
              height={1200}
              src={"/images/cta-illustration.png"}
              alt="Treatment closeup"
              className="h-full w-1/2 absolute top-0 right-0 opacity-50"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
