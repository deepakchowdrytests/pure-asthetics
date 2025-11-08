import Image from "next/image";
import Link from "next/link";

const ServicesPage = () => {
  const featuredServices = [
    {
      title: "Botox Injection",
      description: "Reduce fine lines and wrinkles for a smoother look.",
      image: "/img/f-service-1.jpg",
      link: "/treatments/all#botox-injection",
    },
    {
      title: "Dermal & Bio Fillers",
      description: "Restore volume and enhance natural contours.",
      image: "/img/f-service-2.jpg",
      link: "/treatments/all#dermal-fillers",
    },
    {
      title: "Biostimulators : Radiesse® & Sculptra®",
      description: "Stimulate collagen for long-lasting results.",
      image: "/img/f-service-3.jpg",
      link: "/treatments/all#biostimulators",
    },
    {
      title: "PRP Micro Needling",
      description: "Harness your body’s own healing for radiant skin.",
      image: "/img/gallery-2.jpeg",
      link: "/treatments/all#prp-micro-needling",
    },
  ];

  const bodyServices = [
    {
      title: "Body Sculpting & Contouring",
      description: "Shape and tone without surgery",
      image: "/img/f-service-4.jpg",
      link: "/treatments/all#body-sculpting",
    },
    {
      title: "Weight Loss Solutions",
      description: "Customized programs for sustainable results.",
      image: "/img/featured-3.jpg",
      link: "/treatments/all#weight-loss-solutions",
    },
    {
      title: "Hair Restoration",
      description: "Natural solutions for thinning hair.",
      image: "/img/f-service-5.png",
      link: "/treatments/all#hair-restoration",
    },
    {
      title: "IV Nutrition",
      description: "Boost energy and immunity with targeted nutrients",
      image: "/img/f-service-6.jpg",
      link: "/treatments/all#iv-nutrition",
    },
  ];

  const laserTreatments = [
    {
      title: "Laser Hair Removal",
      description: "Smooth, hair-free skin that lasts.",
      image: "/img/f-service-7.jpg",
      link: "/treatments/all#laser-hair-removal",
    },
    {
      title: "Laser Skin Rejuvenation",
      description: "Restore youthful tone and texture",
      image: "/img/about-1.jpg",
      link: "/treatments/all#laser-skin-rejuvenation",
    },
    {
      title: "Laser Tattoo & Pigment Removal",
      description: "Safely fade unwanted ink and discolorationn",
      image: "/img/f-service-8.jpg",
      link: "/treatments/all#laser-tattoo-pigment-removal",
    },
  ];

  const skinCareServices = [
    {
      title: "RF Microneedling",
      description: "Improve skin tone and firmness.",
      image: "/treatments/service-1.png",
      link: "/treatments/all#rf-microneedling",
    },
    {
      title: "Medical Grade Acid Peeling",
      description: "Reveal fresh, glowing skin.",
      image: "/treatments/service-2.png",
      link: "/treatments/all#medical-grade-acid-peeling",
    },
    {
      title: "Acne Treatment",
      description: "Solutions for clear, healthy skin.",
      image: "/treatments/service-3.png",
      link: "/treatments/all#acne-treatment",
    },
  ];

  const healthServices = [
    {
      title: "Urinary Incontinence Treatment",
      description: "Non-surgical treatments for bladder control.",
      image: "/img/featured-4.jpg",
      link: "/treatments/all#urinary-incontinence-treatment",
    },
    {
      title: "Intimacy Wellness",
      description: "Rejuvenation for enhanced confidence and comfort.",
      image: "/img/intimacy.jpg",
      link: "/treatments/all#intimacy-wellness",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-[#FFF2E8]">
      <h1 className="text-2xl md:text-4xl font-medium text-brand-secondary-dark">
        Featured Treatments
      </h1>
      <div
        id="face-anti-aging"
        className="flex justify-center w-full relative min-h-screen"
      >
        <Image
          src="/images/injection-illustration-1.png"
          alt="Pure Aesthetics MD"
          width={160}
          height={60}
          className="w-[420px] object-cover absolute -top-40 -left-10 opacity-30"
        />
        <section className="w-11/12 md:w-10/12 grid grid-cols-1 md:grid-cols-2 py-16 gap-6 md:gap-10 z-20">
          <div className="col-span-1 flex items-center">
            <div className="space-y-3 md:space-y-6 text-center md:text-left">
              <h3 className="text-lg md:text-2xl font-medium text-brand-text-primary">
                Face & Anti Aging Treatments
              </h3>
              <p className="leading-relaxed text-sm md:text-base text-brand-text-primary max-w-90">
                Smooth, refresh, and rejuvenate your appearance with
                physician-administered injectables and advanced treatments.
              </p>
            </div>
          </div>
          <div className="col-span-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredServices.map((service) => (
              <Link
                href={service.link}
                key={service.title}
                className="flex flex-col gap-1 items-center"
              >
                <div className="md:size-64 rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={1000}
                    height={1000}
                    className="aspect-square object-cover"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-sm md:text-lg font-medium text-brand-secondary-dark leading-relaxed text-center">
                    {service.title}
                  </h2>
                  <p className="text-xs md:text-sm text-center text-brand-secondary-dark/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <Image
          src="/images/about-illustration-1.png"
          alt="Pure Aesthetics MD"
          width={160}
          height={60}
          className="w-80 object-cover absolute top-[450px] -left-10 opacity-30"
        />
      </div>
      <div
        id="body-wellness"
        className="flex justify-center w-full bg-brand-primary/20 relative min-h-screen"
      >
        <Image
          src="/images/about-illustration-2.png"
          alt="Pure Aesthetics MD"
          width={160}
          height={60}
          className="w-80 object-cover absolute top-0 -right-0 opacity-30"
        />
        <section className="w-11/12 md:w-10/12 grid grid-cols-1 md:grid-cols-2 py-16 gap-6 md:gap-10 z-20">
          <div className="col-span-1 flex items-center justify-center md:hidden">
            <div className="space-y-3 md:space-y-6 text-center">
              <h3 className="text-lg md:text-2xl font-medium text-brand-text-primary">
                Body & Wellness Treatments
              </h3>
              <p className="leading-relaxed text-sm md:text-base text-brand-text-primary max-w-90">
                Feel confident inside and out with non-invasive solutions that
                target body concerns and support overall well-being.
              </p>
            </div>
          </div>
          <div className="col-span-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {bodyServices.map((service) => (
              <Link
                href={service.link}
                key={service.title}
                className="flex flex-col gap-1 items-center"
              >
                <div className="md:size-64 rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={1000}
                    height={1000}
                    className="aspect-square object-cover"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-sm md:text-lg font-medium text-brand-secondary-dark leading-relaxed text-center">
                    {service.title}
                  </h2>
                  <p className="text-xs md:text-sm text-center text-brand-secondary-dark/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="col-span-1 md:flex items-center justify-center hidden">
            <div className="space-y-6">
              <h3 className="text-lg md:text-2xl font-medium text-brand-text-primary">
                Body & Wellness Treatments
              </h3>
              <p className="leading-relaxed text-sm md:text-base text-brand-text-primary max-w-90">
                Feel confident inside and out with non-invasive solutions that
                target body concerns and support overall well-being.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div
        id="laser-treatments"
        className="flex justify-center w-full relative min-h-screen"
      >
        <Image
          src="/images/dropper-illustration-1.png"
          alt="Pure Aesthetics MD"
          width={160}
          height={60}
          className="w-80 object-cover absolute -top-40 -left-10 opacity-30"
        />
        <section className="w-11/12 md:w-10/12 grid grid-cols-1 md:grid-cols-2 py-16 gap-6 md:gap-10 z-20">
          <div className="col-span-1 flex items-center">
            <div className="space-y-3 md:space-y-6 text-center md:text-left">
              <h3 className="text-lg md:text-2xl font-medium text-brand-text-primary">
                Laser Treatments
              </h3>
              <p className="leading-relaxed text-sm md:text-base text-brand-text-primary max-w-90">
                Advanced technology for skin renewal, hair reduction, and
                pigment correction
              </p>
            </div>
          </div>
          <div className="col-span-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {laserTreatments.map((service) => (
              <Link
                href={service.link}
                key={service.title}
                className="flex flex-col gap-1 items-center"
              >
                <div className="md:size-64 rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={1000}
                    height={1000}
                    className="aspect-square object-cover"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-sm md:text-lg font-medium text-brand-secondary-dark leading-relaxed text-center">
                    {service.title}
                  </h2>
                  <p className="text-xs md:text-sm text-center text-brand-secondary-dark/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <Image
          src="/images/about-illustration-2.png"
          alt="Pure Aesthetics MD"
          width={160}
          height={60}
          className="w-80 object-cover absolute top-60 -right-0 opacity-30"
        />
      </div>

      <div
        id="skin-care"
        className="flex justify-center w-full bg-brand-primary-light/20 relative min-h-screen"
      >
        <section className="w-11/12 md:w-10/12 grid grid-cols-1 md:grid-cols-2 py-16 gap-6 md:gap-10 z-20">
          <div className="col-span-1 flex items-center justify-center md:hidden">
            <div className="space-y-3 md:space-y-6 text-center">
              <h3 className="text-lg md:text-2xl font-medium text-brand-text-primary">
                Skin Care Treatments
              </h3>
              <p className="leading-relaxed text-sm md:text-base text-brand-text-primary max-w-90">
                Transform your skin with treatments tailored to your unique
                needs.
              </p>
            </div>
          </div>
          <div className="col-span-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {skinCareServices.map((service) => (
              <Link
                href={service.link}
                key={service.title}
                className="flex flex-col gap-1 items-center"
              >
                <div className="md:size-64 rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={1000}
                    height={1000}
                    className="aspect-square object-cover"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-sm md:text-lg font-medium text-brand-secondary-dark leading-relaxed text-center">
                    {service.title}
                  </h2>
                  <p className="text-xs md:text-sm text-center text-brand-secondary-dark/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="col-span-1 md:flex items-center justify-center hidden">
            <div className="space-y-6">
              <h3 className="text-lg md:text-2xl font-medium text-brand-text-primary">
                Skin Care Treatments
              </h3>
              <p className="leading-relaxed text-sm md:text-base text-brand-text-primary max-w-90">
                Transform your skin with treatments tailored to your unique
                needs.
              </p>
            </div>
          </div>
        </section>
        <Image
          src="/images/dropper-illustration-2.png"
          alt="Pure Aesthetics MD"
          width={160}
          height={60}
          className="w-80 object-cover absolute top-60 -right-0 opacity-30"
        />
      </div>

      <div
        id="women-health"
        className="flex justify-center w-full relative min-h-screen"
      >
        <section className="w-11/12 md:w-10/12 grid grid-cols-1 md:grid-cols-2 py-16 gap-6 md:gap-10 z-20">
          <div className="col-span-1 flex items-center">
            <div className="space-y-3 md:space-y-6 text-center md:text-left">
              <h3 className="text-lg md:text-2xl font-medium text-brand-text-primary">
                Women&apos;s Health Treatments
              </h3>
              <p className="leading-relaxed text-sm md:text-base text-brand-text-primary max-w-90">
                Confidential care to restore comfort, confidence, and intimacy
              </p>
            </div>
          </div>
          <div className="col-span-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthServices.map((service) => (
              <Link
                href={service.link}
                key={service.title}
                className="flex flex-col gap-1 items-center"
              >
                <div className="md:size-64 rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={1000}
                    height={1000}
                    className="aspect-square object-cover"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-sm md:text-lg font-medium text-brand-secondary-dark leading-relaxed text-center">
                    {service.title}
                  </h2>
                  <p className="text-xs md:text-sm text-center text-brand-secondary-dark/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <Image
          src="/images/about-illustration-1.png"
          alt="Pure Aesthetics MD"
          width={160}
          height={60}
          className="w-80 object-cover absolute top-20 -left-10 opacity-30"
        />
      </div>
    </div>
  );
};

export default ServicesPage;
