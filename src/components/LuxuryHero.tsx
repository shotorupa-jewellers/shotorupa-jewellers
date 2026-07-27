"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";


export default function LuxuryHero(){

return(

<section
className="
relative
min-h-screen
overflow-hidden
bg-[#19160F]
"
>


{/* ================= IMAGE ================= */}

<div
className="
absolute
inset-0
overflow-hidden
"
>

<Image

src="/images/hero.jpg"

alt="Luxury Jewellery"

fill

priority

className="
object-cover
object-center
scale-110
animate-heroZoom
"

/>



{/* Cartier Dark Overlay */}

<div
className="
absolute
inset-0
bg-gradient-to-r
from-[#19160F]/85
via-[#19160F]/45
to-[#19160F]/10
"
/>



<div
className="
absolute
inset-0
bg-gradient-to-t
from-[#19160F]/70
via-transparent
to-transparent
"
/>


</div>







{/* ================= GOLD FRAME ================= */}


<div
className="
absolute
inset-8
border
border-[#D6B77A]/40
"
/>



<div
className="
absolute
top-14
left-14
w-24
h-24
border-l
border-t
border-[#D6B77A]
"
/>



<div
className="
absolute
bottom-14
right-14
w-24
h-24
border-r
border-b
border-[#D6B77A]
"
/>







{/* ================= CONTENT ================= */}



<div
className="
relative
z-10
min-h-screen
flex
items-center
"
>


<div
className="
max-w-[1240px]
mx-auto
px-8
w-full
"
>


<div
className="
max-w-2xl
"
>



<p
className="
uppercase
tracking-[0.5em]
text-xs
text-[#D6B77A]
hero-reveal
"
>

SHOTORUPA JEWELLERS

</p>







<h1

className="
font-luxury
text-white
text-[clamp(70px,10vw,140px)]
leading-[0.88]
mt-8
hero-reveal-delay
"

>


Light,

<br/>


<span
className="
italic
text-[#D6B77A]
"
>

held.

</span>


</h1>








<p

className="
mt-10
max-w-lg
text-lg
leading-relaxed
text-white/85
hero-reveal-delay2
"

>

Where pure gold meets
exceptional craftsmanship.
Jewellery created for
moments that last forever.

</p>









<div
className="
mt-12
flex
flex-wrap
gap-6
hero-reveal-delay3
"
>




<Link

href="/products"

className="
group
relative
overflow-hidden
inline-flex
items-center
gap-4
px-12
py-5
bg-[#B08D32]
text-white
uppercase
text-xs
tracking-[0.3em]
transition
duration-500
"

>


<span className="relative z-10">

Explore Collection

</span>


<ArrowRight
size={18}
className="
relative
z-10
group-hover:translate-x-2
transition
"
/>



<div
className="
absolute
inset-0
bg-[#D6B77A]
translate-x-full
group-hover:translate-x-0
transition
duration-500
"
/>



</Link>






<Link

href="/about"

className="
px-12
py-5
border
border-white/70
text-white
uppercase
text-xs
tracking-[0.3em]
hover:bg-white
hover:text-black
transition
duration-500
"

>

Our Story

</Link>





</div>



</div>



</div>



</div>









{/* ================= DIAMOND ================= */}



<div
className="
absolute
right-24
bottom-24
hidden
lg:block
opacity-30
animate-spin-slow
"
>


<svg
width="160"
height="160"
viewBox="0 0 100 100"
>


<path

d="
M50 5
L85 35
L70 90
L30 90
L15 35 Z
"

fill="none"

stroke="#D6B77A"

/>


</svg>


</div>









{/* Scroll */}


<div
className="
absolute
bottom-10
left-1/2
-translate-x-1/2
text-white/70
"
>

<ArrowDown
size={28}
className="animate-bounce"
/>


</div>





</section>


)

}