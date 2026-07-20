"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


const products = [
  {
    name: "Royal Gold Necklace",
    image: "/images/necklace.jpg",
    price: "৳ 1,50,000",
  },
  {
    name: "Diamond Ring",
    image: "/images/ring.jpg",
    price: "৳ 85,000",
  },
  {
    name: "Bridal Jewellery Set",
    image: "/images/bridal.jpg",
    price: "৳ 3,50,000",
  },
  {
    name: "Gold Earrings",
    image: "/images/earrings.jpg",
    price: "৳ 45,000",
  },
];


export default function TrendingProducts(){

return (

<section className="max-w-7xl mx-auto px-6 py-12">


<h2 className="text-4xl font-serif text-center text-[#6b4d1f] mb-8">
TRENDING PRODUCTS
</h2>


<Swiper

modules={[Autoplay]}

spaceBetween={25}

slidesPerView={1}

breakpoints={{
640:{
slidesPerView:2,
},

1024:{
slidesPerView:4,
},
}}


autoplay={{
delay:2500,
disableOnInteraction:false,
}}

grabCursor={true}

loop={true}

>


{products.map((product)=>(

<SwiperSlide key={product.name}>


<div className="bg-white rounded-xl shadow-lg overflow-hidden">


<Image
src={product.image}
alt={product.name}
width={400}
height={300}
className="w-full h-64 object-cover"
/>


<div className="p-5">

<h3 className="font-bold text-[#6b4d1f]">
{product.name}
</h3>


<p className="mt-2 text-gray-600">
{product.price}
</p>


<button className="mt-4 text-[#9b7a3d]">
View Details →
</button>


</div>


</div>


</SwiperSlide>

))}


</Swiper>


</section>

);

}