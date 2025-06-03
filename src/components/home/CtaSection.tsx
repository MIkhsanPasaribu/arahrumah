import React from "react";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="py-20 px-4 bg-black text-white relative">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
          Ready to Find Your Dream Property?
        </h2>{" "}
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto relative z-10">
          Whether you&apos;re looking to buy, sell, or rent, we&apos;re here to
          guide you every step of the way
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
          <Link
            href="/properties"
            className="bg-emerald-green hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-md transition duration-300"
          >
            Explore Properties
          </Link>
          <Link
            href="/contact"
            className="bg-transparent hover:bg-white/10 border border-white text-white font-bold px-8 py-3 rounded-md transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>{" "}
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20 bg-emerald-green/10 bg-repeat"></div>
    </section>
  );
};

export default CtaSection;
