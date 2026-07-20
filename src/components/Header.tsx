"use client";

import Link from "next/link";
import { useState } from "react";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";


export default function Header(){


const [menu,setMenu] = useState(false);


const { cart } = useCart();

const { wishlist } = useWishlist();




return(


<header className="bg-white shadow-md sticky top-0 z-50">



<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">





{/* Logo */}

<Link
href="/"
className="text-3xl font-serif font-bold text-[#9b7a3d]"
>

SHOTORUPA

<span className="text-[#6b4d1f]">
 JEWELLERS
</span>

</Link>








{/* Desktop Menu */}

<nav className="hidden md:flex items-center gap-8 text-[#6b4d1f] font-semibold">


<Link href="/">
Home
</Link>


<Link href="/products">
Products
</Link>



<Link href="/wishlist">

Wishlist

<span className="ml-1 text-[#9b7a3d]">

({wishlist.length})

</span>

</Link>




<Link href="/cart">

Cart

<span className="ml-1 text-[#9b7a3d]">

({cart.length})

</span>

</Link>





<Link href="/account">

Account

</Link>



</nav>









{/* Mobile Button */}

<button

onClick={()=>setMenu(!menu)}

className="md:hidden text-3xl text-[#9b7a3d]"

>

☰

</button>






</div>








{/* Mobile Menu */}

{

menu &&

<div className="md:hidden bg-white border-t px-6 py-5 space-y-4 text-[#6b4d1f] font-semibold">


<Link

onClick={()=>setMenu(false)}

href="/"

className="block"

>

Home

</Link>




<Link

onClick={()=>setMenu(false)}

href="/products"

className="block"

>

Products

</Link>





<Link

onClick={()=>setMenu(false)}

href="/wishlist"

className="block"

>

Wishlist ({wishlist.length})

</Link>





<Link

onClick={()=>setMenu(false)}

href="/cart"

className="block"

>

Cart ({cart.length})

</Link>





<Link

onClick={()=>setMenu(false)}

href="/account"

className="block"

>

Account

</Link>



</div>


}



</header>


);


}