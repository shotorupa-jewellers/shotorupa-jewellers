"use client";


import Link from "next/link";
import { useEffect, useState } from "react";

import { auth } from "@/lib/firebase";



export default function AccountButton(){



const [logged,setLogged] = useState(false);





useEffect(()=>{


const checkUser = ()=>{


if(auth.currentUser){

setLogged(true);

}

else{

setLogged(false);

}


};



checkUser();


const unsubscribe = auth.onAuthStateChanged(()=>{

checkUser();

});



return ()=>unsubscribe();



},[]);








return(


<Link

href={

logged

?

"/account/profile"

:

"/account"

}

className="text-black text-sm hover:text-[#9b7a3d]"

>


{

logged

?

"Profile"

:

"Account"

}



</Link>


);



}