"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";


export default function Header(){


const [open,setOpen]=useState(false);

const router = useRouter();

const menuRef = useRef<HTMLDivElement>(null);





useEffect(()=>{


function closeMenu(e:any){

if(

menuRef.current &&

!menuRef.current.contains(e.target)

){

setOpen(false);

}


}


document.addEventListener(

"mousedown",

closeMenu

);



return()=>{

document.removeEventListener(

"mousedown",

closeMenu

);

}



},[]);







function logout(){


localStorage.removeItem("admin");


router.push("/admin/login");


}







return (


<header

className="
h-20
bg-white
shadow-sm
flex
items-center
justify-between
px-8
"


>




{/* Left */}


<div>


<h1

className="
text-2xl
font-serif
font-bold
text-[#6b4d1f]
"

>

Admin Dashboard

</h1>



<p

className="
text-sm
text-gray-500
"

>

Manage Shotorupa Jewellers

</p>



</div>







{/* Right */}


<div

className="
flex
items-center
gap-6
"

>



{/* Notification */}


<button

className="
relative
text-2xl
"

>

🔔


<span

className="
absolute
-top-1
-right-2
bg-red-500
text-white
text-xs
rounded-full
w-5
h-5
flex
items-center
justify-center
"

>

3

</span>



</button>









{/* Profile */}


<div

className="relative"

ref={menuRef}

>


<button

onClick={()=>setOpen(!open)}

className="
flex
items-center
gap-3
"

>


<div

className="
w-11
h-11
rounded-full
bg-[#d4af37]
flex
items-center
justify-center
font-bold
text-black
"

>

A

</div>



<div

className="
hidden
md:block
text-left
"

>


<p className="font-semibold">

Admin

</p>


<p className="text-xs text-gray-500">

Owner

</p>



</div>



</button>









{

open &&


<div

className="
absolute
right-0
mt-3
w-48
bg-white
shadow-xl
rounded-xl
p-3
z-50
border
"

>


<button

onClick={()=>router.push("/admin/profile")}

className="
w-full
text-left
px-3
py-2
hover:bg-gray-100
rounded-lg
"

>

👤 Profile

</button>







<button


onClick={logout}


className="
w-full
text-left
px-3
py-2
hover:bg-red-50
rounded-lg
text-red-600
"

>

🚪 Logout

</button>




</div>



}




</div>





</div>






</header>



);


}