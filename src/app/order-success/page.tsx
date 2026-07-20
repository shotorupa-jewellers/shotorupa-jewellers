"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


export default function OrderSuccessPage(){


  const [orderId, setOrderId] = useState<string | null>(null);



  useEffect(()=>{

    const savedId = localStorage.getItem("orderId");


    if(savedId){

      setOrderId(savedId);

    }else{

      const newId =
      "SHO-" + Math.floor(100000 + Math.random()*900000);


      localStorage.setItem(
        "orderId",
        newId
      );


      setOrderId(newId);

    }


  },[]);





  const whatsappMessage =

`Hello SHOTORUPA JEWELLERS,

I want to confirm my order.

Order ID: ${orderId ?? ""}

Thank you.`;




  const whatsappURL =

`https://wa.me/8801721636573?text=${encodeURIComponent(whatsappMessage)}`;





  return (

    <main className="min-h-screen bg-[#f8f4ee] flex items-center justify-center px-6">


      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-lg">


        <div className="text-6xl">
          ✅
        </div>



        <h1 className="text-4xl font-serif text-[#6b4d1f] mt-5">

          Order Successful

        </h1>




        <p className="text-gray-600 mt-4">

          Thank you for shopping with SHOTORUPA JEWELLERS.

        </p>





        <div className="mt-6 bg-[#f8f4ee] p-4 rounded-lg">


          <p className="font-bold">

            Order ID

          </p>



          <p className="text-[#9b7a3d] text-xl">

            {orderId ?? "Loading..."}

          </p>



        </div>





        <a

        href={whatsappURL}

        target="_blank"

        className="block mt-8 bg-green-600 text-white py-4 rounded-xl font-semibold"

        >

          Send Order On WhatsApp

        </a>






        <Link

        href="/"

        className="block mt-4 border border-[#9b7a3d] text-[#9b7a3d] py-4 rounded-xl"

        >

          Back To Home

        </Link>



      </div>


    </main>

  );


}