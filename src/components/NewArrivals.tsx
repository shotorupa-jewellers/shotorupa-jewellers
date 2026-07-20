"use client";

import Image from "next/image";
import Link from "next/link";

import { products } from "@/data/products";


export default function NewArrivals() {


  const newProducts = products.slice(0, 4);



  return (

    <section className="max-w-7xl mx-auto px-6 py-14">


      <div className="flex justify-between items-center mb-8">


        <div>

          <h2 className="text-4xl font-serif text-[#6b4d1f]">
            NEW ARRIVALS
          </h2>


          <p className="text-gray-500 mt-2">
            Explore our latest jewellery designs.
          </p>

        </div>




        <button className="border border-[#9b7a3d] px-6 py-3 rounded-full text-[#9b7a3d] hover:bg-[#9b7a3d] hover:text-white transition">

          View All

        </button>


      </div>





      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">





        {newProducts.map((product)=>(



          <div

          key={product.id}

          className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"

          >




            <div className="relative overflow-hidden">


              <Image

                src={product.image}

                alt={product.name}

                width={400}

                height={300}

                quality={100}

                className="w-full h-64 object-cover hover:scale-110 transition duration-500"

              />



              <span className="absolute top-3 left-3 bg-[#9b7a3d] text-white text-sm px-3 py-1 rounded-full">

                NEW

              </span>



            </div>







            <div className="p-5">





              <h3 className="text-lg font-bold text-[#6b4d1f]">

                {product.name}

              </h3>





              <p className="mt-2 text-gray-500">

                {product.purity}

              </p>




              <p className="text-gray-500">

                Weight: {product.weight}

              </p>






              <p className="mt-3 text-xl font-bold text-[#9b7a3d]">

                ৳ {product.price.toLocaleString()}

              </p>






              <Link

                href={`/products/${product.id}`}

                className="mt-4 block text-center w-full border border-[#9b7a3d] text-[#9b7a3d] py-2 rounded-lg hover:bg-[#9b7a3d] hover:text-white transition"

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