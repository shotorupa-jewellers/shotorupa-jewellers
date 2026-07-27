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

import {
  useEffect,
  useState
} from "react";

import {
  AnimatePresence,
  motion
} from "framer-motion";


import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";



export default function Header(){


const [open,setOpen]=useState(false);

const [searchOpen,setSearchOpen]=useState(false);

const [scrolled,setScrolled]=useState(false);



const {cart=[]}=useCart();

const {wishlist=[]}=useWishlist();





useEffect(()=>{


const handleScroll=()=>{

setScrolled(window.scrollY > 50);

};


window.addEventListener(
"scroll",
handleScroll
);


return()=>{

window.removeEventListener(
"scroll",
handleScroll
);

};


},[]);







const sideMenu=[

{
name:"My Account",
link:"/account"
},

{
name:"Wishlist",
link:"/wishlist"
},

{
name:"Cart",
link:"/cart"
},

{
name:"Shop",
link:"/shop"
},

{
name:"Gold Collection",
link:"/gold"
},

{
name:"Diamond Collection",
link:"/diamond"
},

{
name:"Contact",
link:"/contact"
}

];





return(

<>





{/* TOP BAR */}


<div

className={`

fixed

top-0

left-0

right-0


h-10


z-20


bg-[#19160F]


text-white


flex

items-center

justify-center


text-[10px]

lg:text-xs


tracking-[0.25em]


uppercase


transition-all

duration-500


${
open

?

"opacity-0 -translate-y-full"

:

"opacity-100 translate-y-0"

}

`}

>


✨ FREE SHIPPING ON ORDERS ABOVE ৳50,000

&nbsp;&nbsp; | &nbsp;&nbsp;

CERTIFIED GOLD & DIAMOND JEWELLERY


</div>








{/* MAIN HEADER */}



<header


className={`


fixed


top-10


left-0


right-0


z-30



transition-all


duration-500



${
scrolled

?

"bg-[#F6F3EC]/95 backdrop-blur-xl shadow-lg"

:

"bg-transparent"

}



`}


>


<div


className="

max-w-[1400px]


mx-auto


px-6

lg:px-10


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


font-serif


text-2xl


tracking-[0.25em]


text-[#19160F]


hover:text-[#A6875A]


transition


"

>


SHOTORUPA


<span

className="text-[#A6875A]"

>

JEWELLERS

</span>


</Link>








{/* ICON AREA */}



<div


className="

flex


items-center


gap-6


"

>





{/* SEARCH */}


<button


onClick={()=>setSearchOpen(!searchOpen)}


className="

hover:text-[#A6875A]


transition


"


>


{

searchOpen

?

<X size={22}/>

:

<Search size={22}/>

}


</button>





{/* ACCOUNT */}


<Link

href="/account"

className="
hover:text-[#A6875A]
transition
"

>

<User size={22}/>

</Link>





{/* WISHLIST */}

<Link

href="/wishlist"

className="relative"

>

<Heart size={22}/>


{

wishlist.length>0 &&


<span

className="

absolute

top-[-8px]

right-[-10px]

w-5

h-5

rounded-full

bg-[#A6875A]

text-white

text-[10px]

flex

items-center

justify-center

"

>

{wishlist.length}

</span>

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


<ShoppingBag size={22}/>



{

cart.length>0 &&


<span


className="


absolute


top-[-8px]


right-[-10px]


w-5


h-5


rounded-full


bg-[#A6875A]


text-white


text-[10px]


flex


items-center


justify-center


"


>


{cart.length}


</span>


}



</Link>









{/* MENU BUTTON */}



<button


onClick={()=>setOpen(true)}


className="


hover:text-[#A6875A]


transition


"


>


<Menu size={28}/>


</button>





</div>





</div>


</header>












{/* SEARCH PANEL */}



<AnimatePresence>


{


searchOpen &&



<motion.div



initial={{

height:0,

opacity:0

}}



animate={{

height:"auto",

opacity:1

}}



exit={{

height:0,

opacity:0

}}




className="


fixed


top-[136px]


left-0


right-0


z-40



bg-[#F6F3EC]


shadow-xl


border-b


border-[#A6875A]/30



overflow-hidden


"



>



<div


className="

max-w-[1400px]


mx-auto


px-8


py-6


"



>



<input


autoFocus


placeholder="Search jewellery..."


className="


w-full


bg-transparent


outline-none


text-xl


font-serif


tracking-wide


placeholder:text-gray-400


"



/>


</div>


</motion.div>


}



</AnimatePresence>
id="8f3hzv"
{/* SIDEBAR MENU */}


<AnimatePresence>


{

open &&


<>


{/* OVERLAY */}


<motion.div


initial={{
opacity:0
}}


animate={{
opacity:1
}}


exit={{
opacity:0
}}



onClick={()=>setOpen(false)}



className="

fixed

inset-0

bg-black/50

backdrop-blur-sm

z-[70]

"


/>








{/* RIGHT SIDE MENU */}



<motion.aside


initial={{
x:"100%"
}}



animate={{
x:0
}}



exit={{
x:"100%"
}}



transition={{

duration:0.4,

ease:"easeInOut"

}}



className="


fixed


right-0


top-0



h-screen


w-[350px]



bg-[#F6F3EC]



z-[80]



p-8



shadow-2xl



overflow-y-auto


"



>








{/* MENU HEADER */}



<div


className="

flex

justify-between

items-center

mb-12


"



>


<h2


className="

font-serif

text-2xl

tracking-[0.25em]

text-[#19160F]

"


>


MENU


</h2>






<button


onClick={()=>setOpen(false)}



className="

hover:text-[#A6875A]

transition

"


>


<X size={28}/>


</button>



</div>









{/* MENU ITEMS */}



<div


className="

flex

flex-col

gap-7

uppercase

tracking-[0.25em]

text-sm


"



>


{


sideMenu.map((item)=>(



<Link


key={item.link}


href={item.link}


onClick={()=>setOpen(false)}



className="


text-[#19160F]


hover:text-[#A6875A]


transition-all


duration-300


"


>



{item.name}



</Link>



))


}



</div>









{/* FOOTER */}



<div


className="

mt-12

pt-8

border-t

border-[#A6875A]/30


"



>


<p


className="

font-serif

text-lg

text-[#A6875A]

tracking-widest


"


>


SHOTORUPA


</p>





<p


className="

text-xs

text-gray-500

mt-2

tracking-wider


"



>


Luxury Gold & Diamond Jewellery


</p>


</div>







</motion.aside>





</>


}



</AnimatePresence>


</>


);


}