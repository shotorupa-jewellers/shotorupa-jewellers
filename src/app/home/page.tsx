"use client";

import Navbar from "@/components/Navbar";
import LuxuryHero from "@/components/LuxuryHero";

import TrendingProducts from "@/components/TrendingProducts";
import GoldCollection from "@/components/GoldCollection";
import DiamondCollection from "@/components/DiamondCollection";
import NewArrivals from "@/components/NewArrivals";
import OfferBanner from "@/components/OfferBanner";
import LuxuryFooter from "@/components/LuxuryFooter";


export default function Home(){


return(

<>


{/* PREMIUM NAVBAR */}

<Navbar />



<main
className="
bg-[#F6F3EC]
text-[#19160F]
pt-24
"
>




{/* HERO */}

<LuxuryHero />







{/* GOLD DIVIDER */}

<div
className="
max-w-[600px]
mx-auto
my-20
gold-line
"
/>







{/* TRENDING */}

<section
className="
max-w-[1240px]
mx-auto
px-8
py-20
"
>


<div
className="
text-center
mb-14
"
>


<p
className="
uppercase
tracking-[0.3em]
text-xs
text-[#A6875A]
"
>

Featured Collection

</p>




<h2
className="
font-luxury
text-5xl
mt-4
"
>

The Signature Edit

</h2>


</div>




<TrendingProducts />


</section>









{/* GOLD COLLECTION */}


<section
className="
py-20
"
>


<GoldCollection />


</section>









{/* DIAMOND COLLECTION */}


<section
className="
py-20
"
>


<DiamondCollection />


</section>









{/* NEW ARRIVAL */}


<section
className="
py-20
"
>


<NewArrivals />


</section>









{/* OFFER */}


<section
className="
py-20
"
>


<OfferBanner />


</section>






{/* PHILOSOPHY */}


<section
className="
max-w-[1240px]
mx-auto
px-8
py-28
grid
md:grid-cols-2
gap-16
items-center
"
>



<div
className="
aspect-[5/6]
bg-[#241C16]
flex
items-center
justify-center
"
>


<svg
className="w-2/3"
viewBox="0 0 100 100"
>


<path

d="
M50 5
L80 25
L92 55
L72 90
L28 90
L8 55
L20 25 Z
"

fill="none"

stroke="#CBB088"

/>


</svg>


</div>








<div>


<p
className="
uppercase
tracking-[0.25em]
text-xs
text-[#A6875A]
"
>

Our Philosophy

</p>




<h2
className="
font-luxury
text-5xl
mt-5
leading-tight
"
>

An atelier
<br/>
of one idea

</h2>





<p
className="
mt-8
text-[#3a352c]
leading-relaxed
"
>

Shotorupa Jewellers creates timeless
pieces where gold, diamonds and
craftsmanship meet elegance.

</p>





<p
className="
mt-5
text-[#3a352c]
leading-relaxed
"
>

Every creation is designed to become
a memory that lasts forever.

</p>





</div>




</section>






</main>







{/* FOOTER */}

<LuxuryFooter />



</>


)

}