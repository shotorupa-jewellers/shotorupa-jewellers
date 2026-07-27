"use client";

import {
  useEffect,
  useRef,
  useState
} from "react";

import {
  useRouter
} from "next/navigation";


import {
  Search,
  Bell,
  User,
  LogOut,
  ChevronDown,
  Menu
} from "lucide-react";




export default function Header({

setOpen

}:any){


const [open,setOpenMenu]=useState(false);


const router=useRouter();


const menuRef=useRef<HTMLDivElement>(null);



const today = new Date();



useEffect(()=>{


function closeMenu(e:any){

if(
menuRef.current &&
!menuRef.current.contains(e.target)
){

setOpenMenu(false);

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





return(


<header

className="
h-20
sticky
top-0
z-40

bg-gradient-to-r
from-black
via-[#17110a]
to-black

border-b
border-yellow-700/40

shadow-[0_5px_30px_rgba(212,175,55,.15)]

flex
items-center
justify-between

px-4
lg:px-8

backdrop-blur-xl

"


>






{/* LEFT */}


<div
className="
flex
items-center
gap-4
"
>



<button

onClick={()=>setOpen(true)}

className="
lg:hidden
text-yellow-400
hover:scale-110
transition
"

>

<Menu size={28}/>

</button>







{/* LOGO */}



<div

className="
flex
items-center
gap-3
"

>


<div

className="
w-12
h-12

rounded-full

border
border-yellow-500

bg-yellow-500/10

flex
items-center
justify-center

shadow-[0_0_25px_rgba(212,175,55,.5)]

"

>


<span

className="
text-yellow-400
font-serif
text-xl
font-bold
"

>

S

</span>


</div>





<div>


<h1

className="
text-lg
lg:text-xl
font-serif
font-bold

text-yellow-400

tracking-wide

"

>

Shotorupa Admin

</h1>


<p

className="
hidden
sm:block

text-xs
text-gray-400

"

>

Luxury Jewellery Management

</p>


</div>


</div>



</div>









{/* SEARCH */}



<div

className="
hidden
lg:flex

relative

w-[350px]

"

>


<input


placeholder="
Search products, orders...
"


className="

w-full

rounded-full

bg-white/10

border

border-yellow-600/40

text-white

placeholder:text-gray-400

py-2.5

pl-12

pr-5

outline-none

focus:border-yellow-400

"


/>



<Search

size={20}

className="
absolute
left-4
top-3

text-yellow-400

"

/>



</div>









{/* RIGHT */}


<div

className="
flex
items-center
gap-5

"

>





{/* DATE */}


<div

className="
hidden
xl:block
text-right
"

>


<p

className="
text-sm
text-white
font-semibold
"

>


{
today.toLocaleDateString(
"en-US",
{
weekday:"long"
}
)

}


</p>


<p

className="
text-xs
text-gray-400
"

>


{
today.toLocaleDateString(
"en-US",
{
month:"long",
day:"numeric",
year:"numeric"
}
)

}


</p>



</div>









{/* Notification */}


<button

className="
relative

text-yellow-400

hover:scale-110

transition

"

>


<Bell size={24}/>


<span

className="

absolute

-top-1

-right-2

bg-red-500

text-white

text-[10px]

w-5

h-5

rounded-full

flex
items-center
justify-center

"

>

3

</span>


</button>









{/* PROFILE */}


<div

ref={menuRef}

className="
relative
"

>



<button

onClick={()=>setOpenMenu(!open)}

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

bg-gradient-to-br

from-yellow-300

to-yellow-600


flex
items-center
justify-center


font-bold

text-black

shadow-lg

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


<p

className="
text-white
font-semibold
"

>

Admin

</p>


<p

className="
text-xs
text-gray-400
"

>

Owner

</p>


</div>



<ChevronDown

size={18}

className="
text-yellow-400
"

/>


</button>









{
open &&


<div

className="

absolute

right-0

mt-4

w-52

bg-black

border

border-yellow-600/40

rounded-xl

shadow-[0_0_30px_rgba(212,175,55,.2)]

p-2

"

>


<button

onClick={()=>router.push("/admin/profile")}

className="

flex

items-center

gap-3

w-full

px-4

py-3

text-white

hover:bg-yellow-500/20

rounded-lg

transition

"

>

<User size={18}/>

Profile


</button>





<button

onClick={logout}

className="

flex

items-center

gap-3

w-full

px-4

py-3

text-red-400

hover:bg-red-500/10

rounded-lg

transition

"

>


<LogOut size={18}/>

Logout


</button>


</div>


}



</div>





</div>



</header>


);


}