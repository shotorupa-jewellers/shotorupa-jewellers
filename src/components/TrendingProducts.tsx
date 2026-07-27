"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Swiper,
  SwiperSlide
} from "swiper/react";

import {
  Autoplay,
  FreeMode
} from "swiper/modules";

import "swiper/css";

import { useProducts } from "@/context/ProductContext";





type TrendingProduct = {

id:string;

name:string;

category?:string;

price:number;

image:string;

metal?:string;

stone?:string;

weight?:string;

};







const defaultProducts:TrendingProduct[] = [


{
id:"1",
name:"The Meridian Ring",
category:"Diamond",
price:460000,
image:"/images/ring.jpg",
metal:"18K Yellow Gold",
stone:"Diamond",
weight:"0.62ct"
},


{
id:"2",
name:"Royal Gold Necklace",
category:"Gold",
price:85000,
image:"/images/necklace.jpg",
metal:"22K Yellow Gold",
stone:"Gold",
weight:"25g"
},


{
id:"3",
name:"Bridal Jewellery Set",
category:"Gold",
price:250000,
image:"/images/bridal.jpg",
metal:"22K Yellow Gold",
stone:"Diamond",
weight:"60g"
},


{
id:"4",
name:"Luxury Earrings",
category:"Gold",
price:45000,
image:"/images/earrings.jpg",
metal:"22K Gold",
stone:"Gold",
weight:"10g"
},


{
id:"5",
name:"Royal Diamond Necklace",
category:"Diamond",
price:350000,
image:"/images/diamond-necklace.jpg",
metal:"18K Gold",
stone:"Diamond",
weight:"35g"
},


{
id:"6",
name:"Gold Bracelet",
category:"Gold",
price:70000,
image:"/images/bracelet.jpg",
metal:"22K Gold",
stone:"Gold",
weight:"15g"
}


];









export default function TrendingProducts(){



const {

products:adminProducts

}=useProducts();








const products:TrendingProduct[] = [


...defaultProducts,



...(adminProducts || []).map((product:any)=>(


{


id:String(product.id),


name:product.name,


category:product.category || "",


price:Number(product.price),


image:product.image || "/images/ring.jpg",


metal:product.metal || product.purity || "",


stone:product.stone || "",


weight:product.weight || ""


}


))


].sort(


(a,b)=>b.price-a.price


);









return(



<section

className="
max-w-7xl
mx-auto
px-6
py-16
"

>



<h2

className="
text-4xl
font-serif
text-center
text-[#6b4d1f]
mb-14
tracking-wide
"

>

TRENDING PRODUCTS

</h2>









<Swiper


modules={[Autoplay,FreeMode]}


spaceBetween={30}


slidesPerView={1}



breakpoints={

{

640:{
slidesPerView:2
},


1024:{
slidesPerView:4
}


}

}



autoplay={{

delay:3000,

disableOnInteraction:false

}}



freeMode={true}


grabCursor={true}


loop={true}



>







{

products.map((product)=>(



<SwiperSlide

key={product.id}

>



<div

className="
card
group
bg-white
overflow-hidden
shadow-xl
transition-all
duration-700
hover:-translate-y-3
hover:shadow-2xl
cursor-pointer
"

>







<div

className="
relative
overflow-hidden
"

>



<Image


src={product.image}


alt={product.name}


width={600}


height={700}


quality={100}


className="
w-full
h-[380px]
object-cover
transition
duration-700
group-hover:scale-110
"

/>









<div

className="
absolute
inset-0
bg-black/40
opacity-0
group-hover:opacity-100
transition
duration-500
flex
items-center
justify-center
"

>



<Link


href={`/products/${product.id}`}


className="
border
border-white
text-white
px-8
py-3
text-xs
uppercase
tracking-widest
hover:bg-white
hover:text-black
transition
"

>

VIEW DETAILS

</Link>



</div>





</div>









<div

className="
card-info
p-5
flex
justify-between
items-start
"

>



<div>



<p

className="
uppercase
tracking-[0.35em]
text-[10px]
text-[#A6875A]
mb-3
"

>

THE SIGNATURE EDIT

</p>






<h3

className="
font-serif
text-xl
text-[#19160F]
font-medium
leading-tight
"

>

{product.name}

</h3>








<p

className="
text-gray-500
mt-3
text-sm
"

>

{product.metal || ""}

&nbsp; · &nbsp;

{product.stone || ""}

</p>



</div>








<div

className="
text-right
"

>



<p

className="
text-[#A6875A]
text-[15px]
font-normal
font-serif
tracking-[0.08em]
"

>

৳ {product.price.toLocaleString()}

</p>







<p

className="
text-xs
text-gray-400
mt-2
"

>

{product.weight || ""}

</p>



</div>





</div>









<Link


href={`/products/${product.id}`}


className="
block
mx-5
mb-5
border
border-[#A6875A]
py-3
text-center
text-xs
uppercase
tracking-[0.25em]
text-[#A6875A]
hover:bg-[#A6875A]
hover:text-white
transition
duration-500
"

>

EXPLORE JEWELLERY

</Link>







</div>






</SwiperSlide>



))


}







</Swiper>








</section>



);


}