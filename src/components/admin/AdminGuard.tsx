"use client";


import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";


import {
onAuthStateChanged
} from "firebase/auth";


import {
auth
} from "@/lib/firebase";




export default function AdminGuard({

children

}:{

children:React.ReactNode

}){


const router = useRouter();


const [loading,setLoading]=useState(true);




useEffect(()=>{


const unsubscribe = onAuthStateChanged(

auth,

(user)=>{


if(!user){


router.push("/admin/login");


}

else{


setLoading(false);


}



}


);



return ()=>unsubscribe();



},[]);






if(loading){


return(

<div className="
min-h-screen
flex
items-center
justify-center
">

Checking Admin...

</div>

)


}




return <>{children}</>;



}