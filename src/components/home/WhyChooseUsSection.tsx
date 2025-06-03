import React from "react";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: "/images/trust.svg", // We'll create these icons later
      title: "Trusted Expertise",
      description:
        "With years of experience in the Indonesian real estate market, we provide reliable guidance and expert advice.",
    },
    {
      icon: "/images/properties.svg",
      title: "Diverse Properties",
      description:
        "Browse through our extensive collection of properties, from urban apartments to beachfront villas.",
    },
    {
      icon: "/images/support.svg",
      title: "24/7 Support",
      description:
        "Our dedicated team is always available to assist you with any inquiries or concerns.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-light-gray">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose ArahRumah
          </h2>{" "}
          <p className="text-dark-gray text-lg max-w-2xl mx-auto">
            We&apos;re committed to helping you find your dream property with
            confidence and ease
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-emerald-green bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-emerald-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {index === 0 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    )}
                    {index === 1 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    )}
                    {index === 2 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    )}
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-dark-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
