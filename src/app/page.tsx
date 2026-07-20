"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { products } from "@/data/products";

import TrendingProducts from "@/components/TrendingProducts";
import GoldCollection from "@/components/GoldCollection";
import DiamondCollection from "@/components/DiamondCollection";
import NewArrivals from "@/components/NewArrivals";
import OfferBanner from "@/components/OfferBanner";
import AccountButton from "@/components/AccountButton";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";



export default function Home(){


const [search,setSearch] = useState("");

const { cart } = useCart();

const { wishlist } = useWishlist();



const searchProducts = products.filter((product)=>

product.name.toLowerCase().includes(search.toLowerCase())

);





return(


<main className="min-h-screen bg-[#f8f4ee]">



{/* Top Menu */}


<div className="bg-[#9b7a3d] text-white text-sm">


<div className="max-w-7xl mx-auto flex justify-center gap-8 py-3">



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





{/* Header */}


<header className="bg-white">


<div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">





<div>


<h1 className="text-4xl font-serif text-[#9b7a3d] font-bold">

SHOTORUPA

</h1>


<p className="text-xs tracking-[4px] text-gray-500">

JEWELLERS

</p>


</div>






<input


type="text"


placeholder="Search Jewellery"


value={search}


onChange={(e)=>setSearch(e.target.value)}


className="hidden md:block border rounded-full px-6 py-2 w-80 text-black"


/>








<div className="flex gap-8 text-black text-sm items-center">



<AccountButton />





<Link
href="/orders"
className="hover:text-[#9b7a3d]"
>

My Orders

</Link>






<Link
href="/wishlist"
className="hover:text-[#9b7a3d] flex items-center gap-1"
>

Wishlist ❤️

<span className="bg-[#9b7a3d] text-white text-xs px-2 py-1 rounded-full">

{wishlist.length}

</span>


</Link>







<Link
href="/cart"
className="hover:text-[#9b7a3d] flex items-center gap-1"
>

Cart 🛒


<span className="bg-[#9b7a3d] text-white text-xs px-2 py-1 rounded-full">

{cart.length}

</span>


</Link>





</div>





</div>


</header>








{/* Search Result */}


{

search && (


<section className="max-w-7xl mx-auto px-6 py-8">


<h2 className="text-3xl font-serif text-[#9b7a3d] mb-6">

Search Result

</h2>





{

searchProducts.length === 0 ?


(

<p className="text-gray-600">

No Product Found

</p>

)



:



(


<div className="grid grid-cols-1 md:grid-cols-4 gap-6">



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

className="w-full h-48 object-cover rounded"

/>





<h3 className="font-bold mt-3 text-[#6b4d1f]">

{product.name}

</h3>





<p className="text-[#9b7a3d] text-xl">

৳ {product.price.toLocaleString()}

</p>







<Link

href={`/products/${product.id}`}

className="block mt-3 text-center bg-[#9b7a3d] text-white py-2 rounded"

>

View Product

</Link>




</div>


))


}



</div>


)


}



</section>


)


}







{/* Hero */}



<section className="max-w-7xl mx-auto px-6 mt-4">


<div className="relative rounded-[40px] overflow-hidden border-[8px] border-[#d4b06b]">





<Image

src="/images/hero.jpg"

alt="Bride"

width={2000}

height={1200}

priority

className="w-full h-[620px] object-cover"

/>






<div className="absolute inset-0 bg-black/40"></div>






<div className="absolute left-16 top-1/2 -translate-y-1/2 text-white">


<h2 className="text-7xl font-serif">

ELEGANCE,

<br/>

UNVEILED.

</h2>





<p className="mt-5 text-lg">

Discover curated bridal jewellery designed for your moment.

</p>




</div>






</div>


</section>








{/* Products */}


<TrendingProducts />

<GoldCollection />

<DiamondCollection />

<NewArrivals />

<OfferBanner />




</main>


);


}