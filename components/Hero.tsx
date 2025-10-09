import { BookIcon, PhoneIcon } from "@/lib/icons";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="flex items-center justify-center h-screen md:min-h-auto md:h-[75vh] bg-[var(--color-brand-base-dark)]">
      <div className="w-full flex items-center justify-between h-full">
        <div className="grid grid-cols-1 md:grid-cols-5 h-full w-full relative">
          <Image
            src={"/images/hero-illustration.png"}
            alt=""
            width={2000}
            height={1200}
            className="absolute top-0 left-0 w-68 h-[70vh] hidden md:block opacity-50"
          />

          <div className="col-span-1 md:col-span-3 h-full rounded-bl-[200px] md:rounded-bl-[300px] overflow-hidden md:hidden">
            <Image
              src={"/images/main.jpg"}
              alt=""
              width={2000}
              height={1200}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col justify-center md:w-9/12 w-11/12 mx-auto z-20">
            <div className="flex flex-col justify-end gap-4 h-4/5">
              <h1 className="text-4xl md:text-5xl font-medium text-brand-text-primary">
                Beauty, Backed by Medicine.
              </h1>
              <p className="text-base md:text-lg leading-7.5 text-brand-text-primary tracking-wide">
                Discover physician-led aesthetic care that enhances your natural
                beauty—safely, effectively, and affordably.
              </p>
            </div>
            <div className="flex items-end pb-4 gap-6 text-sm h-2/5">
              <button className="flex items-center gap-1 text-brand-text-primary">
                <Link
                  target="_blank"
                  href={"https://djrsv.myaestheticrecord.com/online-booking"}
                  className="flex items-center gap-1"
                >
                  <BookIcon height={14} width={14} />
                  <span>Book online</span>
                </Link>
              </button>
              <button className="flex items-center gap-1 text-brand-text-primary">
                <Link
                  href={"tel:+16038000333"}
                  className="flex items-center gap-1"
                >
                  <PhoneIcon height={15} width={15} />
                  <span>Call us now</span>
                </Link>
              </button>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 h-full rounded-bl-[300px] overflow-hidden hidden md:block">
            <Image
              src={"/images/main.jpg"}
              alt=""
              width={2000}
              height={1200}
              className="w-full h-[75vh] object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
