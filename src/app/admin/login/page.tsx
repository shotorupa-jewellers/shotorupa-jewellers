"use client";

import {
  useState
} from "react";

import {
  useRouter
} from "next/navigation";

import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";

import {
  auth
} from "@/lib/firebase";

import {
  Crown,
  Eye,
  EyeOff,
  Loader2
} from "lucide-react";



export default function AdminLogin(){


const router = useRouter();


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [showPassword,setShowPassword]=useState(false);

const [error,setError]=useState("");

const [loading,setLoading]=useState(false);

const [resetLoading,setResetLoading]=useState(false);





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

catch(error:any){


if(error.code==="auth/user-not-found"){

setError("Admin account not found");

}

else if(error.code==="auth/wrong-password"){

setError("Wrong password");

}

else{

setError("Invalid login details");

}


}

finally{


setLoading(false);


}


}







async function forgotPassword(){


if(!email){

setError("Enter admin email first");

return;

}



try{


setResetLoading(true);


await sendPasswordResetEmail(

auth,

email

);


alert(
"Password reset email sent"
);


}

catch(error){


setError(
"Reset email failed"
);


}

finally{


setResetLoading(false);


}


}







return(



<main

className="
min-h-screen
bg-gradient-to-br
from-black
via-[#171008]
to-black

flex
items-center
justify-center

p-6
"

>


<div

className="
w-full
max-w-md

bg-white/10

backdrop-blur-xl

border
border-yellow-600/30

rounded-3xl

shadow-2xl

p-8

"

>





{/* LOGO */}


<div

className="
flex
justify-center
mb-6
"

>


<div

className="
w-24
h-24

rounded-full

border
border-yellow-500

flex
items-center
justify-center

bg-black

shadow-[0_0_40px_rgba(212,175,55,.3)]

"

>


<Crown

size={45}

className="
text-yellow-400
"

/>


</div>


</div>





<h1

className="
text-center

text-4xl

font-serif

tracking-widest

text-yellow-400

"

>

SHOTORUPA

</h1>



<p

className="
text-center

text-gray-400

mt-2

mb-8

"

>

Luxury Jewellery Admin Panel

</p>









<input


type="email"

placeholder="Admin Email"


value={email}


onChange={(e)=>setEmail(e.target.value)}


onKeyDown={(e)=>{

if(e.key==="Enter") login();

}}


className="

w-full

bg-black/40

border

border-yellow-600/30

text-white

p-4

rounded-xl

mb-4

outline-none

focus:border-yellow-400

"

/>









<div

className="
relative
"

>


<input


type={
showPassword
?
"text"
:
"password"
}


placeholder="Password"


value={password}


onChange={(e)=>setPassword(e.target.value)}


onKeyDown={(e)=>{

if(e.key==="Enter") login();

}}


className="

w-full

bg-black/40

border

border-yellow-600/30

text-white

p-4

rounded-xl

outline-none

focus:border-yellow-400

pr-12

"

/>





<button

type="button"

onClick={()=>setShowPassword(!showPassword)}

className="
absolute
right-4
top-4
text-yellow-400
"

>


{

showPassword

?

<EyeOff size={22}/>

:

<Eye size={22}/>

}


</button>


</div>









{

error &&


<p

className="
text-red-400

text-center

mt-4

text-sm

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

mt-6

py-4

rounded-xl


bg-gradient-to-r

from-yellow-400

to-yellow-600


text-black


font-bold


flex

justify-center

items-center

gap-2


hover:scale-105

transition

"

>


{

loading

?

<>

<Loader2

className="
animate-spin
"

/>

Checking...

</>


:

"Login To Dashboard"

}



</button>









<button


onClick={forgotPassword}


disabled={resetLoading}


className="
w-full

mt-5

text-yellow-400

text-sm

hover:underline

"

>


{

resetLoading

?

"Sending..."

:

"Forgot Password?"

}



</button>







</div>



</main>



);


}