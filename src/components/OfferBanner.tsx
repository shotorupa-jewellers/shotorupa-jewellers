"use client";

import Image from "next/image";

export default function OfferBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="relative overflow-hidden rounded-[35px] shadow-2xl">

        <Image
          src="/images/offers.jpg"
          alt="Wedding Offer"
          width={1920}
          height={900}
          quality={100}
          priority
          className="w-full h-[650px] object-cover object-center"
        />

        {/* Luxury Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20"></div>

        {/* Golden Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#9b7a3d]/20 to-transparent"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-2xl px-8 md:px-20 text-white">

            <span className="inline-block bg-[#b08d57]/90 backdrop-blur-sm px-5 py-2 rounded-full uppercase tracking-[4px] text-sm font-semibold">
              Wedding Offer
            </span>

            <h2 className="mt-6 text-4xl md:text-7xl font-serif font-bold leading-tight">
              WEDDING SEASON
              <br />
              SPECIAL
            </h2>

            <h3 className="mt-5 text-2xl md:text-4xl font-light leading-relaxed">
              MAKE YOUR MOMENT
              <br />
              <span className="text-[#E8C76A] font-semibold">
                UNFORGETTABLE
              </span>
            </h3>

            <p className="mt-8 text-lg md:text-xl text-gray-200 leading-8 max-w-xl">
              Discover handcrafted bridal gold & diamond jewellery
              designed to make your wedding day truly unforgettable.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="bg-[#b08d57] hover:bg-[#8d6c33] text-white px-10 py-4 rounded-full text-lg font-semibold transition duration-300 shadow-lg">
                SHOP NOW
              </button>

              <button className="border-2 border-white hover:bg-white hover:text-black text-white px-10 py-4 rounded-full text-lg font-semibold transition duration-300">
                VIEW COLLECTION
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}