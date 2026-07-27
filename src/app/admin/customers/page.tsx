"use client";

import {
  useEffect,
  useState
} from "react";


import {
  db
} from "@/lib/firebase";


import {
  collection,
  onSnapshot
} from "firebase/firestore";


import {
  Users,
  Search,
  Mail,
  Phone,
  UserRound
} from "lucide-react";





export default function CustomersPage(){



const [customers,setCustomers]=useState<any[]>([]);

const [search,setSearch]=useState("");






useEffect(()=>{



const unsub = onSnapshot(

collection(db,"users"),

(snapshot)=>{


const data=snapshot.docs.map(doc=>(

{

id:doc.id,

...doc.data()

}

));


setCustomers(data);



}



);



return()=>unsub();



},[]);









const filteredCustomers = customers.filter((user)=>{


const value = search.toLowerCase();


return(

user.name?.toLowerCase().includes(value)

||

user.email?.toLowerCase().includes(value)

||

user.phone?.includes(value)

);


});








return(



<main

className="
min-h-screen
bg-[#F6F3EC]
p-5
lg:p-10
"

>



<div

className="
max-w-7xl
mx-auto
"

>








{/* HEADER */}



<div

className="
flex
flex-col
md:flex-row
justify-between
gap-5
mb-10
"

>



<div>


<p

className="
text-xs
tracking-[0.3em]
uppercase
text-[#A6875A]
"

>

Admin Management

</p>



<h1

className="
text-4xl
font-serif
text-[#19160F]
mt-3
"

>

Customers

</h1>



<p

className="
text-gray-500
mt-2
"

>

Manage your jewellery customers

</p>



</div>








<div

className="
bg-white
border
border-[#A6875A]/20
rounded-2xl
px-6
py-4
flex
items-center
gap-3
"

>


<Users

className="
text-[#A6875A]
"

/>


<div>

<p className="text-xs text-gray-500">

Total Customers

</p>


<h2 className="text-xl font-bold">

{customers.length}

</h2>


</div>


</div>





</div>









{/* SEARCH */}



<div

className="
bg-white
rounded-2xl
border
border-[#A6875A]/20
p-4
mb-8
"

>


<div

className="
relative
"

>


<Search

className="
absolute
left-4
top-3
text-[#A6875A]
"

/>



<input

placeholder="Search customer..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="
w-full
py-3
pl-12
pr-5
rounded-xl
border
border-gray-200
outline-none
focus:border-[#A6875A]
"

/>



</div>


</div>









{/* CUSTOMER LIST */}





{

filteredCustomers.length===0 ?



<div

className="
bg-white
rounded-3xl
p-10
text-center
shadow
"

>


<UserRound

size={50}

className="
mx-auto
text-[#A6875A]
"

/>



<h2

className="
text-xl
mt-5
font-serif
"

>

No Customers Found

</h2>



</div>





:



<div

className="
grid
md:grid-cols-2
xl:grid-cols-3
gap-6
"

>



{

filteredCustomers.map((user)=>(



<div

key={user.id}

className="
bg-white
rounded-3xl
p-6
border
border-[#A6875A]/20
shadow-sm
hover:shadow-xl
transition
"

>







<div

className="
flex
items-center
gap-4
mb-5
"

>


<div

className="
w-16
h-16
rounded-full
bg-[#A6875A]
text-white
flex
items-center
justify-center
text-2xl
font-bold
"

>


{

user.name?.charAt(0)
||

"U"

}


</div>






<div>


<h2

className="
text-xl
font-serif
"

>

{

user.name || "Unknown"

}

</h2>


<p

className="
text-xs
text-gray-500
"

>

Customer ID:

{user.id.slice(0,8)}

</p>


</div>



</div>









<div

className="
space-y-3
text-sm
"

>


<p

className="
flex
items-center
gap-3
text-gray-600
"

>


<Mail

size={18}

className="text-[#A6875A]"

/>


{

user.email || "No Email"

}


</p>






<p

className="
flex
items-center
gap-3
text-gray-600
"

>


<Phone

size={18}

className="text-[#A6875A]"

/>


{

user.phone || "No Phone"

}


</p>





</div>









<div

className="
mt-5
pt-4
border-t
text-xs
text-gray-400
"

>


Registered Customer


</div>







</div>



))


}



</div>



}



</div>


</main>


);


}