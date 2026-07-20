"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function AdminSidebar(){

const pathname = usePathname();


const menu=[

{
name:"Dashboard",
link:"/admin"
},

{
name:"Product List",
link:"/admin/products"
},

{
name:"Add Product",
link:"/admin/add-product"
},

{
name:"Orders",
link:"/admin/orders"
},

{
name:"Customers",
link:"/admin/customers"
},

{
name:"Settings",
link:"/admin/settings"
}

];



return(

<aside className="w-64 min-h-screen bg-black text-white p-6">


<h1 className="text-2xl font-serif text-[#d4af37] mb-10">

SHOTORUPA

</h1>



<nav className="space-y-3">


{

menu.map((item)=>(


<Link

key={item.link}

href={item.link}

className={`block px-4 py-3 rounded-lg

${pathname===item.link

?"bg-[#9b7a3d]"

:"hover:bg-gray-800"}

`}

>

{item.name}

</Link>


))


}



<hr className="my-6 border-gray-700"/>


<button

className="w-full bg-red-600 py-3 rounded-lg"

>

Logout

</button>


</nav>



</aside>


);


}