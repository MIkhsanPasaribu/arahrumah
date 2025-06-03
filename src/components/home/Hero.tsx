import React from "react";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const Hero = ({ title, subtitle, imageUrl }: HeroProps) => {
  return (
    <div className="relative h-[600px] w-full">
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt="Beautiful Home"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/properties?status=for-sale"
            className="bg-emerald-green hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-md transition duration-300"
          >
            Find Properties for Sale
          </Link>
          <Link
            href="/properties?status=for-rent"
            className="bg-white hover:bg-light-gray text-black font-bold px-8 py-3 rounded-md transition duration-300"
          >
            Find Properties for Rent
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
