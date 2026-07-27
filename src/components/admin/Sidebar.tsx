"use client";


import Link from "next/link";

import {
  usePathname,
  useRouter
} from "next/navigation";

import {
  useState
} from "react";


import {
  X,
  ChevronDown,
  LayoutDashboard,
  Package,
  PlusCircle,
  Layers,
  Boxes,
  ShoppingCart,
  Users,
  Gem,
  Image,
  Flame,
  BarChart3,
  UserCog,
  Settings,
  LogOut,
  Crown
} from "lucide-react";





export default function Sidebar({

open,
setOpen

}:any){



const pathname = usePathname();

const router = useRouter();


const [openMenu,setOpenMenu]=useState<string|null>(null);







const menu=[


{
name:"Dashboard",
icon:LayoutDashboard,
link:"/admin"
},



{
name:"Products",
icon:Package,

children:[

{
name:"All Products",
link:"/admin/products"
},

{
name:"Add Product",
link:"/admin/add-product",
icon:PlusCircle
},

{
name:"Categories",
link:"/admin/categories"
},

{
name:"Inventory",
link:"/admin/inventory",
icon:Boxes
}

]

},






{
name:"Orders",
icon:ShoppingCart,

children:[

{
name:"All Orders",
link:"/admin/orders"
},

{
name:"Pending Orders",
link:"/admin/orders/pending"
},

{
name:"Completed",
link:"/admin/orders/completed"
},

{
name:"Cancelled",
link:"/admin/orders/cancelled"
}

]

},






{
name:"Customers",
icon:Users,
link:"/admin/customers"
},





{
name:"Jewellery",
icon:Gem,

children:[

{
name:"Gold Collection",
link:"/admin/jewellery/gold"
},

{
name:"Diamond Collection",
link:"/admin/jewellery/diamond"
},

{
name:"Wedding Collection",
link:"/admin/jewellery/wedding"
}

]

},






{
name:"Media",
icon:Image,

children:[

{
name:"Images",
link:"/admin/media/images"
},

{
name:"Banners",
link:"/admin/media/banners"
}

]

},





{
name:"Offers",
icon:Flame,
link:"/admin/offers"
},





{
name:"Reports",
icon:BarChart3,
link:"/admin/reports"
},






{
name:"Admin Control",
icon:UserCog,

children:[

{
name:"Admin Users",
link:"/admin/users"
},

{
name:"Roles & Permission",
link:"/admin/roles"
},

{
name:"Activity Logs",
link:"/admin/logs"
}

]

},






{
name:"Settings",
icon:Settings,
link:"/admin/settings"
}



];









function logout(){

localStorage.removeItem("admin");

router.push("/admin/login");

}









return(

<>



{/* Mobile Overlay */}


{

open &&

<div

onClick={()=>setOpen(false)}

className="

fixed

inset-0

bg-black/70

backdrop-blur-sm

z-40

lg:hidden

"

/>

}









<aside


className={`

fixed

top-0

left-0

z-50


w-72

h-screen


overflow-y-auto


bg-gradient-to-b

from-[#050505]

via-[#120d05]

to-black



border-r

border-yellow-600/30



shadow-[15px_0_50px_rgba(212,175,55,.15)]


transition-transform

duration-500



${

open

?

"translate-x-0"

:

"-translate-x-full"

}



lg:translate-x-0


`}


>









{/* MOBILE CLOSE */}


<button

onClick={()=>setOpen(false)}

className="

lg:hidden

absolute

right-5

top-5

text-yellow-400

"

>

<X size={28}/>

</button>









{/* LOGO AREA */}



<div

className="

p-8

text-center

border-b

border-yellow-600/30

"

>



<div

className="

relative

w-24

h-24

mx-auto

rounded-full

border

border-yellow-500

flex

items-center

justify-center

shadow-[0_0_35px_rgba(212,175,55,.4)]

"

>



<div

className="

absolute

inset-3

rounded-full

border

border-yellow-500/40

"

/>



<Crown

size={38}

className="

text-yellow-400

"

/>


</div>







<h1

className="

mt-5

text-2xl

font-serif

tracking-[6px]

text-yellow-400

"

>

SHOTORUPA

</h1>




<p

className="

text-xs

tracking-[5px]

text-gray-400

mt-2

"

>

JEWELLERS

</p>



<p

className="

mt-4

text-[11px]

text-yellow-500/70

"

>

Luxury Management System

</p>



</div>












{/* MENU */}




<nav

className="

p-5

space-y-2

"

>





{

menu.map((item:any)=>{



const Icon=item.icon;


const active=item.link===pathname;



return(


<div

key={item.name}

>





{/* SINGLE MENU */}


{

item.link ?


<Link


href={item.link}


onClick={()=>setOpen(false)}


className={`

flex

items-center

gap-4


px-4

py-3


rounded-xl


transition-all

duration-300



${

active

?

"bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-[0_0_25px_rgba(212,175,55,.5)]"

:

"text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400"

}


`}


>


<Icon size={21}/>


<span className="font-medium">

{item.name}

</span>



</Link>



:






<>



<button


onClick={()=>setOpenMenu(

openMenu===item.name

?

null

:

item.name

)}


className="

w-full

flex

justify-between

items-center

px-4

py-3

rounded-xl

text-gray-300

hover:bg-yellow-500/10

hover:text-yellow-400

transition

"

>



<div

className="

flex

items-center

gap-4

"

>


<Icon size={21}/>


<span>

{item.name}

</span>


</div>





<ChevronDown

size={18}

className={`

transition

duration-300

${

openMenu===item.name

?

"rotate-180 text-yellow-400"

:

""

}

`}

/>



</button>








{

openMenu===item.name &&


<div

className="

ml-8

mt-2

border-l

border-yellow-600/40

pl-4

space-y-2

animate-in

fade-in

"

>


{


item.children.map((sub:any)=>(


<Link


key={sub.link}


href={sub.link}


onClick={()=>setOpen(false)}


className={`

block

py-2

text-sm

transition



${

pathname===sub.link

?

"text-yellow-400 font-semibold"

:

"text-gray-400 hover:text-white"

}


`}


>


{sub.name}


</Link>



))


}



</div>



}




</>



}



</div>


)



})

}





</nav>













{/* BOTTOM PREMIUM CARD */}



<div

className="

mx-5

mt-10

mb-5

p-4

rounded-2xl

bg-yellow-500/5

border

border-yellow-600/30

"

>



<p

className="

text-yellow-400

font-semibold

text-sm

"

>

💎 Premium Jewellery

</p>


<p

className="

text-gray-400

text-xs

mt-2

"

>

Manage gold, diamond & customer business

</p>


</div>









{/* LOGOUT */}



<button


onClick={logout}


className="

mx-5

mb-8


w-[calc(100%-2.5rem)]


py-3


rounded-xl


bg-red-600/90


hover:bg-red-700


flex

items-center

justify-center

gap-3


font-semibold


transition

"

>


<LogOut size={18}/>


Logout


</button>







</aside>



</>

)


}