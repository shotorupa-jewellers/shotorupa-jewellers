"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Shotorupa Jewellers"
        fill
        priority
        quality={100}
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20"></div>

      {/* Golden Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#9b7a3d]/20 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6">

        <div className="max-w-3xl text-white">

          <span className="inline-block px-5 py-2 rounded-full bg-[#b08d57]/90 text-sm tracking-[4px] uppercase font-semibold backdrop-blur-sm">
            Luxury Jewellery Since 1998
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-serif font-bold leading-tight">
            Timeless Gold
            <br />
            &
            <span className="text-[#E8C76A]"> Diamond </span>
            Jewellery
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-200 leading-8 max-w-2xl">
            Discover handcrafted jewellery collections created with elegance,
            tradition and timeless beauty. Designed to celebrate your most
            precious moments.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <Link
              href="/products"
              className="bg-[#b08d57] hover:bg-[#8d6c33] transition duration-300 px-10 py-4 rounded-full text-white font-semibold shadow-lg"
            >
              Shop Collection
            </Link>

            <Link
              href="/consultation"
              className="border-2 border-white hover:bg-white hover:text-black transition duration-300 px-10 py-4 rounded-full font-semibold"
            >
              Book Consultation
            </Link>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl">

            <div>
              <h2 className="text-3xl font-bold text-[#E8C76A]">25+</h2>
              <p className="text-gray-300 mt-2">
                Years Experience
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#E8C76A]">10K+</h2>
              <p className="text-gray-300 mt-2">
                Happy Customers
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#E8C76A]">500+</h2>
              <p className="text-gray-300 mt-2">
                Exclusive Designs
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}