"use client";

import Image from "next/image";
import Link from "next/link";


export default function OurStory(){


return(

<main className="
bg-[#F6F3EC]
text-[#19160F]
overflow-hidden
">


{/* HERO */}

<section className="
relative
h-[80vh]
flex
items-center
overflow-hidden
">


<Image

src="/images/story.jpg"

alt="Shotorupa Story"

fill

className="
object-cover
"

/>


<div className="
absolute
inset-0
bg-black/60
"/>



<div className="
relative
z-10
max-w-5xl
mx-auto
px-8
text-center
text-white
">


<p className="
uppercase
tracking-[0.5em]
text-xs
text-[#D6B77A]
">

Our Story

</p>



<h1 className="
font-luxury
text-6xl
md:text-8xl
mt-8
">

Crafting

<br/>

Timeless Beauty

</h1>



<p className="
mt-8
max-w-2xl
mx-auto
text-white/80
leading-relaxed
">

For generations, Shotorupa Jewellers has
created jewellery where tradition meets
modern luxury.

</p>


</div>


</section>





{/* STORY SECTION */}


<section className="
max-w-6xl
mx-auto
px-8
py-32
grid
md:grid-cols-2
gap-20
items-center
">



<div className="
relative
aspect-[4/5]
">


<Image

src="/images/workshop.jpg"

alt="Jewellery Workshop"

fill

className="
object-cover
"

/>


</div>





<div>


<p className="
uppercase
tracking-[0.4em]
text-xs
text-[#A6875A]
">

Our Heritage

</p>



<h2 className="
font-luxury
text-5xl
mt-6
">

An Art Passed Through Time

</h2>



<p className="
mt-8
leading-relaxed
text-[#51483c]
">

Every Shotorupa creation begins with
careful craftsmanship, pure materials
and attention to every detail.

</p>



<p className="
mt-5
leading-relaxed
text-[#51483c]
">

From classic gold jewellery to rare diamond
collections, every piece carries a story.

</p>



<Link

href="/products"

className="
inline-block
mt-10
border
border-[#A6875A]
px-10
py-4
text-xs
tracking-[0.3em]
uppercase
hover:bg-[#A6875A]
hover:text-white
transition
"

>

Explore Collection

</Link>


</div>


</section>








{/* VALUES */}


<section className="
bg-[#241C16]
text-[#F6F3EC]
py-28
">


<div className="
max-w-6xl
mx-auto
px-8
grid
md:grid-cols-3
gap-10
text-center
">



<div>

<h3 className="
font-luxury
text-4xl
text-[#D6B77A]
">

25+

</h3>

<p className="
mt-3
uppercase
tracking-widest
text-xs
">

Years Experience

</p>

</div>





<div>

<h3 className="
font-luxury
text-4xl
text-[#D6B77A]
">

10000+

</h3>


<p className="
mt-3
uppercase
tracking-widest
text-xs
">

Happy Clients

</p>

</div>





<div>

<h3 className="
font-luxury
text-4xl
text-[#D6B77A]
">

500+

</h3>


<p className="
mt-3
uppercase
tracking-widest
text-xs
">

Unique Designs

</p>

</div>



</div>


</section>



</main>


)


}