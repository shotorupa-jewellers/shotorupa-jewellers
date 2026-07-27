"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Gem,
  BarChart3,
  FileText,
  Tag,
  Settings,
  LogOut
} from "lucide-react";


export default function Sidebar(){


const pathname = usePathname();



const menus=[

{
name:"Dashboard",
icon:LayoutDashboard,
path:"/admin"
},

{
name:"Products",
icon:Package,
path:"/admin/products"
},

{
name:"Orders",
icon:ShoppingCart,
path:"/admin/orders"
},

{
name:"Customers",
icon:Users,
path:"/admin/customers"
},

{
name:"Gold Stock",
icon:Gem,
path:"/admin/gold-stock"
},

{
name:"Sales Report",
icon:BarChart3,
path:"/admin/reports"
},

{
name:"Invoice",
icon:FileText,
path:"/admin/invoice"
},

{
name:"Offers",
icon:Tag,
path:"/admin/offers"
},

{
name:"Settings",
icon:Settings,
path:"/admin/settings"
}


];




return(

<aside

className="
w-72
min-h-screen
bg-[#fffaf1]
border-r
border-[#ead9b0]
px-5
py-6
"

>


{/* Logo */}

<div

className="
mb-8
text-center
"

>

<h1

className="
text-2xl
font-serif
font-bold
text-[#6b4d1f]
"

>

SHOTORUPA

</h1>


<p

className="
text-xs
tracking-[5px]
text-[#c89b3c]
"

>

ADMIN

</p>


</div>






{/* Menu */}


<div className="space-y-2">


{

menus.map((item,index)=>{


const Icon=item.icon;


const active =
pathname===item.path;



return(


<Link

key={index}

href={item.path}

className={`
flex
items-center
gap-4
px-4
py-3
rounded-xl
transition

${
active

?
"bg-[#c89b3c] text-white shadow"

:

"text-[#6b4d1f] hover:bg-[#f3e5c5]"

}

`}

>


<Icon size={21}/>


<span className="font-medium">

{item.name}

</span>


</Link>


)


})

}



</div>







{/* Bottom Logout */}


<div

className="
absolute
bottom-6
w-60
"

>


<button

className="
flex
items-center
gap-4
px-4
py-3
rounded-xl
text-red-600
hover:bg-red-50
w-full
"

>

<LogOut size={21}/>

Logout

</button>


</div>





</aside>


)


}