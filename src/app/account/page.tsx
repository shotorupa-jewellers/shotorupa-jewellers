"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "@/lib/firebase";

import PhoneAuth from "@/components/PhoneAuth";


export default function AccountPage(){


const router = useRouter();


const [mode,setMode]=useState<"login"|"signup">("login");


const [name,setName]=useState("");

const [email,setEmail]=useState("");

const [phone,setPhone]=useState("");

const [password,setPassword]=useState("");

const [message,setMessage]=useState("");

const [user,setUser]=useState<any>(null);





async function signup(){


try{


if(!name || !phone || !email || !password){

setMessage("Please fill all information ❌");

return;

}



const result = await createUserWithEmailAndPassword(

auth,

email,

password

);





await updateProfile(result.user,{

displayName:name,

});





localStorage.setItem(

"userInfo",

JSON.stringify({

name:name,

email:email,

phone:phone

})

);





await sendEmailVerification(result.user);




setMessage(

"Account Created Successfully ✅ Check your email"

);





setName("");

setPhone("");

setEmail("");

setPassword("");



}



catch(error:any){

setMessage(error.message);

}


}








async function login(){


try{


const result = await signInWithEmailAndPassword(

auth,

email,

password

);





await result.user.reload();





if(result.user.emailVerified){



setUser(result.user);




const oldInfo = JSON.parse(

localStorage.getItem("userInfo") || "{}"

);





localStorage.setItem(

"userInfo",

JSON.stringify({

name:result.user.displayName || oldInfo.name || "",

email:result.user.email,

phone:oldInfo.phone || ""

})

);





setMessage(

"Login Successful ✅"

);






setTimeout(()=>{


router.push("/account/profile");


},1000);





}



else{


setMessage(

"Please verify your email first ❌"

);


}



}



catch(error:any){


setMessage(error.message);


}



}









async function forgotPassword(){


try{


await sendPasswordResetEmail(

auth,

email

);


setMessage(

"Password reset email sent ✅"

);


}

catch(error:any){

setMessage(error.message);

}


}









async function logout(){


await signOut(auth);


setUser(null);


localStorage.removeItem("userInfo");


setMessage(

"Logout Successful"

);


}









return(


<main className="min-h-screen bg-[#f8f4ee] py-12">


<section className="max-w-md mx-auto bg-white p-8 rounded-xl shadow">





<div className="flex justify-center gap-10 mb-8">


<button

onClick={()=>{

setMode("login");

setMessage("");

}}

className={
mode==="login"
?
"text-[#9b7a3d] font-bold"
:
"text-gray-500"
}

>

Login

</button>




<button

onClick={()=>{

setMode("signup");

setMessage("");

}}

className={
mode==="signup"
?
"text-[#9b7a3d] font-bold"
:
"text-gray-500"
}

>

Sign Up

</button>


</div>







<h1 className="text-3xl font-serif text-center text-[#6b4d1f] mb-6">


{

mode==="login"

?

"Customer Login"

:

"Create Account"

}


</h1>








{

mode==="signup" &&

<>


<input

placeholder="Full Name"

value={name}

onChange={(e)=>setName(e.target.value)}

className="w-full border p-3 rounded-lg mb-4"

/>





<input

placeholder="Phone Number"

value={phone}

onChange={(e)=>setPhone(e.target.value)}

className="w-full border p-3 rounded-lg mb-4"

/>


</>


}









<input

placeholder="Email"

type="email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="w-full border p-3 rounded-lg mb-4"

/>







<input

placeholder="Password"

type="password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="w-full border p-3 rounded-lg mb-4"

/>







<button

onClick={mode==="login"?login:signup}

className="w-full bg-[#9b7a3d] text-white py-3 rounded-lg"

>


{

mode==="login"

?

"Login"

:

"Sign Up"

}


</button>








{

mode==="login" &&


<button

onClick={forgotPassword}

className="mt-4 text-[#9b7a3d] underline"

>

Forgot Password?

</button>


}









{

mode==="signup" &&

<div className="mt-8">

<PhoneAuth />

</div>


}








{

user &&

<button

onClick={logout}

className="mt-5 w-full bg-black text-white py-3 rounded-lg"

>

Logout

</button>


}








{

message &&

<p className="mt-5 text-center text-[#6b4d1f]">

{message}

</p>


}




</section>


</main>


);


}