"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  // Team members data
  const team = [
    {
      name: "M. Syarif Hidayatullah Efri",
      position: "Founder & Developer",
      bio: "M. Syarif Hidayatullah Efri created ArahRumah in 2025 as a solo project. With a passion for web development and real estate, he built ArahRumah to revolutionize property transactions in Indonesia.",
      image: "/images/team/placeholder-1.svg",
    },
  ];
  // Company stats
  const stats = [
    { value: "500+", label: "Properties Listed" },
    { value: "1,000+", label: "Happy Customers" },
    { value: "New", label: "2025 Project" },
    { value: "15+", label: "Cities Covered" },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24">
        {" "}
        <div className="absolute inset-0 opacity-30 bg-cover bg-center about-hero-bg"></div>
        <div className="relative container mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About ArahRumah
          </h1>{" "}
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted partner in finding the perfect property in Indonesia, a
            project developed by M. Syarif Hidayatullah Efri in 2025.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>{" "}
              <p className="text-dark-gray mb-4">
                Founded in 2025, ArahRumah was developed single-handedly by M.
                Syarif Hidayatullah Efri with a simple mission: to make property
                buying, selling, and renting in Indonesia more transparent and
                efficient. Born out of a realization that many Indonesian
                property seekers faced challenges with unreliable listings,
                hidden fees, and complicated processes.
              </p>
              <p className="text-dark-gray mb-4">
                M. Syarif Hidayatullah Efri, a passionate web developer,
                experienced these challenges firsthand while searching for
                properties in Indonesia. Seeing a gap in the market for a
                trustworthy, user-friendly platform, he launched ArahRumah as a
                solo project to address these issues.
              </p>
              <p className="text-dark-gray">
                Today, we&apos;re proud to have grown into Indonesia&apos;s
                premier real estate marketplace, with thousands of verified
                listings across the country and a reputation for excellence and
                integrity.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px]">
              <Image
                src="/images/about-story.svg"
                alt="ArahRumah office"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 bg-light-gray bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-dark-gray max-w-3xl mx-auto">
              At ArahRumah, everything we do is guided by our commitment to
              these core principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-emerald-green rounded-full flex items-center justify-center mb-6">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Trust & Transparency
              </h3>
              <p className="text-dark-gray">
                We verify all listings and provide complete information to
                ensure our users can make informed decisions with confidence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-emerald-green rounded-full flex items-center justify-center mb-6">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-dark-gray">
                We continuously improve our platform with new features and
                technologies to make property searching and transactions easier.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-emerald-green rounded-full flex items-center justify-center mb-6">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Client-Centered</h3>
              <p className="text-dark-gray">
                Whether you&apos;re a first-time buyer or experienced investor,
                we&apos;re dedicated to providing exceptional service tailored
                to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-emerald-green mb-2">
                  {stat.value}
                </div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>{" "}
            <p className="text-dark-gray max-w-3xl mx-auto">
              Meet the developer behind ArahRumah.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-lg bg-white border border-light-gray rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-72">
                <Image
                  src={team[0].image}
                  alt={team[0].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{team[0].name}</h3>
                <p className="text-emerald-green mb-3">{team[0].position}</p>
                <p className="text-dark-gray">{team[0].bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-light-gray bg-opacity-30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-dark-gray mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have found their perfect
            home through ArahRumah.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/properties"
              className="bg-emerald-green hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-md transition duration-300"
            >
              Browse Properties
            </Link>
            <Link
              href="/contact"
              className="bg-dark-gray hover:bg-black text-white font-bold px-8 py-3 rounded-md transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
