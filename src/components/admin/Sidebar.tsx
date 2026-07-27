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
  Boxes,
  ShoppingCart,
  Users,
  Gem,
  ImageIcon,
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
name:"City Gold Collection",
link:"/admin/jewellery/city-gold"
},



{
name:"Wedding Collection",
link:"/admin/jewellery/wedding"
}



]

},







{
name:"Media",
icon:ImageIcon,


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
name:"Roles Permission",
link:"/admin/roles"
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


{/* MOBILE OVERLAY */}


{

open &&

<div

onClick={()=>setOpen(false)}

className="
fixed
inset-0
bg-black/40
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


bg-[#F6F3EC]


border-r

border-[#A6875A]/30


shadow-xl


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









{/* CLOSE BUTTON */}


<button

onClick={()=>setOpen(false)}

className="
lg:hidden
absolute
right-5
top-5
text-[#A6875A]
"

>

<X size={25}/>


</button>









{/* BRAND */}



<div


className="

p-8

text-center

border-b

border-[#A6875A]/20

"


>


<div


className="

w-20

h-20

mx-auto

rounded-full


border

border-[#A6875A]


flex

items-center

justify-center


shadow-lg


"


>


<Crown

size={35}

className="text-[#A6875A]"

/>


</div>






<h1

className="

mt-5

font-serif

text-2xl

tracking-[5px]

text-[#19160F]

"

>

SHOTORUPA

</h1>




<p

className="

text-[10px]

tracking-[4px]

text-[#A6875A]

mt-2

"

>

JEWELLERS

</p>




<p

className="

mt-4

text-xs

text-gray-500

"

>

Luxury Management

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



${

active


?


"bg-[#A6875A] text-white shadow-md"


:


"text-[#19160F] hover:bg-[#A6875A]/10 hover:text-[#A6875A]"


}



`}


>


<Icon size={20}/>


<span className="text-sm font-medium">

{item.name}

</span>



</Link>







:







<>


<button


onClick={()=>


setOpenMenu(

openMenu===item.name

?

null

:

item.name

)

}


className="

w-full

flex

justify-between

items-center


px-4

py-3


rounded-xl


text-[#19160F]


hover:bg-[#A6875A]/10


transition


"


>



<div className="flex items-center gap-4">


<Icon size={20}/>


<span className="text-sm">

{item.name}

</span>


</div>





<ChevronDown


size={18}


className={`

transition

${

openMenu===item.name

?

"rotate-180 text-[#A6875A]"

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

border-[#A6875A]/30

pl-4

space-y-2

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

text-sm

py-2


transition


${

pathname===sub.link

?

"text-[#A6875A] font-semibold"

:

"text-gray-500 hover:text-[#19160F]"


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









{/* PREMIUM CARD */}



<div

className="

mx-5

mt-8

mb-5

p-5


rounded-2xl


bg-white


border

border-[#A6875A]/20


"


>


<p

className="

text-[#A6875A]

font-serif

text-sm

"

>

💎 Premium Jewellery

</p>



<p

className="

text-gray-500

text-xs

mt-2

leading-5

"

>

Manage gold, diamond, stock and customer business.

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


border

border-red-300


text-red-600



hover:bg-red-600

hover:text-white



flex

items-center

justify-center


gap-3



transition



"


>


<LogOut size={18}/>


Logout


</button>








</aside>



</>


);



}