"use client";

import Link from "next/link";

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
"
>


{/* ================= HERO ================= */}


<section
className="
relative
min-h-[88vh]
flex
items-center
overflow-hidden
border-b
border-black/10
"
>


{/* Diamond Facet */}

<svg
className="
absolute
right-[-160px]
top-[-60px]
w-[640px]
h-[640px]
opacity-30
animate-spin-slow
"
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

M50 5 L50 35
M80 25 L50 35
M92 55 L50 35
M92 55 L67 60
M72 90 L67 60
M28 90 L33 60
M8 55 L33 60
M8 55 L50 35
M20 25 L50 35
M33 60 L67 60
"

fill="none"

stroke="#A6875A"

strokeWidth="0.6"

/>

</svg>





{/* HERO CONTENT */}


<div
className="
relative
z-10
w-full
pl-4
md:pl-10
lg:pl-20
text-left
"
>



<span
className="
text-xs
tracking-[0.25em]
uppercase
text-[#A6875A]
"
>

Fine Jewelry, Since 2009

</span>


<h1
className="
mt-6
font-serif
font-normal
text-[clamp(42px,5vw,72px)]
leading-[0.98]
tracking-[-0.02em]
text-left
m-0
"
>

Light,

<br/>

<span
className="
italic
text-[#A6875A]
"
>

held.

</span>


</h1>







<p
className="
mt-8
max-w-[420px]
text-[17px]
leading-relaxed
text-[#3a352c]
"
>

Each piece is cut from a single idea:
that light itself can be worn.
Rare stones, honest metals,
no ornament without purpose.

</p>







<Link

href="/shop"

className="
inline-block
mt-8
px-8
py-4
border
border-[#A6875A]
text-xs
tracking-[0.2em]
uppercase
hover:bg-[#A6875A]
hover:text-white
transition
"

>

Explore the Collection

</Link>




</div>


</section>
{/* ================= DIVIDER ================= */}


<div
className="
flex
items-center
gap-4
max-w-[600px]
mx-auto
mt-24
px-8
"
>


<div className="h-px bg-black/10 flex-1"/>


<svg
className="w-5 h-5"
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

stroke="#A6875A"

/>


</svg>



<div className="h-px bg-black/10 flex-1"/>


</div>







{/* ================= PRODUCTS ================= */}



<section
className="
max-w-[1240px]
mx-auto
px-8
py-24
"
>



<div
className="
text-center
mb-14
"
>


<span
className="
text-xs
uppercase
tracking-[0.2em]
text-[#A6875A]
"
>

Featured

</span>



<h2
className="
mt-3
font-serif
font-normal
tracking-[-0.01em]
text-4xl
"
>

The Signature Edit

</h2>


</div>



<TrendingProducts />


</section>







{/* ================= PHILOSOPHY ================= */}



<section

className="
max-w-[1240px]
mx-auto
px-8
pb-32
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







<div
className="
text-left
"
>


<span
className="
text-xs
tracking-[0.2em]
uppercase
text-[#A6875A]
"
>

Our Philosophy

</span>







<h2
className="
mt-5
font-serif
font-normal
tracking-[-0.01em]
text-5xl
leading-tight
"
>

An atelier

<br/>

of one idea

</h2>







<p
className="
mt-6
text-[#3a352c]
leading-relaxed
"
>

Shotorupa was founded on the belief
that fine jewelry should hold light
rather than compete with it.
Every stone is hand-selected with care.

</p>







<p
className="
mt-4
text-[#3a352c]
leading-relaxed
"
>

We make few pieces, slowly.
What we make, we stand behind for life.

</p>







<Link

href="/about"

className="
inline-block
mt-8
px-8
py-4
border
border-black
text-xs
uppercase
tracking-widest
hover:bg-black
hover:text-white
transition
"

>

Read Our Story

</Link>



</div>



</section>

{/* ================= ADMIN ACCESS ================= */}

<div
className="
fixed
bottom-6
right-6
z-40
"
>

<Link

href="/admin"

className="
px-5
py-3

bg-[#19160F]

text-[#A6875A]

border
border-[#A6875A]

rounded-full

text-xs

tracking-widest

uppercase

shadow-xl

hover:bg-[#A6875A]

hover:text-black

transition-all

duration-300
"

>

Admin

</Link>

</div>


</main>





<LuxuryFooter />



</>

);

}