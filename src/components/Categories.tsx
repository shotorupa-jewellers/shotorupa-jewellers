"use client";

import Link from "next/link";

export default function Categories() {


const categories = [

{
name:"Gold Jewellery",
image:"/categories/gold.jpg",
link:"/products"
},

{
name:"Diamond Jewellery",
image:"/categories/diamond.jpg",
link:"/products"
},

{
name:"Rings",
image:"/categories/ring.jpg",
link:"/products"
},

{
name:"Necklace",
image:"/categories/necklace.jpg",
link:"/products"
},

{
name:"Earrings",
image:"/categories/earring.jpg",
link:"/products"
},

{
name:"Bangles",
image:"/categories/bangle.jpg",
link:"/products"
}


];





return(


<section className="bg-[#f8f4ee] py-12">


<div className="max-w-7xl mx-auto px-6">



<h2 className="text-4xl font-serif text-center text-[#6b4d1f] mb-10">

Shop By Category

</h2>





<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">



{

categories.map((category)=>(


<Link

href={category.link}

key={category.name}

className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"

>



<div className="h-40 overflow-hidden">


<img

src={category.image}

alt={category.name}

className="w-full h-full object-cover hover:scale-110 transition duration-500"

/>


</div>





<h3 className="text-center py-4 font-semibold text-[#6b4d1f]">

{category.name}

</h3>





</Link>


))


}



</div>



</div>



</section>


);


}