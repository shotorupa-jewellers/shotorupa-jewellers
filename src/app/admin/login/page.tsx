"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";

import {
signInWithEmailAndPassword
} from "firebase/auth";

import { auth } from "@/lib/firebase";



export default function AdminLogin(){


const router = useRouter();


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [error,setError]=useState("");

const [loading,setLoading]=useState(false);







async function login(){


try{


setLoading(true);

setError("");



await signInWithEmailAndPassword(

auth,

email,

password

);



localStorage.setItem(

"admin",

"true"

);



router.push("/admin");



}

catch(err:any){


setError(

"Invalid Email or Password"

);


}

finally{


setLoading(false);


}



}








return(


<main

className="
min-h-screen
bg-[#f8f4ee]
flex
items-center
justify-center
p-6
"

>


<div

className="
bg-white
w-full
max-w-md
rounded-2xl
shadow-xl
p-8
"

>


<h1

className="
text-3xl
font-serif
text-center
text-[#6b4d1f]
mb-2
"

>

Shotorupa

</h1>



<p

className="
text-center
text-gray-500
mb-8
"

>

Admin Login

</p>






<input


type="email"

placeholder="Admin Email"


value={email}


onChange={(e)=>setEmail(e.target.value)}


className="
w-full
border
p-3
rounded-lg
mb-4
"







/>









<input


type="password"

placeholder="Password"


value={password}


onChange={(e)=>setPassword(e.target.value)}


className="
w-full
border
p-3
rounded-lg
mb-4
"







/>







{

error &&

<p

className="
text-red-600
text-center
mb-4
"

>

{error}

</p>

}







<button


onClick={login}


disabled={loading}


className="
w-full
bg-[#d4af37]
text-black
font-bold
py-3
rounded-lg
"

>


{

loading

?

"Logging..."

:

"Login"

}



</button>







</div>



</main>



);


}