import Image from "next/image";
import React from "react";

const YourDoctor = () => {
  return (
    <section className="flex items-center justify-center py-16 md:py-0 min-h-screen bg-[#FFE3D5]">
      <div className="w-11/12 md:w-10/12 flex flex-col gap-4 md:flex-row items-center justify-between text-brand-text-primary">
        <div className="flex flex-col gap-5 w-full md:w-[30%]">
          <h2 className="text-3xl font-medium">MEET YOUR DOCTOR</h2>
          <Image
            src={"/img/doctor-1.jpg"}
            width={400}
            height={800}
            alt="doctor"
          />
          <h2 className="text-2xl font-medium">Dr. Radhika Paluri, MD</h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 w-full md:w-[63%]">
          <p className="leading-8 md:leading-relaxed text-base md:text-lg font-normal">
            At Pure Aesthetics MD, our care is led by{" "}
            <strong>Dr. Radhika Paluri</strong>, a Board-Certified Internal
            Medicine physician with over 20 years of clinical experience. Her
            extensive background in medicine forms the foundation for the safe,
            evidence-based, and personalized aesthetic care we provide.
          </p>
          <p className="leading-8 md:leading-relaxed text-base md:text-lg font-normal">
            Dr. Paluri has received advanced training in aesthetic medicine and
            wellness therapies, combining her medical expertise with an artistic
            eye for natural, balanced results. She is passionate about helping
            each patient look and feel their best - restoring confidence through
            treatments that enhance beauty while supporting overall health and
            well-being.
          </p>
          <p className="leading-8 md:leading-relaxed text-base md:text-lg font-normal">
            Her approach is simple yet powerful: medical precision, natural
            results, and compassionate care in every interaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default YourDoctor;
