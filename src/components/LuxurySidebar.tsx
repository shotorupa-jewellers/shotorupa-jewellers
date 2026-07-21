"use client";

import { useState } from "react";
import Link from "next/link";


export default function LuxurySidebar(){


const [open,setOpen] = useState(false);



return(

<>

{/* Menu Button */}

<button

onClick={()=>setOpen(true)}

className="
text-3xl
text-[#9b7a3d]
hover:text-[#6b4d1f]
transition
"

>

☰

</button>






{/* Overlay */}


{

open &&

<div

onClick={()=>setOpen(false)}

className="
fixed
inset-0
bg-black/40
z-40
"

/>

}








{/* Sidebar */}


<aside

className={`
fixed
top-0
right-0
h-full
w-[360px]
bg-[#fffaf2]
z-50
shadow-2xl
transition-transform
duration-500
overflow-y-auto

${open ? "translate-x-0" : "translate-x-full"}

`}

>






{/* Logo */}


<div

className="
p-8
border-b
border-[#d4af37]
relative
"

>


<button

onClick={()=>setOpen(false)}

className="
absolute
right-6
top-5
text-3xl
text-[#6b4d1f]
"

>

×

</button>





<h1

className="
text-4xl
font-serif
font-bold
text-[#9b7a3d]
text-center
"

>

SHOTORUPA

</h1>



<p

className="
text-center
tracking-[5px]
text-xs
text-gray-500
mt-2
"

>

JEWELLERS

</p>



</div>







{/* MENU */}


<nav

className="
p-8
space-y-5
text-[#6b4d1f]
font-semibold
"

>





<Link

href="/"

className="block hover:text-[#9b7a3d]"

>

🏠 Home

</Link>






<Link

href="/gold"

className="block hover:text-[#9b7a3d]"

>

💍 Gold Collection

</Link>







<Link

href="/diamond"

className="block hover:text-[#9b7a3d]"

>

💎 Diamond Collection

</Link>







<Link

href="/bridal-collections"

className="block hover:text-[#9b7a3d]"

>

👰 Bridal Collection

</Link>








{/* Shop */}


<div>


<p>

🛍 Shop

</p>



<div

className="
ml-6
mt-3
space-y-3
text-gray-600
"

>


<Link href="/products/rings">

- Rings

</Link>


<Link href="/necklaces">

- Necklace

</Link>



<Link href="/earrings">

- Earrings

</Link>



<Link href="/maang-tikkas">

- Maang Tikka

</Link>


</div>


</div>







<hr className="border-[#d4af37]"/>






<Link

href="/wishlist"

className="block"

>

❤️ Wishlist

</Link>





<Link

href="/cart"

className="block"

>

🛒 Cart

</Link>






<Link

href="/account"

className="block"

>

👤 Account

</Link>








<hr className="border-[#d4af37]"/>








{/* Admin */}



<div>


<p>

⚙ Admin Panel

</p>



<div

className="
ml-6
mt-3
space-y-3
text-gray-600
"

>


<Link

href="/admin"

className="block"

>

- Dashboard

</Link>



<Link

href="/admin/add-product"

className="block"

>

- Add Product

</Link>




<Link

href="/admin/orders"

className="block"

>

- Orders

</Link>



</div>



</div>







<hr className="border-[#d4af37]"/>






<Link

href="/login"

className="block"

>

Login

</Link>






<button

className="
text-left
block
"

>

Logout

</button>







</nav>







{/* Bottom Banner */}


<div

className="
bg-[#9b7a3d]
text-white
text-center
py-6
"

>


<h2

className="
font-serif
text-xl
"

>

Luxury Jewellery

</h2>


<p className="text-sm">

Crafted For Your Special Moments

</p>


</div>







</aside>





</>

);


}