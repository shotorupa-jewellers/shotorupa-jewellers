"use client";


import {
useState
} from "react";


import {
useRouter
} from "next/navigation";


import {
Eye,
EyeOff,
LockKeyhole
} from "lucide-react";




export default function Login(){


const router=useRouter();



const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [show,setShow]=useState(false);

const [loading,setLoading]=useState(false);





function login(){



if(
email==="admin@shotorupa.com"
&&
password==="123456"
){


setLoading(true);



document.cookie=
"admin=true; path=/";


setTimeout(()=>{

router.push("/admin");

},700);



}

else{


alert("Invalid Admin Login");


}



}







return(


<main className="
min-h-screen
bg-[#f8f4ee]
flex
items-center
justify-center
p-5
">






<div className="
relative
bg-white
w-full
max-w-md
p-10
rounded-[40px]
shadow-2xl
border
border-[#d4af37]
overflow-hidden
">







{/* GOLD FRAME */}


<div className="
absolute
top-0
left-0
w-full
h-2
bg-[#d4af37]
">


</div>







<div className="
text-center
mb-10
">





<div className="
mx-auto
w-24
h-24
rounded-full
border-2
border-[#d4af37]
flex
items-center
justify-center
mb-5
text-[#d4af37]
text-4xl
font-serif
">


✦


</div>







<h1 className="
text-4xl
font-serif
font-bold
text-[#6b4d1f]
">

SHOTORUPA

</h1>





<p className="
tracking-[6px]
text-sm
text-[#9b7a3d]
">

JEWELLERS

</p>






<p className="
mt-4
text-gray-500
">

Luxury Admin Portal

</p>



</div>









<div className="mb-5">


<label className="
text-sm
font-semibold
text-[#6b4d1f]
">

Email

</label>



<input

value={email}

onChange={(e)=>setEmail(e.target.value)}

placeholder="admin@shotorupa.com"

className="
mt-2
w-full
border
border-[#d8c89d]
p-3
rounded-xl
outline-none
focus:border-[#9b7a3d]
"

/>


</div>









<div className="mb-7">


<label className="
text-sm
font-semibold
text-[#6b4d1f]
">

Password

</label>




<div className="
relative
">


<input


type={
show
?
"text"
:
"password"
}


value={password}

onChange={(e)=>setPassword(e.target.value)}

placeholder="Enter Password"

className="
mt-2
w-full
border
border-[#d8c89d]
p-3
rounded-xl
outline-none
focus:border-[#9b7a3d]
pr-12
"

/>



<button

type="button"

onClick={()=>setShow(!show)}

className="
absolute
right-4
top-5
text-gray-500
"

>


{

show

?

<EyeOff size={20}/>

:

<Eye size={20}/>

}


</button>



</div>



</div>









<button

onClick={login}

disabled={loading}

className="
w-full
bg-[#9b7a3d]
hover:bg-[#6b4d1f]
text-white
py-3
rounded-xl
font-bold
transition
flex
justify-center
items-center
gap-2
"

>


<LockKeyhole size={20}/>


{

loading
?
"Checking..."
:
"LOGIN"

}


</button>







<p className="
text-center
text-xs
text-gray-400
mt-6
">

© Shotorupa Jewellers Admin System

</p>





</div>







</main>


);


}