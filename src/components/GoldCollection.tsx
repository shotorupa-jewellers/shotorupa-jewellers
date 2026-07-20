"use client";

import Image from "next/image";
import Link from "next/link";

import { products } from "@/data/products";


export default function GoldCollection() {


  const goldProducts = products.filter(
    (product) => product.category === "Gold"
  );



  return (

    <section className="max-w-7xl mx-auto px-6 py-14">


      <div className="flex justify-between items-center mb-8">


        <div>

          <h2 className="text-4xl font-serif text-[#6b4d1f]">
            GOLD COLLECTION
          </h2>


          <p className="text-gray-500 mt-2">
            Timeless gold jewellery crafted with elegance.
          </p>

        </div>



        <button className="border border-[#9b7a3d] px-6 py-3 rounded-full text-[#9b7a3d] hover:bg-[#9b7a3d] hover:text-white transition">

          View All

        </button>


      </div>




      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


        {goldProducts.map((product)=>(



          <div

          key={product.id}

          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"

          >



            <div className="overflow-hidden">


              <Image

                src={product.image}

                alt={product.name}

                width={500}

                height={400}

                quality={100}

                className="w-full h-72 object-cover hover:scale-110 transition duration-500"

              />


            </div>





            <div className="p-6">


              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">

                GOLD

              </span>




              <h3 className="mt-4 text-2xl font-bold text-[#6b4d1f]">

                {product.name}

              </h3>




              <p className="mt-2 text-gray-500">

                {product.purity}

              </p>



              <p className="text-gray-500">

                Weight: {product.weight}

              </p>




              <p className="mt-4 text-3xl font-bold text-[#9b7a3d]">

                ৳ {product.price.toLocaleString()}

              </p>





              <Link

                href={`/products/${product.id}`}

                className="mt-6 block text-center w-full bg-[#9b7a3d] text-white py-3 rounded-xl hover:bg-[#7a602d] transition"

              >

                View Product

              </Link>




            </div>




          </div>



        ))}



      </div>



    </section>

  );

}