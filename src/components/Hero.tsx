"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";


export default function Hero() {


return (

<section
className="
relative
w-full
h-screen
min-h-[700px]
overflow-hidden
"
>


{/* BACKGROUND */}

<Image

src="/images/hero.jpg"

alt="Shotorupa Jewellers Luxury Jewellery"

fill

priority

quality={100}

className="
object-cover
object-center
hero-image
"

/>





{/* DARK OVERLAY */}

<div

className="
absolute
inset-0
bg-gradient-to-r
from-[#19160F]/90
via-[#19160F]/50
to-transparent

"

/>




{/* GOLD LIGHT EFFECT */}

<div

className="
absolute
inset-0
bg-gradient-to-t
from-[#A6875A]/20
to-transparent

"

/>







{/* FLOATING DIAMOND */}


<motion.div

animate={{

y:[0,-20,0],

rotate:[0,180,360]

}}

transition={{

duration:20,

repeat:Infinity,

ease:"linear"

}}


className="
hidden
lg:block

absolute

right-32

top-32

opacity-40

"


>


<div

className="
w-52
h-52

border
border-[#D6C09A]

rotate-45

"

/>


</motion.div>









{/* CONTENT */}



<div

className="
relative
z-10
h-full
max-w-[1400px]
mx-auto
px-8

flex
items-center

"

>



<motion.div


initial={{

opacity:0,

y:60

}}

animate={{

opacity:1,

y:0

}}

transition={{

duration:1.2

}}


className="
max-w-3xl
text-white

"


>


<span

className="
inline-block

text-xs

uppercase

tracking-[0.45em]

text-[#D6C09A]

mb-8

"

>

Fine Jewelry, Since 2009

</span>







<h1

className="
font-serif

text-6xl

md:text-8xl

leading-[0.9]

tracking-tight

"

>

Light,

<br/>


<span

className="
italic
text-[#E8C76A]

"

>

held.

</span>


</h1>







<p

className="
mt-8

text-gray-200

text-base

md:text-lg

leading-8

max-w-xl

"

>

Each piece is cut from a single idea:
that light itself can be worn.
Rare stones, honest metals,
no ornament without purpose.

</p>








<div

className="
flex
flex-wrap
gap-5
mt-10

"

>


<Link

href="/shop"

className="
luxury-btn
inline-block

"

>

Explore Collection

</Link>



<Link

href="/contact"

className="
px-10
py-4

border
border-white/60

text-xs

uppercase

tracking-[0.25em]

hover:bg-white

hover:text-black

transition

"

>

Book Consultation

</Link>



</div>








{/* STATS */}


<div

className="
grid
grid-cols-3
gap-8

mt-16

max-w-xl

"


>


<div>

<h2

className="
text-3xl
font-serif
text-[#E8C76A]

"

>

25+

</h2>

<p className="text-sm text-gray-300 mt-2">

Years Craft

</p>

</div>





<div>

<h2

className="
text-3xl
font-serif
text-[#E8C76A]

"

>

10K+

</h2>


<p className="text-sm text-gray-300 mt-2">

Clients

</p>


</div>







<div>

<h2

className="
text-3xl
font-serif
text-[#E8C76A]

"

>

500+

</h2>


<p className="text-sm text-gray-300 mt-2">

Designs

</p>


</div>






</div>





</motion.div>



</div>






</section>


);

}