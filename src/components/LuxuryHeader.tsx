"use client";

import Link from "next/link";
import { useState } from "react";

import {
  User2,
  Heart,
  ShoppingBag,
  Search,
  Menu,
  X,
  ChevronDown
} from "lucide-react";


export default function LuxuryHeader(){


const [open,setOpen]=useState(false);
const [search,setSearch]=useState(false);


return(

<header className="
sticky
top-0
z-50
bg-[#f9f5ee]/90
backdrop-blur-lg
shadow-md
">


{/* TOP GOLD BAR */}

<div className="
bg-[#a57c2d]
text-white
hidden
md:flex
justify-center
gap-10
py-2
text-sm
tracking-wide
">


<Link href="#">
BRIDAL COLLECTIONS
</Link>

<Link href="#">
NECKLACES
</Link>

<Link href="#">
EARRINGS
</Link>

<Link href="#">
MAANG TIKKAS
</Link>

<Link href="#">
RINGS
</Link>

<Link href="#">
DIAMONDS
</Link>

<Link href="#">
OUR STORY
</Link>

<Link href="#">
CONSULTATION
</Link>


</div>





{/* MAIN HEADER */}

<div className="
max-w-7xl
mx-auto
px-5
py-5
flex
items-center
justify-between
">





{/* LOGO */}


<Link
href="/"
className="
flex
items-center
gap-3
"
>


<div className="
relative
w-20
h-20
flex
items-center
justify-center
border
border-[#b68b2e]
rounded-full
">


<div className="
absolute
inset-2
border
border-[#b68b2e]
rounded-full
">


</div>


<span className="
text-[#b68b2e]
text-2xl
">

✦

</span>


</div>





<div>

<h1 className="
text-3xl
font-serif
tracking-widest
text-[#8b6b20]
">

SHOTORUPA

</h1>


<p className="
text-xs
tracking-[6px]
text-gray-500
">

JEWELLERS

</p>


</div>


</Link>









{/* SEARCH */}


<div className="
hidden
lg:flex
relative
w-[400px]
">


<input

placeholder="Search Jewellery..."

className="
w-full
rounded-full
border
border-[#d8c89d]
bg-white
py-3
px-6
outline-none
focus:ring-2
focus:ring-[#b68b2e]
"

/>


<Search

size={20}

className="
absolute
right-5
top-3.5
text-[#b68b2e]
"

/>


</div>









{/* ICONS */}


<div className="
flex
items-center
gap-5
text-[#8b6b20]
">


<button

onClick={()=>setSearch(!search)}

className="
lg:hidden
hover:scale-110
transition
">

<Search/>

</button>



<Link
href="/account"
className="
hover:scale-110
transition
text-center
">

<User2/>

<span className="
hidden
md:block
text-xs
">

Account

</span>


</Link>






<Link
href="/wishlist"
className="
hover:scale-110
transition
text-center
">


<Heart/>


<span className="
hidden
md:block
text-xs
">

Wishlist

</span>


</Link>







<Link
href="/cart"
className="
hover:scale-110
transition
text-center
">


<ShoppingBag/>


<span className="
hidden
md:block
text-xs
">

Cart

</span>


</Link>







<button

onClick={()=>setOpen(true)}

className="
md:hidden
hover:scale-110
transition
">

<Menu/>

</button>


</div>






</div>









{/* MOBILE SEARCH */}


{

search &&

<div className="
px-5
pb-5
lg:hidden
">


<div className="
relative
">


<input

placeholder="Search Jewellery..."

className="
w-full
border
rounded-full
py-3
px-5
"

/>


<Search

className="
absolute
right-4
top-3
text-[#b68b2e]
"

/>


</div>


</div>


}









{/* MOBILE DRAWER */}


{

open &&


<div className="
fixed
inset-0
bg-black/40
">


<div className="
absolute
right-0
top-0
h-full
w-80
bg-[#f9f5ee]
shadow-xl
p-8
">


<button

onClick={()=>setOpen(false)}

className="
absolute
right-5
top-5
">

<X/>

</button>





<h2 className="
text-3xl
font-serif
text-[#8b6b20]
mb-8
">

SHOTORUPA

</h2>





<nav className="
space-y-5
text-[#6b4d1f]
font-semibold
">


<Link href="/">
Home
</Link>


<Link href="/gold">
Gold Collection
</Link>


<Link href="/diamond">
Diamond Collection
</Link>


<Link href="/bridal">
Bridal Collection
</Link>


<Link href="/shop">
Shop
</Link>


<Link href="/wishlist">
Wishlist
</Link>


<Link href="/cart">
Cart
</Link>


<Link href="/admin">
Admin Panel
</Link>


</nav>



</div>


</div>


}




</header>


);


}