"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import TrendingProducts from "@/components/TrendingProducts";
import GoldCollection from "@/components/GoldCollection";
import DiamondCollection from "@/components/DiamondCollection";
import NewArrivals from "@/components/NewArrivals";
import OfferBanner from "@/components/OfferBanner";
import AccountButton from "@/components/AccountButton";

import { products } from "@/data/products";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";


export default function Home(){


const [search,setSearch] = useState("");


const {cart}=useCart();

const {wishlist}=useWishlist();



const searchProducts = products.filter((product)=>

product.name
.toLowerCase()
.includes(search.toLowerCase())

);



return(

<main className="min-h-screen bg-[#f8f4ee]">


{/* MENU BAR */}

<div className="bg-[#9b7a3d] text-white">

<div className="max-w-7xl mx-auto px-6 py-4 flex justify-center gap-8 text-sm font-semibold">


<Link href="/bridal-collections">
BRIDAL COLLECTIONS
</Link>


<Link href="/necklaces">
NECKLACES
</Link>


<Link href="/earrings">
EARRINGS
</Link>


<Link href="/maang-tikkas">
MAANG TIKKAS
</Link>


<Link href="/our-story">
OUR STORY
</Link>


<Link href="/consultation">
CONSULTATION
</Link>


</div>

</div>



{/* HEADER */}

<header className="bg-white shadow">


<div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">


<Link href="/">

<div>

<h1 className="text-4xl font-serif font-bold text-[#9b7a3d]">
SHOTORUPA
</h1>

<p className="text-xs tracking-[5px] text-gray-500 text-center">
JEWELLERS
</p>

</div>

</Link>




<input

type="text"

placeholder="Search Jewellery"

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="hidden md:block border rounded-full px-6 py-3 w-96 text-black"

/>





<div className="flex gap-6 items-center text-black">


<AccountButton />


<Link href="/orders">
My Orders
</Link>


<Link href="/wishlist">

Wishlist ❤️

<span className="bg-[#9b7a3d] text-white px-2 rounded-full">

{wishlist.length}

</span>

</Link>



<Link href="/cart">

Cart 🛒

<span className="bg-[#9b7a3d] text-white px-2 rounded-full">

{cart.length}

</span>

</Link>



</div>



</div>


</header>





{/* SEARCH RESULT */}

{

search &&

<section className="max-w-7xl mx-auto px-6 py-10">


<h2 className="text-3xl font-serif text-[#6b4d1f] mb-6">
Search Result
</h2>


<div className="grid md:grid-cols-4 gap-6">


{

searchProducts.map((product)=>(

<div
key={product.id}
className="bg-white rounded-xl shadow p-4"
>


<Image

src={product.image}

alt={product.name}

width={400}

height={300}

className="w-full h-48 object-cover rounded-xl"

/>



<h3 className="font-bold mt-3">

{product.name}

</h3>


<p className="text-[#9b7a3d] font-bold">

৳ {product.price.toLocaleString()}

</p>


<Link

href={`/products/${product.id}`}

className="block mt-3 bg-[#9b7a3d] text-white text-center py-2 rounded"

>

View Product

</Link>


</div>


))


}


</div>


</section>


}





{/* HERO */}


<section className="max-w-7xl mx-auto px-6 py-8">


<div className="relative rounded-[40px] overflow-hidden border-8 border-[#d4b06b]">


<Image

src="/images/hero.jpg"

alt="Bride"

width={2000}

height={1200}

className="w-full h-[620px] object-cover"

/>



<div className="absolute inset-0 bg-black/40"></div>



<div className="absolute left-16 top-1/2 -translate-y-1/2 text-white">


<h2 className="text-7xl font-serif">

ELEGANCE,

<br/>

UNVEILED.

</h2>


<p className="mt-5 text-xl">

Discover curated bridal jewellery designed for your moment.

</p>


</div>



</div>


</section>





<TrendingProducts />

<GoldCollection />

<DiamondCollection />

<NewArrivals />

<OfferBanner />



</main>


);

}