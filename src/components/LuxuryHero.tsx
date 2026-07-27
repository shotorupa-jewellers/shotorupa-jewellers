"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowDown,
  ArrowRight
} from "lucide-react";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform
} from "framer-motion";

import type { MouseEvent } from "react";


export default function LuxuryHero(){


const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);



const springX = useSpring(mouseX,{
  stiffness:40,
  damping:20
});


const springY = useSpring(mouseY,{
  stiffness:40,
  damping:20
});



const imageMoveX = useTransform(
 springX,
 [-30,30],
 [-20,20]
);


const imageMoveY = useTransform(
 springY,
 [-30,30],
 [-20,20]
);




function handleMouseMove(
e:MouseEvent<HTMLDivElement>
){


const x =
(e.clientX / window.innerWidth - .5) * 60;


const y =
(e.clientY / window.innerHeight - .5) * 60;


mouseX.set(x);

mouseY.set(y);


}




return(


<section

onMouseMove={handleMouseMove}

className="
relative
min-h-screen
overflow-hidden
bg-[#19160F]
"


>


{/* BACKGROUND IMAGE */}


<motion.div

style={{

x:imageMoveX,

y:imageMoveY

}}

className="
absolute
inset-0
scale-110
"

>


<Image

src="/images/hero.jpg"

fill

priority

alt="Luxury Jewellery"

className="
object-cover
"

 />



<div

className="
absolute
inset-0
bg-gradient-to-r
from-black/90
via-black/50
to-transparent
"

/>



<div

className="
absolute
inset-0
bg-gradient-to-t
from-black/80
to-transparent
"

/>



</motion.div>






{/* FRAME */}



<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
duration:2
}}

className="
absolute
inset-8
border
border-[#D6B77A]/40
"

/>







{/* CONTENT */}



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
max-w-[1300px]
mx-auto
px-10
w-full
"

>


<motion.p

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

className="
uppercase
tracking-[0.6em]
text-xs
text-[#D6B77A]
"

>

SHOTORUPA JEWELLERS

</motion.p>







<motion.h1

initial={{
opacity:0,
y:80
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1.3
}}

className="
font-luxury
text-white
text-[clamp(70px,10vw,140px)]
leading-[0.85]
mt-8
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


</motion.h1>







<motion.p

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
delay:0.8
}}

className="
mt-10
max-w-xl
text-lg
text-white/80
leading-relaxed
"

>


Where pure gold meets exceptional craftsmanship.
Jewellery created for moments that last forever.


</motion.p>









<motion.div

initial={{
opacity:0,
y:50
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:1
}}

className="
mt-12
flex
gap-6
"

>


<Link

href="/products"

className="
group
flex
items-center
gap-4
px-12
py-5
bg-[#B08D32]
text-white
uppercase
tracking-[.3em]
text-xs
hover:bg-[#D6B77A]
transition
"

>


Explore Collection


<ArrowRight

size={18}

className="
group-hover:translate-x-3
transition
"

/>


</Link>





<Link

href="/about"

className="
border
border-white/50
text-white
px-12
py-5
uppercase
tracking-[.3em]
text-xs
hover:bg-white
hover:text-black
transition
"

>


Our Story


</Link>



</motion.div>



</div>


</div>








{/* ROTATING DIAMOND */}



<motion.div


animate={{
rotate:360
}}


transition={{
duration:40,
repeat:Infinity,
ease:"linear"
}}


className="
absolute
right-20
bottom-20
hidden
lg:block
opacity-30
"


>


<svg

width="170"

height="170"

viewBox="0 0 100 100"

>


<path

d="
M50 5
L85 35
L70 90
L30 90
L15 35
Z
"

fill="none"

stroke="#D6B77A"

/>


</svg>


</motion.div>









{/* SCROLL */}



<div

className="
absolute
bottom-10
left-1/2
-translate-x-1/2
text-white/60
"


>


<ArrowDown

size={30}

className="
animate-bounce
"

/>


</div>




</section>


)

}