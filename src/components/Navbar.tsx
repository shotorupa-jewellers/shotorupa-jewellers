"use client";

import Link from "next/link";

import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
  X
} from "lucide-react";

import { useState, useEffect } from "react";

import { useWishlist } from "@/context/WishlistContext";
// import { useCart } from "@/context/CartContext"; // পরে cart count এর জন্য


export default function Navbar(){


const [open,setOpen]=useState(false);

const [scrolled,setScrolled]=useState(false);



const { wishlist } = useWishlist();

// const { cart } = useCart();





useEffect(()=>{


const handleScroll=()=>{

if(window.scrollY > 50){

setScrolled(true);

}else{

setScrolled(false);

}

}


window.addEventListener(
"scroll",
handleScroll
);


return()=>{

window.removeEventListener(
"scroll",
handleScroll
);

}


},[])







const menu=[

{
name:"Home",
link:"/"
},

{
name:"Gold",
link:"/gold"
},

{
name:"Diamond",
link:"/diamond"
},

{
name:"Bridal",
link:"/bridal"
},

{
name:"Collections",
link:"/collections"
},

{
name:"Our Story",
link:"/about"
},

{
name:"Contact",
link:"/contact"
}

];







return(


<header

className={`

fixed
top-0
left-0
w-full
z-50
transition-all
duration-500


${

scrolled

?

"bg-[#F6F3EC]/95 backdrop-blur-xl shadow-sm"

:

"bg-transparent"

}

`}

>





<div

className="

max-w-[1400px]
mx-auto
px-8
h-24
flex
items-center
justify-between

"

>





{/* LOGO */}



<Link

href="/"

className="

flex
flex-col
items-center
group

"

>


<h1

className="

font-serif
text-3xl
tracking-[0.28em]
text-[#19160F]
group-hover:text-[#A6875A]
transition

"

>

SHOTORUPA

</h1>



<span

className="

text-[9px]
tracking-[0.6em]
text-[#A6875A]
mt-2

"

>

JEWELLERS

</span>



</Link>










{/* DESKTOP MENU */}



<nav

className="

hidden
lg:flex
items-center
gap-9

"

>


{

menu.map((item)=>(


<Link

key={item.name}

href={item.link}

className="

relative
text-[11px]
uppercase
tracking-[0.25em]
group

"

>


{item.name}



<span

className="

absolute
left-0
bottom-[-8px]
w-0
h-[1px]
bg-[#A6875A]
transition-all
duration-300
group-hover:w-full

"

></span>


</Link>


))

}


</nav>









{/* ICON AREA */}



<div

className="

flex
items-center
gap-5

"

>





<button

className="

hover:text-[#A6875A]
transition

"

>

<Search size={19}/>

</button>






<Link

href="/account"

className="hover:text-[#A6875A]"

>

<User size={19}/>

</Link>









{/* WISHLIST */}



<Link

href="/wishlist"

className="

relative
hover:text-[#A6875A]
transition

"

>


<Heart size={19}/>




{

wishlist.length > 0 && (

<span

className="

absolute
-top-2
-right-2
w-4
h-4
rounded-full
bg-[#A6875A]
text-white
text-[9px]
flex
items-center
justify-center

"

>

{wishlist.length}

</span>

)

}



</Link>









{/* CART */}



<Link

href="/cart"

className="

relative
hover:text-[#A6875A]
transition

"

>


<ShoppingBag size={19}/>



<span

className="

absolute
-top-2
-right-2
w-4
h-4
rounded-full
bg-[#A6875A]
text-white
text-[9px]
flex
items-center
justify-center

"

>

0

</span>



</Link>









<button

onClick={()=>setOpen(!open)}

className="

lg:hidden

"

>


{

open

?

<X size={24}/>

:

<Menu size={24}/>

}



</button>




</div>





</div>









{/* MOBILE MENU */}



<div

className={`

lg:hidden
overflow-hidden
transition-all
duration-500


${

open

?

"max-h-[500px]"

:

"max-h-0"

}

`}

>


<div

className="

bg-[#F6F3EC]
px-8
py-10
border-t
border-black/10

"

>



<nav

className="

flex
flex-col
gap-7

"

>


{

menu.map((item)=>(


<Link

key={item.name}

href={item.link}

onClick={()=>setOpen(false)}

className="

text-sm
tracking-[0.25em]
uppercase
hover:text-[#A6875A]

"

>

{item.name}

</Link>


))

}


</nav>



</div>



</div>





</header>


)

}