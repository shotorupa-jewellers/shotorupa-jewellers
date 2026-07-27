"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



const product = {

name:"The Meridian Ring",

price:460000,

image:"/images/ring.jpg",

metal:"18K Yellow Gold",

stone:"Diamond",

carat:"0.62ct",

clarity:"VS1",

cut:"Excellent",

description:
"A single line of diamonds traces the finger like a horizon — our founding design, still hand-set one stone at a time."

};




const infoData = [

{
title:"Details & Craftsmanship",
text:"Cast and hand-finished in our own atelier. Every stone is graded independently before setting."
},

{
title:"Shipping & Returns",
text:"Insured shipping worldwide, 3–5 business days. Complimentary returns within 30 days."
},

{
title:"Care Instructions",
text:"Store separately in the pouch provided. Professional cleaning recommended annually."
}

];





export default function ProductDetails(){


const [size,setSize]=useState("7");

const [openInfo,setOpenInfo]=useState<number | null>(null);



return(


<div

className="
bg-[#F6F3EC]
text-[#19160F]
"

>




<section

className="
max-w-7xl
mx-auto
px-6
py-20
grid
grid-cols-1
md:grid-cols-2
gap-20
"

>





{/* IMAGE LEFT */}


<div

className="
bg-white
overflow-hidden
"

>


<Image

src={product.image}

alt={product.name}

width={700}

height={800}

quality={100}

className="
w-full
h-[700px]
object-cover
"

/>


</div>









{/* DETAILS RIGHT */}



<div

className="
flex
flex-col
justify-center
"

>



<h1

className="
font-serif
text-5xl
tracking-wide
"

>

{product.name}

</h1>





<p

className="
mt-6
text-lg
"

>

{product.metal}

</p>




<p

className="
text-gray-500
"

>

{product.stone}

</p>







<h2

className="
mt-10
text-[22px]
font-serif
font-normal
tracking-wider
text-[#A6875A]
"

>

৳ {product.price.toLocaleString()}

</h2>








<p

className="
mt-8
leading-8
text-gray-600
max-w-lg
"

>

{product.description}

</p>









{/* SPECIFICATION */}



<div

className="
mt-8
space-y-2
text-sm
"

>


<p>
Metal: {product.metal}
</p>


<p>
Stone: {product.stone}
</p>


<p>
Carat: {product.carat}
</p>


<p>
Clarity: {product.clarity}
</p>


<p>
Cut: {product.cut}
</p>


</div>









{/* SIZE */}



<div

className="
mt-8
"

>


<p

className="
mb-3
text-sm
"

>

Ring Size

</p>



<div

className="
flex
gap-3
"

>


{

["6","7","8","9"].map((item)=>(


<button

key={item}

onClick={()=>setSize(item)}

className={`

w-11
h-11
border

${
size===item

?

"bg-[#A6875A] text-white border-[#A6875A]"

:

"border-gray-400"

}

`}

>

{item}

</button>


))

}



</div>


</div>









{/* BUTTON */}



<div

className="
flex
gap-4
mt-10
"

>


<button

className="
border
border-[#A6875A]
px-8
py-4
text-xs
tracking-[0.25em]
hover:bg-[#A6875A]
hover:text-white
transition
"

>

ADD TO CART

</button>




<button

className="
bg-[#A6875A]
text-white
px-8
py-4
text-xs
tracking-[0.25em]
"

>

BUY NOW

</button>


</div>









{/* SMALL INFORMATION RIGHT SIDE */}



<div

className="
mt-8
border-t
border-gray-300
"

>


{

infoData.map((item,index)=>(


<div

key={index}

className="
border-b
border-gray-200
py-3
"

>


<button

onClick={()=>setOpenInfo(
openInfo===index ? null : index
)}

className="
w-full
flex
justify-between
items-center
"

>


<h3

className="
font-serif
text-sm
"

>

{item.title}

</h3>



<span

className="
text-[#A6875A]
"

>

{

openInfo===index

?

"−"

:

"+"

}

</span>


</button>







{

openInfo===index &&

<p

className="
mt-3
text-xs
text-gray-600
leading-6
"

>

{item.text}

</p>

}



</div>


))


}



</div>







</div>



</section>









{/* FOOTER */}



<footer

className="
bg-[#19160F]
text-white
px-8
py-16
"

>


<div

className="
max-w-7xl
mx-auto
"

>


<h2

className="
font-serif
text-5xl
tracking-[0.2em]
"

>

SHOTORUPA

</h2>



<p

className="
mt-5
text-gray-300
"

>

Fine jewelry, cast slowly, worn for life.

</p>



<p

className="
text-gray-400
mt-2
"

>

Magura, Bangladesh.

</p>







<div

className="
grid
grid-cols-2
md:grid-cols-4
gap-5
mt-12
text-sm
"

>

<Link href="#">Shop</Link>

<Link href="#">Rings</Link>

<Link href="#">Necklaces</Link>

<Link href="#">Earrings</Link>

<Link href="#">Company</Link>

<Link href="#">About</Link>

<Link href="#">Contact</Link>

<Link href="#">Admin</Link>


</div>








<div

className="
mt-12
"

>


<p>

Stay in Light

</p>



<div

className="
flex
mt-4
"

>


<input

placeholder="Email address"

className="
px-5
py-3
bg-white
text-black
placeholder:text-gray-500
outline-none
w-64
"

/>



<button

className="
bg-[#A6875A]
px-6
"

>

Join

</button>



</div>


</div>






<p

className="
mt-12
text-gray-400
text-sm
"

>

© 2026 Shotorupa Jewellers

</p>



</div>


</footer>





</div>


);


}