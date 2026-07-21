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

  children:React.ReactNode;

}){


  const router = useRouter();


  const [loading,setLoading] = useState(true);

  const [allowed,setAllowed] = useState(false);







  useEffect(()=>{



    const unsubscribe = onAuthStateChanged(


      auth,


      (user)=>{



        if(user){


          setAllowed(true);


        }

        else{


          setAllowed(false);


          router.replace("/admin/login");


        }



        setLoading(false);



      }


    );





    return ()=>unsubscribe();




  },[router]);









  if(loading){


    return null;


  }








  if(!allowed){


    return null;


  }







  return (

    <>

      {children}

    </>

  );



}