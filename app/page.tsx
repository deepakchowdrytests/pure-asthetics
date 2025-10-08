import ContactForm from "@/components/ContactForm";
import FeaturedServicesSection from "@/components/FeaturedServices";
import Gallery from "@/components/Gallery";
import GrandOpening from "@/components/GrandOpening";
import Hero from "@/components/Hero";
import MembershipProgram from "@/components/MembershipProgram";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Transformations from "@/components/Transformations";
import YourDoctor from "@/components/YourDoctor";

export default function Home() {
  return (
    <div className="">
      {/* <Image src={"/a.png"} alt="hero-bg" width={2000} height={1200} className="w-full" /> */}
      <Hero />
      <Services />
      <FeaturedServicesSection />
      <Transformations />
      <Testimonials />

      <YourDoctor />
      <GrandOpening />
      <MembershipProgram />
      <ContactForm />
      <Gallery />
    </div>
  );
}
