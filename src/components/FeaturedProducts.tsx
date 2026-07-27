"use client";

import Image from "next/image";
import Link from "next/link";


const products = [

{
name:"Royal Diamond Necklace",
price:"₹2,45,000",
image:"/images/necklace.jpg"
},

{
name:"Heritage Gold Ring",
price:"₹85,000",
image:"/images/ring.jpg"
},

{
name:"Bridal Gold Set",
price:"₹5,20,000",
image:"/images/bridal.jpg"
},

{
name:"Diamond Earrings",
price:"₹1,25,000",
image:"/images/earrings.jpg"
}

];


export default function FeaturedProducts(){

return(

<section className="bg-[#faf7f0] py-32">


<div className="max-w-7xl mx-auto px-8">


<div className="text-center mb-20">


<p className="uppercase tracking-[6px] text-[#b08d32] text-sm">

Featured Collection

</p>


<h2 className="font-luxury text-5xl mt-5 text-[#201a12]">

Pieces of timeless beauty

</h2>


<p className="mt-5 text-[#6b6255] max-w-xl mx-auto">

Designed with precision, crafted with passion,
and created to become your forever treasure.

</p>


</div>




<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">


{
products.map((product,index)=>(


<div
key={index}
className="
group
"
>


<div className="
relative
aspect-[3/4]
overflow-hidden
bg-[#eee6d8]
">


<Image

src={product.image}

alt={product.name}

fill

className="
object-cover
group-hover:scale-110
transition duration-700
"

/>


</div>



<div className="pt-6">


<h3 className="font-luxury text-2xl text-[#201a12]">

{product.name}

</h3>


<p className="mt-2 text-[#b08d32]">

{product.price}

</p>


<Link

href="/products"

className="
inline-block
mt-5
text-sm
uppercase
tracking-widest
border-b
border-[#b08d32]
pb-2
"

>

View Piece

</Link>


</div>


</div>


))

}


</div>


</div>


</section>

)

}