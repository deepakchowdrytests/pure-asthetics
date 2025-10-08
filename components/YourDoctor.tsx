import Image from "next/image";
import React from "react";

const YourDoctor = () => {
  return (
    <section className="flex items-center justify-center py-16 md:py-0 min-h-screen bg-[#FFE3D5]">
      <div className="w-11/12 md:w-10/12 grid grid-cols-1 md:grid-cols-7 gap-6 text-brand-text-primary">
        <div className="flex flex-col gap-5 col-span-1 md:col-span-2">
          <h2 className="text-3xl font-medium">MEET YOUR DOCTOR</h2>
          <Image
            src={"/img/doctor-1.jpg"}
            width={400}
            height={800}
            alt="doctor"
          />
          <h2 className="text-2xl font-medium">Dr. Radhika Paluri, MD</h2>
        </div>
        <div className="col-span-1 md:col-span-5 flex items-center w-full md:w-4/5">
          <p className="leading-8 md:leading-relaxed text-base md:text-2xl font-thin">
            Under the leadership of{" "}
            <span className="font-semibold">Dr. Radhika Paluri, MD</span> A
            board-certified physician passionate about aesthetics and wellness.
            Our team blends medical expertise with artistic precision to create
            results you’ll truly love.
          </p>
        </div>
      </div>
    </section>
  );
};

export default YourDoctor;
