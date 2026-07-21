"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


export default function Sidebar(){


const pathname = usePathname();

const router = useRouter();



const menu = [


{
name:"Dashboard",
icon:"📊",
link:"/admin"
},



{
name:"Products",
icon:"💍",
link:"/admin/products"
},



{
name:"Add Product",
icon:"➕",
link:"/admin/add-product"
},



{
name:"Orders",
icon:"🛒",
link:"/admin/orders"
},



{
name:"Customers",
icon:"👥",
link:"/admin/customers"
},



{
name:"Offers",
icon:"🔥",
link:"/admin/offers"
},



{
name:"Settings",
icon:"⚙️",
link:"/admin/settings"
},



];






function logout(){

router.push("/admin/login");

}





return(


<aside

className="
w-72
min-h-screen
bg-[#111]
text-white
p-6
shadow-xl
hidden
md:block
"

>


{/* Logo */}

<div className="mb-10 text-center">


<h1

className="
text-3xl
font-serif
text-[#d4af37]
"

>

Shotorupa

</h1>



<p className="text-gray-400 text-sm">

Jewellers Admin

</p>


</div>







{/* Menu */}


<nav className="space-y-3">


{

menu.map((item)=>(


<Link

key={item.link}

href={item.link}


className={`
flex
items-center
gap-4
px-5
py-3
rounded-xl
transition-all
duration-300

${
pathname === item.link ||
pathname.startsWith(item.link + "/")

?

"bg-[#d4af37] text-black shadow-lg"

:

"hover:bg-white/10"

}

`}


>


<span className="text-xl">

{item.icon}

</span>



<span className="font-medium">

{item.name}

</span>



</Link>


))


}



</nav>









{/* Logout */}


<div className="mt-10">


<button


onClick={logout}


className="
w-full
bg-red-600
hover:bg-red-700
py-3
rounded-xl
font-semibold
transition
"


>


🚪 Logout


</button>



</div>





</aside>



);


}