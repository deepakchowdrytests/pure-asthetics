import Image from "next/image";

const Careers = () => {
  return (
    <div className="min-h-screen bg-brand-base-dark/80 flex flex-col items-center justify-center py-12 md:py-16 relative">
      <Image
        src="/images/about-main-illustration-2.png"
        alt="Careers"
        width={1000}
        height={1000}
        className="w-96 opacity-30 object-cover absolute top-1/2 right-0 -translate-y-1/2"
      />
      {/* Hero Section */}
      <section className="w-11/12 md:w-10/12 min-h-screen space-y-20">
        <div className="space-y-12">
          <h1 className="text-3xl lg:text-4xl font-semibold text-brand-text-primary">
            Join Our Growing Team
          </h1>
          <p className="text-base text-brand-text-primary/80 leading-relaxed">
            At Pure Aesthetics MD, we believe that confidence and beauty go
            hand-in-hand with compassionate care. Our physician led clinic is
            dedicated to providing safe, natural, and effective aesthetic
            treatments—and we’re looking for talented, passionate professionals
            to grow with us.
          </p>
        </div>
        <div className="grid gap-12 items-start w-full">
          <div className="w-full space-y-12">
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand-text-primary">
              Why Work With Us?
            </h2>
            <div className="space-y-8 w-full">
              <div>
                <p className="text-base text-brand-text-primary/80">
                  <span className="font-semibold">
                    1. Physician-Led Practice
                  </span>{" "}
                  – Be part of a clinic where safety, medical expertise, and
                  patient trust come first.
                </p>
              </div>
              <div>
                <p className="text-base text-brand-text-primary/80">
                  <span className="font-semibold">
                    2. Collaborative Culture
                  </span>{" "}
                  – Work alongside professionals who are passionate about
                  helping people look and feel their best.
                </p>
              </div>
              <div>
                <p className="text-base text-brand-text-primary/80">
                  <span className="font-semibold">3. Professional Growth</span>{" "}
                  – Access continuing education, training opportunities, and
                  exposure to advanced medical aesthetics technology.
                </p>
              </div>
              <div>
                <p className="text-base text-brand-text-primary/80">
                  <span className="font-semibold">
                    4. Supportive Environment
                  </span>{" "}
                  – We value teamwork, respect, and creating a positive
                  workplace for staff and clients alike.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-12 items-start w-full">
          <div className="w-full space-y-12">
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand-text-primary">
              Opportunities
            </h2>
            <p>
              We’re always interested in connecting with professionals who share
              our vision. Opportunities may include:
            </p>
            <div className="space-y-8 w-full">
              <div>
                <p className="text-base text-brand-text-primary/80">
                  <span className="font-semibold">
                    1. Aesthetic Nurse Injectors (RN/NP/PA)
                  </span>{" "}
                  – Skilled in Botox, dermal fillers, and regenerative
                  treatments.
                </p>
              </div>
              <div>
                <p className="text-base text-brand-text-primary/80">
                  <span className="font-semibold">
                    2. Medical Aestheticians
                  </span>{" "}
                  – Focused on skincare, facials, and advanced treatments.
                </p>
              </div>
              <div>
                <p className="text-base text-brand-text-primary/80">
                  <span className="font-semibold">
                    3. Client Care Specialists
                  </span>{" "}
                  – Passionate about customer service, scheduling, and helping
                  clients feel welcome
                </p>
              </div>
              <div>
                <p className="text-base text-brand-text-primary/80">
                  <span className="font-semibold">
                    4. Marketing & Support Staff
                  </span>{" "}
                  – Dedicated to sharing our story and growing our community
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-12 items-start w-full">
          <div className="w-full space-y-12">
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand-text-primary">
              Who We’re Looking For
            </h2>
            <div className="space-y-8 w-full">
              <div>
                <p className="text-base text-brand-text-primary/80">
                  Clinicians who are detail-oriented and safety-focused
                </p>
              </div>
              <div>
                <p className="text-base text-brand-text-primary/80">
                  Professionals with a gentle touch and artistic eye
                </p>
              </div>
              <div>
                <p className="text-base text-brand-text-primary/80">
                  Individuals who are empathetic, professional, and approachable
                </p>
              </div>
              <div>
                <p className="text-base text-brand-text-primary/80">
                  Team players who want to grow with a new and expanding
                  practice
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-12 items-start w-full">
          <div className="w-full space-y-12">
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand-text-primary">
              How to Apply
            </h2>
            <div className="space-y-4">
              <p className="text-base text-brand-text-primary/80">
                If you’re interested in joining our team, we’d love to hear from
                you.
              </p>
              <p className="text-base text-brand-text-primary/80">
                Please send your resume and a short cover letter to:
                info@pureaestheticsmd.org For questions, call: (603) 800-0333
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
