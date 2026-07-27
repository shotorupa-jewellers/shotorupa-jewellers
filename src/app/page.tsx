"use client";

import Link from "next/link";

import LuxuryHero from "@/components/LuxuryHero";
import TrendingProducts from "@/components/TrendingProducts";
import LuxuryFooter from "@/components/LuxuryFooter";


export default function Home() {


return (

<>


<main
className="
bg-[#F6F3EC]
text-[#19160F]
pt-24
overflow-hidden
"
>


{/* HERO */}

<LuxuryHero />



{/* GOLD DIVIDER */}

<div
className="
gold-line
max-w-[700px]
mx-auto
mt-24
"
/>





{/* FEATURED PRODUCTS */}

<section
className="
max-w-[1240px]
mx-auto
px-8
py-28
"
>


<div
className="
text-center
mb-16
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
mt-5
"
>

The Signature Edit

</h2>



<p
className="
mt-5
text-[#6b6255]
max-w-xl
mx-auto
"
>

Exceptional jewellery crafted with pure gold,
diamonds and timeless artistry.

</p>


</div>



<TrendingProducts />


</section>







{/* PHILOSOPHY */}

<section
className="
max-w-[1240px]
mx-auto
px-8
pb-32
grid
md:grid-cols-2
gap-20
items-center
"
>


<div
className="
relative
aspect-[5/6]
bg-[#241C16]
overflow-hidden
"
>


<div
className="
absolute
inset-8
border
border-[#CBB088]
"
/>


<div
className="
absolute
inset-0
flex
items-center
justify-center
"
>


<svg
className="w-2/3 opacity-80"
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


</div>





<div
className="
reveal
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

Our Philosophy

</p>



<h2
className="
font-luxury
text-5xl
leading-tight
mt-6
"
>

An atelier

<br/>

of one idea

</h2>



<p
className="
mt-8
leading-relaxed
text-[#51483c]
"
>

Shotorupa Jewellers was founded on the belief
that jewellery should capture light, emotion and memories.

</p>



<p
className="
mt-5
leading-relaxed
text-[#51483c]
"
>

Every piece is designed with precision,
purity and a commitment to timeless beauty.

</p>



<Link

href="/our-story"

className="
inline-block
mt-10
px-10
py-4
border
border-[#A6875A]
uppercase
tracking-[0.2em]
text-xs
hover:bg-[#A6875A]
hover:text-white
transition
"

>

Discover Our Story

</Link>


</div>



</section>








{/* NEWSLETTER */}

<section

className="
bg-[#241C16]
py-24
text-center
text-[#F6F3EC]
"

>


<p
className="
uppercase
tracking-[0.3em]
text-xs
text-[#CBB088]
"
>

Stay Connected

</p>



<h2
className="
font-luxury
text-5xl
mt-5
"
>

Receive our latest collections

</h2>



<p
className="
mt-5
text-[#ddd3c5]
"
>

Exclusive jewellery updates and offers.

</p>



<div
className="
mt-10
flex
justify-center
"
>


<Link

href="/contact"

className="
px-10
py-4
border
border-[#CBB088]
uppercase
tracking-widest
text-xs
hover:bg-[#CBB088]
hover:text-black
transition
"

>

Contact Us

</Link>


</div>


</section>



</main>





<LuxuryFooter />


</>

);


}