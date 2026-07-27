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



import {
  collection,
  onSnapshot,
  query,
  orderBy,
  limit
} from "firebase/firestore";


import {
  db
} from "@/lib/firebase";








export default function Header({

setOpen

}:any){



const [open,setOpenMenu]=useState(false);


const [showNotification,setShowNotification]=useState(false);


const [notifications,setNotifications]=useState<any[]>([]);



const router=useRouter();


const menuRef=useRef<HTMLDivElement>(null);




const today=new Date();








// LIVE ORDER NOTIFICATION


useEffect(()=>{



const q=query(

collection(db,"orders"),

orderBy(
"createdAt",
"desc"
),

limit(5)

);





const unsubscribe=onSnapshot(q,(snapshot)=>{



const data=snapshot.docs.map(doc=>(


{

id:doc.id,

...doc.data()

}


));



setNotifications(data);



});





return()=>unsubscribe();



},[]);













// CLOSE PROFILE MENU


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
bg-[#F6F3EC]
border-b
border-[#A6875A]/20
shadow-sm
flex
items-center
justify-between
px-4
lg:px-8
"

>









{/* LEFT */}


<div

className="
flex
items-center
gap-5
"

>


<button

onClick={()=>setOpen(true)}

className="
lg:hidden
text-[#A6875A]
"

>


<Menu size={26}/>


</button>







<div

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
border
border-[#A6875A]
flex
items-center
justify-center
bg-white
"

>


<span

className="
font-serif
text-xl
text-[#A6875A]
"

>

S

</span>


</div>






<div>


<h1

className="
font-serif
text-xl
tracking-wide
text-[#19160F]
"

>

Shotorupa Admin

</h1>



<p

className="
text-xs
text-gray-500
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


<Search

size={19}

className="
absolute
left-4
top-3
text-[#A6875A]
"

/>



<input

placeholder="Search products, orders..."

className="
w-full
rounded-full
bg-white
border
border-[#A6875A]/30
py-2.5
pl-12
pr-5
outline-none
text-sm
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










<div

className="
hidden
xl:block
text-right
"

>


<p className="text-sm font-semibold">

{

today.toLocaleDateString(
"en-US",
{
weekday:"long"
}
)

}

</p>



<p className="text-xs text-gray-500">

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












{/* NOTIFICATION */}



<div

className="
relative
"

>


<button

onClick={()=>setShowNotification(!showNotification)}

className="
relative
text-[#A6875A]
"

>


<Bell size={22}/>





{

notifications.length>0 &&


<span

className="
absolute
top-[-8px]
right-[-8px]
bg-red-600
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


{notifications.length}


</span>


}





</button>









{

showNotification &&



<div

className="
absolute
right-0
mt-4
w-80
bg-white
border
border-[#A6875A]/20
rounded-2xl
shadow-xl
p-5
z-50
"

>


<h3

className="
font-serif
text-lg
text-[#A6875A]
mb-4
"

>

New Orders

</h3>






{

notifications.length===0 ?


<p className="text-gray-500">

No New Order

</p>





:


notifications.map((order)=>(


<div

key={order.id}

className="
border-b
py-3
"

>


<p className="font-semibold">

🛒 New Order

</p>



<p className="text-sm text-gray-500">

{

order.customer?.name || "Customer"

}

</p>



<p className="text-[#A6875A] font-bold">

৳ {order.total?.toLocaleString()}

</p>



</div>


))


}




</div>


}





</div>














{/* PROFILE */}



<div

ref={menuRef}

className="relative"

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
w-10
h-10
rounded-full
bg-[#A6875A]
text-white
flex
items-center
justify-center
font-semibold
"

>

A

</div>





<div className="hidden md:block">


<p className="text-sm font-semibold">

Admin

</p>



<p className="text-xs text-gray-500">

Owner

</p>


</div>





<ChevronDown

size={18}

className="text-[#A6875A]"

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
bg-white
border
border-[#A6875A]/20
rounded-xl
shadow-xl
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
rounded-lg
hover:bg-[#F6F3EC]
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
rounded-lg
text-red-600
hover:bg-red-50
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