"use client";

import Image from "next/image";
import Link from "next/link";

import { useOffers } from "@/context/OfferContext";


export default function OfferBanner(){


const {offers}=useOffers();



const offer = offers[0];



// Admin থেকে offer না থাকলে default banner দেখাবে

if(!offer){

return(

<section className="max-w-7xl mx-auto px-6 py-16">

<div className="relative overflow-hidden rounded-[35px] shadow-2xl">


<Image

src="/images/offers.jpg"

alt="Wedding Offer"

width={1920}

height={900}

quality={100}

className="w-full h-[650px] object-cover object-center"

/>



<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20"></div>



<div className="absolute inset-0 flex items-center">

<div className="px-8 md:px-20 text-white">


<span className="bg-[#b08d57]/90 px-5 py-2 rounded-full">

Wedding Offer

</span>



<h2 className="mt-6 text-5xl font-serif font-bold">

WEDDING SEASON

<br/>

SPECIAL

</h2>



<h3 className="mt-5 text-3xl">

MAKE YOUR MOMENT

<br/>

<span className="text-[#E8C76A]">

UNFORGETTABLE

</span>

</h3>



<p className="mt-6 text-xl">

Discover handcrafted bridal gold & diamond jewellery.

</p>


<Link

href="/products"

className="inline-block mt-8 bg-[#b08d57] px-10 py-4 rounded-full"

>

SHOP NOW

</Link>



</div>

</div>


</div>

</section>

);

}





return(


<section className="max-w-7xl mx-auto px-6 py-16">


<div className="relative overflow-hidden rounded-[35px] shadow-2xl">



<Image

src={offer.image || "/images/offers.jpg"}

alt={offer.title}

width={1920}

height={900}

quality={100}

className="w-full h-[650px] object-cover object-center"

/>





<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20"></div>





<div className="absolute inset-0 flex items-center">


<div className="max-w-2xl px-8 md:px-20 text-white">





<span className="inline-block bg-[#b08d57]/90 px-5 py-2 rounded-full uppercase tracking-[4px]">

{offer.subtitle}

</span>






<h2 className="mt-6 text-5xl md:text-7xl font-serif font-bold">

{offer.title}

</h2>






<h3 className="mt-5 text-3xl">

{offer.discount}

</h3>







<p className="mt-8 text-xl text-gray-200">

{offer.description}

</p>






<div className="flex gap-4 mt-10">


<Link

href="/products"

className="bg-[#b08d57] px-10 py-4 rounded-full font-semibold"

>

SHOP NOW

</Link>



<Link

href="/products"

className="border-2 border-white px-10 py-4 rounded-full"

>

VIEW COLLECTION

</Link>



</div>






</div>


</div>




</div>


</section>



);


}