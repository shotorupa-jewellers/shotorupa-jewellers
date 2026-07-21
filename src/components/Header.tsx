"use client";

import Link from "next/link";
import { useState } from "react";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";


export default function Header(){


const [menu,setMenu] = useState(false);


const { cart } = useCart();

const { wishlist } = useWishlist();





const navLinks = [

{
name:"BRIDAL COLLECTIONS",
link:"/collections/bridal"
},

{
name:"NECKLACES",
link:"/collections/necklaces"
},

{
name:"EARRINGS",
link:"/collections/earrings"
},

{
name:"MAANG TIKKAS",
link:"/collections/maang-tikkas"
},

{
name:"OUR STORY",
link:"/story"
},

{
name:"CONSULTATION",
link:"/consultation"
}

];







return(


<header className="bg-white shadow-md sticky top-0 z-50">



<div className="max-w-7xl mx-auto px-6 py-4">



<div className="flex items-center justify-between">





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






{/* Right Menu */}


<div className="hidden md:flex items-center gap-5 text-[#6b4d1f]">


<Link href="/search">
Search Jewellery
</Link>


<Link href="/account">
Account
</Link>


<Link href="/orders">
My Orders
</Link>


<Link href="/wishlist">

Wishlist ❤️

({wishlist.length})

</Link>


<Link href="/cart">

Cart 🛒

({cart.length})

</Link>


</div>







{/* Mobile Button */}

<button

onClick={()=>setMenu(!menu)}

className="md:hidden text-3xl text-[#9b7a3d]"

>

☰

</button>




</div>









{/* Desktop Navigation */}


<nav className="hidden md:flex justify-center gap-8 mt-5 text-[#6b4d1f] font-semibold">


{

navLinks.map((item)=>(


<Link

key={item.link}

href={item.link}

className="hover:text-[#9b7a3d] transition"

>

{item.name}

</Link>


))

}


</nav>







</div>








{/* Mobile Menu */}


{

menu &&

<div className="md:hidden bg-white border-t px-6 py-5 space-y-4">


{

navLinks.map((item)=>(


<Link

key={item.link}

href={item.link}

onClick={()=>setMenu(false)}

className="block text-[#6b4d1f] font-semibold"

>

{item.name}

</Link>


))

}




<Link

href="/cart"

className="block font-semibold"

>

Cart 🛒 ({cart.length})

</Link>



<Link

href="/wishlist"

className="block font-semibold"

>

Wishlist ❤️ ({wishlist.length})

</Link>



</div>


}



</header>



);


}