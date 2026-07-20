"use client";

import { useState } from "react";

export default function Header(){

const [open,setOpen]=useState(false);


return (

<header className="
h-20
bg-white
shadow-sm
flex
items-center
justify-between
px-8
">


{/* Left */}

<div>

<h1 className="
text-2xl
font-serif
font-bold
text-[#6b4d1f]
">

Admin Dashboard

</h1>


<p className="
text-sm
text-gray-500
">

Manage Shotorupa Jewellers

</p>


</div>





{/* Right */}

<div className="
flex
items-center
gap-5
">


{/* Notification */}

<button className="
relative
text-2xl
">

🔔

<span className="
absolute
top-0
right-0
bg-red-500
text-white
text-xs
rounded-full
w-4
h-4
flex
items-center
justify-center
">

3

</span>


</button>






{/* Profile */}

<div className="relative">


<button

onClick={()=>setOpen(!open)}

className="
flex
items-center
gap-3
"


>


<div className="
w-10
h-10
rounded-full
bg-[#d4af37]
flex
items-center
justify-center
font-bold
text-black
">

A

</div>


<div className="
hidden
md:block
text-left
">

<p className="
font-semibold
">

Admin

</p>

<p className="
text-xs
text-gray-500
">

Owner

</p>


</div>



</button>





{
open && (

<div className="
absolute
right-0
mt-3
w-40
bg-white
shadow-xl
rounded-xl
p-3
z-50
">


<button
className="
w-full
text-left
py-2
hover:bg-gray-100
rounded
"
>

👤 Profile

</button>



<button
className="
w-full
text-left
py-2
hover:bg-gray-100
rounded
text-red-600
"
>

🚪 Logout

</button>


</div>

)

}



</div>



</div>



</header>

);


}