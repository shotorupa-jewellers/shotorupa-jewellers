"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function ProfilePage(){


const router = useRouter();


const [user,setUser] = useState<any>(null);





useEffect(()=>{


const firebaseUser = auth.currentUser;


const savedInfo = JSON.parse(

localStorage.getItem("userInfo") || "null"

);





if(firebaseUser){


setUser({


name:

savedInfo?.name ||

firebaseUser.displayName ||

"Not Added",



email:

firebaseUser.email,



phone:

savedInfo?.phone ||

"Not Added"



});



}



else{


router.push("/account");


}



},[router]);









async function logout(){


await signOut(auth);


localStorage.removeItem("userInfo");


router.push("/account");


}








return(


<main className="min-h-screen bg-[#f8f4ee] py-12">



<section className="max-w-xl mx-auto px-6">



<div className="bg-white rounded-2xl shadow-lg p-8">







<h1 className="text-4xl font-serif text-center text-[#6b4d1f] mb-8">

My Profile

</h1>







{

user &&

<>



<div className="flex justify-center mb-8">


<div className="w-24 h-24 rounded-full bg-[#9b7a3d] text-white flex items-center justify-center text-4xl font-bold">


{

user.name.charAt(0)

}


</div>


</div>









<div className="space-y-5">



<div className="border p-4 rounded-lg">

<p className="text-gray-500">

Name

</p>


<p className="font-bold text-lg">

{user.name}

</p>


</div>








<div className="border p-4 rounded-lg">

<p className="text-gray-500">

Email

</p>


<p className="font-bold text-lg">

{user.email}

</p>


</div>









<div className="border p-4 rounded-lg">

<p className="text-gray-500">

Phone

</p>


<p className="font-bold text-lg">

{user.phone}

</p>


</div>





</div>










<Link

href="/orders"

className="block text-center mt-8 w-full bg-[#9b7a3d] text-white py-3 rounded-lg"

>

My Orders

</Link>








<button

onClick={logout}

className="mt-4 w-full bg-black text-white py-3 rounded-lg"

>

Logout

</button>





</>


}





</div>


</section>


</main>


);


}