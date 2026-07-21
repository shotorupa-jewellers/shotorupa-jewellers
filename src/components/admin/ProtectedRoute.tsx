"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, ReactNode } from "react";


interface ProtectedRouteProps {
  children: ReactNode;
  adminOnly?: boolean;
}


export default function ProtectedRoute({
  children,
  adminOnly = false,
}: ProtectedRouteProps) {


const router = useRouter();

const [loading,setLoading] = useState(true);



useEffect(()=>{


const user = localStorage.getItem("user");

const admin = localStorage.getItem("admin");



// Login check

if(!user && !admin){

router.push("/login");

return;

}



// Admin check

if(adminOnly && admin !== "true"){

router.push("/admin/login");

return;

}



setLoading(false);



},[router,adminOnly]);







if(loading){

return(

<div className="min-h-screen flex items-center justify-center bg-[#f8f4ee]">


<div className="text-center">


<div className="
w-12
h-12
border-4
border-[#9b7a3d]
border-t-transparent
rounded-full
animate-spin
mx-auto
"></div>



<p className="mt-4 text-[#6b4d1f]">

Loading...

</p>


</div>


</div>

);

}





return <>{children}</>;


}