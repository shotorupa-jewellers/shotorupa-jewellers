"use client";

import Image from "next/image";


export default function OfferBanner(){

return (

<section className="max-w-7xl mx-auto px-6 py-12">


<div className="relative overflow-hidden rounded-[35px]">


<Image
src="/images/offers.jpg"
alt="Wedding Offer"
width={1600}
height={600}
quality={100}
className="w-full h-[400px] object-cover"
/>


<div className="absolute inset-0 bg-black/40"></div>



<div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 text-white">


<p className="text-lg tracking-widest">
WEDDING SEASON SPECIAL
</p>


<h2 className="text-5xl md:text-6xl font-serif font-bold mt-3">
MAKE YOUR MOMENT
<br />
UNFORGETTABLE
</h2>


<p className="mt-5 text-lg">
Get exclusive offers on bridal gold & diamond jewellery
</p>



<button className="mt-8 bg-white text-black px-8 py-3 rounded font-semibold w-fit">
SHOP NOW
</button>


</div>


</div>


</section>

);

}